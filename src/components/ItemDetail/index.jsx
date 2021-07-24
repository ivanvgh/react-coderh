import { Button, CircularProgress, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UseCartContext } from '../../contexts/CartContext';
import { ItemCount } from '../ItemCount';
const useStyles = makeStyles({
    loadingContainer: {
        width: '100%',
        height: '40vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    image: {
        width: "20vw",
        padding: "50px",
    },
    detail: {
        padding: "50px 10px 50px 150px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-end",
    },
});

const ItemDetail = ({ item, loading }) => {
    const classes = useStyles();
    const [count, setCount] = useState(0);
    const { cart, addItem } = UseCartContext();

    const cartItem = cart.find(cartLine => cartLine.item.id == item.id);
    let availableStock = item.stock;
    if (cartItem) {
        availableStock = availableStock - cartItem.quantity;
    }

    const onAddToCart = () => {
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
        <div className={classes.detailContainer}>
            <img className={classes.image} src={item.image} alt="" />
            <div className={classes.detail}>
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
                <Button variant="contained" color="secondary" onClick={onAddToCart} disabled={count ? false : true}>
                    Add to cart
                </Button>
                {
                    cart.length > 0 &&
                    <>
                        <br />
                        <Button variant="contained" color="secondary">
                            <Link to="/cart" style={{ color: 'inherit', textDecoration: 'none' }}>Checkout</Link>
                        </Button>
                    </>
                }
            </div>
        </div>
    );
};

export { ItemDetail };
