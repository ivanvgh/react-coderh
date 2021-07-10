import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import { Link, useHistory } from 'react-router-dom';
import { Menu, MenuItem } from '@material-ui/core';
import { CartWidget } from '../CartWidget';

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

function MenuAppBar() {
  const history = useHistory(); // Encontré este hook para poder navegar con history.
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

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
          <CartWidget />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export { MenuAppBar };



