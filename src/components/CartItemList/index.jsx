import { Divider, List} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { UseCartContext } from '../../contexts/CartContext';
import { CartItem } from '../CartItem';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    }
}));

const CartItemList = () => {
    const { cart } = UseCartContext();
    const classes = useStyles();
    console.log('CartItemList');
    return (
        <>
            {cart.map(cartLine => {
                return (
                    <List key={cartLine.item.id} component="nav" className={classes.root} aria-label="mailbox folders">
                        <CartItem cartLine={cartLine} />
                        <Divider />
                    </List>
                );
            })}
        </>
    );
};

export { CartItemList };