import { Container } from '@material-ui/core';
import React from 'react';
import { UseCartContext } from '../../contexts/CartContext';
import { MenuAppBar } from '../Navbar';

const cartLine = (cartItem) => <p key={cartItem.item.id}>Product: {cartItem.item.title} - Quantity-{cartItem.quantity}</p>;

const CartContainer = () => {
    const { cart } = UseCartContext();
    const cartLines = cart.map(cartItem => cartLine(cartItem));
    console.log('cart');
    console.log(cart);
    return (
        <Container fixed>
            <MenuAppBar />
            <div className="cart-lines" style={{ paddingTop: 100 }}>
                <p>Cart items</p>
                {cartLines}
            </div>
        </Container>
    );
};

export { CartContainer };