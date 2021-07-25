import { Button, Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UseLocalStorage } from '../../Hooks/UseLocalStorage';
import { MenuAppBar } from '../Navbar';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        margin: 'auto',
        paddingTop: 100,
    },
}));

const OrderContainer = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const { storedValue } = UseLocalStorage("order", {});
    return (
        <Container maxWidth="md">
            <MenuAppBar />
            <Grid container justifyContent='center' className={classes.root}>
                <Grid item container xs={12} justifyContent='center'>
                    <img src="https://lh3.googleusercontent.com/proxy/Jt00zAGW3RW1d4jR8pXQ6wLxUj-I8WM20qAYplePfXNNIxVM_8EV4UK6bWBG9pg1lY_oHvZPssOx6mEBQNp5faafGcOziLza1rW9GbG33WXQ9O7nZ3QbZp3mPFHFbESWOmCYqbVvlWszb5CzbZg" alt="" />
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
        </Container>
    );
};

export { OrderContainer };