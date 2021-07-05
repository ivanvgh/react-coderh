import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
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
    return (
        <div className={classes.detailContainer}>
            <img className={classes.image} src={item.image} alt="" />
            <div className={classes.detail}>
                <Typography gutterBottom variant="h5" component="h2">
                    {item.title} - {item.category}
                </Typography>
                <br />
                <Typography variant="body2" color="textSecondary" component="p">
                    {item.description}
                </Typography>
                <br />
                <Typography variant="body2" color="textSecondary" component="p">
                    $ {item.price}
                </Typography>
                <br />
                <Button variant="contained" color="secondary">
                    Add to cart
                </Button>
            </div>
        </div>
    );
};

export { ItemDetail };
