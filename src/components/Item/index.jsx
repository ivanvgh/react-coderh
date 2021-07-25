import { Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React from 'react';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flex: "1 0 21 %",
        margin: 20,
    },
});

const Item = ({ item }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={item.title}
                    height="250"
                    image={item.image}
                    title={item.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h6">
                        {item.title} - {item.category}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {item.description}
                    </Typography>
                    <Typography variant="h6" component="h6">
                        $ {item.price}
                    </Typography>
                    <Typography variant="h6" component="h6">
                        {
                            item.stock == 0 &&
                            <Alert severity="error">Out of stock.</Alert>
                        }
                    </Typography>

                </CardContent>
            </CardActionArea>
            {
                item.stock > 0 &&
                <CardActions>
                    <Link to={`/item/${item.id}`}>Details</Link>
                </CardActions>
            }
        </Card>
    );
};

export default Item;