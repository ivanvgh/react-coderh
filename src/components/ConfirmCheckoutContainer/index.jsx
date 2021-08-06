import React from 'react';
import { Button, Container, Grid, Card } from '@material-ui/core';
import { MenuAppBar } from '../Navbar';
import { makeStyles } from '@material-ui/core/styles';
import { UseForm } from '../../Hooks/UseForm';
import { BillingForm } from '../BillingForm';
import { UseCartContext } from '../../contexts/CartContext';
import { db } from '../../Firebase';
import { UseLocalStorage } from '../../Hooks/UseLocalStorage';
import { Link, useHistory } from 'react-router-dom';
import { ArrowBack, ShoppingBasket } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        margin: 'auto',
        marginTop: 100,
        padding: 20,
        textAlign: 'center'
    },
}));

const initialValues = {
    firstname: '',
    lastname: '',
    addressLine1: '',
    addressLine2: '',
    email: '',
    phone: '',
    city: '',
    postalCode: '',
};

const ConfirmCheckoutContainer = () => {
    const classes = useStyles();
    const { cart, clearCart } = UseCartContext();
    const { values, handleChange } = UseForm(initialValues);
    const orders = db.collection('orders');
    const { setValue } = UseLocalStorage("order", {});
    const { storedValue } = UseLocalStorage("shippingAddress", {});
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();

        const totalPrice =  cart.reduce((acum, item) => acum + item.totalPrice, 0);

        const newOrder = {
            buyer: {
                shippingAddress: values,
                billingAddress: storedValue,
            },
            orderDate: new Date,
            items: [...cart],
            total: totalPrice,
        };
        orders.add(newOrder).then(({ id }) => {
            console.log(id);
            const order = {
                ...newOrder,
                id,
            };

            setValue(order);

            cart.forEach(CartLine => {
                const batch = db.batch();
                batch.update(db.collection("products").doc(CartLine.item.id), { 'stock': CartLine.item.stock - CartLine.quantity });
                batch.commit().then(r => console.log(r));
                clearCart();
            });

            history.push(`/order`);

        });
    };

    return (
        <Container maxWidth="md">
            <MenuAppBar />
            <Card className={classes.root}>
                <h1>Billing Address</h1>
                <BillingForm
                    values={values}
                    handleChange={handleChange}
                    onSubmit={handleSubmit}
                />
                <br />
                <Grid container spacing={2}>
                    <Grid item xs={12} container justifyContent='flex-end'>
                        <Button variant="contained" color="primary" component={Link} to='/cart' endIcon={<ShoppingBasket />}>
                            Back to cart
                        </Button>
                    </Grid>
                    <Grid item xs={12} container justifyContent='flex-end'>
                        <Button variant="contained" color="default" component={Link} to='/' startIcon={<ArrowBack />}>
                            Back to shopping
                        </Button>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    );
};

export { ConfirmCheckoutContainer };