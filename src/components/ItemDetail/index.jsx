import { Button, Card, CircularProgress, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UseCartContext } from '../../contexts/CartContext';
import { ItemCount } from '../ItemCount';
import { useSnackbar } from 'notistack';
import { ArrowForward, ArrowRight, ShoppingBasket } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        padding: 50,
    },
    loadingContainer: {
        width: '100%',
        height: '40vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: "16vw",
        height: 'auto',
    },
});

const ItemDetail = ({ item, loading }) => {
    const { enqueueSnackbar } = useSnackbar();
    const classes = useStyles();
    const [count, setCount] = useState(0);
    const { cart, addItem } = UseCartContext();

    const cartItem = cart.find(cartLine => cartLine.item.id == item.id);
    let availableStock = item.stock;
    if (cartItem) {
        availableStock = availableStock - cartItem.quantity;
    }

    const onAddToCart = () => {
        enqueueSnackbar('Product added to you cart!', { variant: 'success' });
        addItem(item, count);
        setCount(0);
    };

    if (loading) {
        return (
            <div className={classes.loadingContainer}>
                <CircularProgress />
            </div>
        );
    }

    return (
        <Card className={classes.root}>
            <Grid container spacing={2}>
                <Grid item container xs={5} justifyContent='center'>
                    <img className={classes.image} src={item.image} alt="" />
                </Grid>
                <Grid item container xs={7} spacing={10}>
                    <Grid item container>
                        <Typography gutterBottom variant="h4" component="h4">
                            {item.title} - {item.category}
                        </Typography>
                        <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                            {item.description}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h5">
                            $ {item.price}
                        </Typography>
                        <ItemCount
                            count={count}
                            setCount={setCount}
                            minCount={0}
                            stock={availableStock}
                            showStock={true}
                        />
                        <Grid container spacing={2} justifyContent='flex-end' >
                            <Grid item container xs={12} justifyContent='flex-end'>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={onAddToCart}
                                    disabled={count ? false : true}
                                    endIcon={<ShoppingBasket />}
                                >
                                    Add to cart
                                </Button>
                            </Grid>
                            <Grid item container xs={12} justifyContent='flex-end'>
                                <Button
                                    component={Link}
                                    to="/cart"
                                    variant="contained"
                                    color="primary"
                                    disabled={cart.length ? false : true}
                                    endIcon={<ArrowForward />}
                                >
                                    Go to cart
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
};

export { ItemDetail };
