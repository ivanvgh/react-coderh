import { TextField } from '@material-ui/core';
import React from 'react';

const Input = props => {
    const {
        label,
        name,
        value,
        onChange,
        ...otherProprs
    } = props;
    return (
        <TextField
            fullWidth
            variant="outlined"
            name={name}
            label={label}
            onChange={onChange}
            value={value}
            {...otherProprs}
            autoComplete='off'
        />
    );
};

export { Input };