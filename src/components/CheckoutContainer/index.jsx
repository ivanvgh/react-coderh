import React from 'react';
import { Button, Container, Grid, Card } from '@material-ui/core';
import { MenuAppBar } from '../Navbar';
import { makeStyles } from '@material-ui/core/styles';
import { UseForm } from '../../Hooks/UseForm';
import { ShippingForm } from '../ShippingForm';
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

const CheckoutContainer = () => {
    const classes = useStyles();
    const { values, handleChange } = UseForm(initialValues);
    const { setValue } = UseLocalStorage("shippingAddress", {});
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        setValue(values);
        history.push(`/confirm-checkout`);
    };

    return (
        <Container maxWidth="md">
            <MenuAppBar />
            <Card className={classes.root}>
                <h1>Shipping Address</h1>
                <ShippingForm
                    values={values}
                    handleChange={handleChange}
                    onSubmit={handleSubmit}
                />
            </Card>
        </Container>
    );
};

export { CheckoutContainer };