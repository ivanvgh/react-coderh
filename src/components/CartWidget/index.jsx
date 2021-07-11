import React from 'react';
import { ShoppingCart } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function CartWidget() {
    const history = useHistory();
    return (
        <IconButton
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
        >
            <ShoppingCart onClick={() => history.push('/cart')} />
        </IconButton>
    );
}

export { CartWidget };