import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Menu, MenuItem } from '@material-ui/core';
import { CartWidget } from '../CartWidget';

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
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (test) => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            VanQuor
          </Typography>
          <MenuItem onClick={handleProfileMenuOpen}>
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
          <CartWidget />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export { MenuAppBar };



