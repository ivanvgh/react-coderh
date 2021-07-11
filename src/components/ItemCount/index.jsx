import { Button, makeStyles, TextField } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    counterContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: 20,
        alignItems: 'center',
    },
    margin: {
        margin: theme.spacing(5),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

function ItemCount({ count, setCount }) {
    const classes = useStyles();
    const handleIncrementCount = () => setCount(count + 1);
    const handleDecrementCount = () => {
        if (count > 0) setCount(count - 1);
    };

    return (
        <div className={classes.counterContainer}>
            <Button size="small" variant="contained" onClick={handleDecrementCount} className={classes.margin}>-</Button>
            <h2>{count}</h2>
            <Button size="small" variant="contained" onClick={handleIncrementCount} className={classes.margin}>+</Button>
        </div>
    );
}

export { ItemCount };