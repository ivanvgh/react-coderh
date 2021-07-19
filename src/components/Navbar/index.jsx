import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import { Link, useHistory } from 'react-router-dom';
import { Badge, Menu, MenuItem } from '@material-ui/core';
import { CartWidget } from '../CartWidget';
import { UseCartContext } from '../../contexts/CartContext';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginBottom: 30,
  },
  linkButton: {
    textDecoration: 'none',
    color: 'inherit'
  },
  title: {
    flexGrow: 1,
  },
}));

const MenuAppBar = () => {
  const { cart } = UseCartContext();
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const cartItems = cart.reduce((acum, item) => acum + item.quantity, 0);

  const handleCategoryMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (categoryId) => {
    setAnchorEl(null);
    if (typeof categoryId === 'string') {
      history.push(`/category/${categoryId}`);
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.linkButton} to={`/`}>VanQuor</Link>
          </Typography>
          <MenuItem onClick={handleCategoryMenuOpen}>
            <IconButton aria-label="display more actions" edge="end" color="inherit">
              <ArrowDropDownIcon />
            </IconButton>
            <p>Categories</p>
          </MenuItem>
          <Menu
            anchorEl={anchorEl}
            id="category-menu"
            keepMounted
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleClose("electronics")}>Electronics</MenuItem>
            <MenuItem onClick={() => handleClose("jewelery")}>Jewelery</MenuItem>
            <MenuItem onClick={() => handleClose("men's%20clothing")}>Men's clothing</MenuItem>
            <MenuItem onClick={() => handleClose("women's%20clothing")}>Nomen's clothing</MenuItem>
          </Menu>
          {
            cart.length > 0 &&
            <Badge badgeContent={cartItems} color="secondary">
              <CartWidget />
            </Badge>
          }


        </Toolbar>
      </AppBar>
    </div>
  );
};

export { MenuAppBar };



