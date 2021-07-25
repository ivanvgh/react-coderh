import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        // '& .MuiFormControl-root': {
        //     width: '100%',
        //     // margin: theme.spacing(1),
        // },
        // '& .MuiFormControl-fullWidth':{
        //     width: '100%',
        // }
    },
}));

const Form = props => {
    const { children, ...otherProps } = props;
    const classes = useStyles();

    return (
        <form className={classes.root} {...otherProps}>
            {children}
        </form>
    );
};

export { Form };