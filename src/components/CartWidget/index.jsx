import React from 'react';
import { ShoppingCart } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

function CartWidget() {
    return (
        <IconButton
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
        >
            <ShoppingCart />
        </IconButton>
    );
}

export { CartWidget };