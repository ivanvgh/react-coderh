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
}));

function ItemCount({ count, setCount }) {
    const classes = useStyles();

    return (
        <div className={classes.counterContainer}>
            <Button size="small" variant="contained" onClick={() => setCount(count-1 ? count - 1 : count)} className={classes.margin}>-</Button>
            <h2>{count}</h2>
            <Button size="small" variant="contained" onClick={() => setCount(count + 1)} className={classes.margin}>+</Button>
        </div>
    );
}

export { ItemCount };