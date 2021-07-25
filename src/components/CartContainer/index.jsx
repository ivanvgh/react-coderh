import { Button, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import { UseCartContext } from '../../contexts/CartContext';
import { CartItemList } from '../CartItemList';
import { MenuAppBar } from '../Navbar';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    header: {
        backgroundColor: 'whitesmoke',
        textAlign: 'right',
        marginRight: '57px'
    },
    footer: {
        textAlign: 'right',
        marginRight: '45px'
    }
}));

const CartContainer = () => {
    const { cart } = UseCartContext();
    const classes = useStyles();
    const totalCartPrice = cart.reduce((acum, item) => acum + item.totalPrice, 0);//.toFixed(2)
    console.log(cart);

    return (
        <Container maxWidth="md">
            <MenuAppBar />
            <div className="cart-lines" style={{ paddingTop: 100, width: '100%' }}>
                {
                    cart.length ?
                        <>
                            <Grid container spacing={5} className={classes.header} justifyContent="flex-end">
                                <Grid item xs={4} className={classes.header}>
                                    <h3>Total</h3>
                                </Grid>
                            </Grid>
                            <CartItemList />
                            <Grid container spacing={2} className={classes.footer} justifyContent="flex-end">
                                <Grid item xs={4} className={classes.footer}>
                                    <h3>$ {totalCartPrice ? totalCartPrice.toFixed(2) : totalCartPrice}</h3>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" color="default" component={Link} to='/'>
                                        Back to shopping
                                    </Button>
                                </Grid>
                                <Grid item xs={12} >
                                    <Button component={Link} to='/checkout' variant="contained" color="secondary">
                                        Checkout
                                    </Button>
                                </Grid>
                            </Grid>

                        </>
                        :
                        <>
                            <Grid container spacing={10}>
                                <Grid item xs={12}>
                                    <h3>This cart is Empty</h3>
                                    <Button component={Link} to='/' variant="contained" color="secondary">
                                        Go back to home
                                    </Button>
                                </Grid>
                            </Grid>
                        </>
                }
            </div>

        </Container>

    );
};

export { CartContainer };
