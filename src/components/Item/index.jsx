import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import { KeyboardArrowRight } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';
import React from 'react';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
    root: {
        '& .MuiCardMedia-img': {
            objectFit: 'inherit',
            width: '50%',
            margin: 'auto',
            padding: '10px'
        },
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
                    height="200"
                    image={item.image}
                    title={item.title}
                />
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1" gutterBottom>
                                {`${item.title.substring(0, 30)}...`}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2" color="textSecondary">
                                {`${item.description.substring(0, 100)}...`}
                            </Typography>
                        </Grid>
                        <Grid item container xs={12} justifyContent='flex-end'>
                            <Typography variant="h6" component="h6">
                                $ {item.price}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6" component="h6">
                                {
                                    item.stock == 0 &&
                                    <Alert severity="error">Out of stock.</Alert>
                                }
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
            {
                item.stock > 0 &&
                <CardActions>
                    <Grid container justifyContent='flex-end'>
                        <Button
                            component={Link}
                            to={`/item/${item.id}`}
                            variant="contained"
                            color="primary"
                            endIcon={<KeyboardArrowRight />}
                        >
                            Details
                        </Button>
                    </Grid>
                </CardActions>
            }
        </Card >
    );
};

export default Item;