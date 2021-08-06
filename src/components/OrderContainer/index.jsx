import { Button, Card, Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UseLocalStorage } from '../../Hooks/UseLocalStorage';
import { MenuAppBar } from '../Navbar';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        margin: 'auto',
        marginTop: 120,
        padding: 40
    },
}));

const OrderContainer = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const { storedValue } = UseLocalStorage("order", {});
    return (
        <Container maxWidth="md">
            <MenuAppBar />
            <Card className={classes.root}>
                <Grid container justifyContent='center' >
                    <Grid item container xs={12} justifyContent='center'>
                        <img src="https://m.media-amazon.com/images/I/41Gb3UOjT5L.jpg" alt="" />
                    </Grid>
                    <Grid item container xs={12} justifyContent='center'>
                        <h1>Order N°-{storedValue.id}</h1>
                    </Grid>
                    <Grid item container xs={12} justifyContent='center'>
                        <Button variant="contained" color="secondary" component={Link} to='/'>
                            Back to shopping
                        </Button>
                    </Grid>
                </Grid>
            </Card>

        </Container>
    );
};

export { OrderContainer };