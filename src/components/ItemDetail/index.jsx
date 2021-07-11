import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { UseCartContext } from '../../contexts/CartContext';
import { ItemCount } from '../ItemCount';
const useStyles = makeStyles({
    detailContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    image: {
        width: "20vw",
        padding: "50px"
    },
    detail: {
        padding: "50px 10px 50px 150px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-end"
    }
});

const ItemDetail = ({ item }) => {
    const classes = useStyles();
    const [count, setCount] = useState(0);
    const { cart, addItem } = UseCartContext();
    console.log(cart)
    const onAddToCart = () => {
        setCount(0);
        if (count > 0) addItem(item, count);
    };

    return (
        <div className={classes.detailContainer}>
            <img className={classes.image} src={item.image} alt="" />
            <div className={classes.detail}>
                <Typography gutterBottom variant="h4" component="h4">
                    {item.title} - {item.category}
                </Typography>
                <br />
                <Typography variant="body2" color="textSecondary" component="p">
                    {item.description}
                </Typography>
                <br />
                <Typography gutterBottom variant="h5" component="h5">
                    $ {item.price}
                </Typography>
                <br />
                <ItemCount
                    count={count}
                    setCount={setCount}
                />
                <Button variant="contained" color="secondary" onClick={onAddToCart}>
                    Add to cart
                </Button>
            </div>
        </div>
    );
};

export { ItemDetail };
