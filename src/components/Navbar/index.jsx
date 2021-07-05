import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import MoreIcon from '@material-ui/icons/MoreVert';

import { Link, useHistory } from 'react-router-dom';
import { Menu, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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



function MenuAppBar() {
  const history = useHistory(); // Encontré este hook para poder navegar con history.
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleClose = (test) => {
    setAnchorEl(null);
    history.push(`/category/${test}`);
  };



  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.linkButton} to={`/`}>ECOMMERCE-BRAND</Link>
          </Typography>
          <div>
            <IconButton
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <ShoppingCart />
            </IconButton>
            <MenuItem onClick={handleProfileMenuOpen}>
              <IconButton aria-label="display more actions" edge="end" color="inherit">
                <MoreIcon />
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
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export { MenuAppBar };



