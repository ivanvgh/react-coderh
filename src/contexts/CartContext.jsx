import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const CartContext = createContext({});

export const UseCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        console.log('addItem')
        if (isInCart(item.id)) {
            const newCart = cart.map(cart => {
                if (cart.item.id === item.id) {
                    return {
                        item: { ...cart.item },
                        quantity: cart.quantity + quantity,
                        totalPrice: cart.item.price * quantity,
                    };
                } else return cart;
            });

            setCart(newCart);
        } else {
            setCart(cart => [...cart, { item: { ...item }, quantity }]);
        }
    };

    const updateItem = (item, quantity) => {
        console.log('updateItem')
        if (isInCart(item.id)) {
            const newCart = cart.map(cart => {
                if (cart.item.id === item.id) {
                    return {
                        item: { ...cart.item },
                        quantity: quantity,
                        totalPrice: cart.item.price * quantity,
                    };
                } else return cart;
            });

            setCart(newCart);
        } else {
            setCart(cart => [...cart, { item: { ...item }, quantity }]);
        }
    };

    const removeItem = item => setCart(cart.filter(cart => cart.item.id !== item.id));

    const clearCart = () => setCart([]);

    const isInCart = id => cart.some(cart => cart.item.id === id);

    return (
        <CartContext.Provider value={{ cart, addItem, updateItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider };