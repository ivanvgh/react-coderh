import { Button, Grid, ListItem, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Delete } from '@material-ui/icons';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { UseCartContext } from '../../contexts/CartContext';
import { ItemCount } from '../ItemCount';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500
    },
    image: {
        width: 128,
        height: 128
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: 80,
        maxHeight: 80,
        cursor: 'pointer'
    }
}));


const CartItem = ({ cartLine }) => {
    const classes = useStyles();
    const { item, quantity, totalPrice } = cartLine;
    const { updateItem, removeItem } = UseCartContext();
    const history = useHistory();

    const [count, setCount] = useState(quantity);

    useEffect(() => {
        updateItem(item, count);
    }, [count]);

    const handleItemClick = () => {
        history.push(`/item/${item.id}`);
    };

    const handleRemoveClick = () => {
        removeItem(item);
    };

    return (
        <ListItem>
            <Grid container spacing={10}>
                <Grid item xs={2}>
                    <img
                        className={classes.img}
                        alt="complex"
                        src={item.image}
                        onClick={handleItemClick}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            SKU: 91238989
                        </Typography>
                    </Grid>
                    <Grid
                        item container
                        justifyContent="flex-start"
                    >
                        <Button onClick={handleRemoveClick}><Delete /></Button>
                    </Grid>
                </Grid>
                <Grid item xs={4} container direction="row" spacing={2}>
                    <Grid item xs>
                        <ItemCount
                            count={count}
                            setCount={setCount}
                            minCount={1}
                            stock={item.stock}
                            showStock={false}
                        ></ItemCount>
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="subtitle1">$ {totalPrice ? totalPrice.toFixed(2) : totalPrice}</Typography>
                </Grid>
            </Grid>
        </ListItem>

    );
};

export { CartItem };