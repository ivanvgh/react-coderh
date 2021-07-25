import { Button, Grid } from '@material-ui/core';
import { Check } from '@material-ui/icons';
import React from 'react';
import { Input } from '../Controls';
import { Form } from '../Form/Index';

const ShippingForm = ({ values, handleChange, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Input
            name="firstname"
            label="Firstname"
            value={values.firstname}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            name='lastname'
            label="Lastname"
            value={values.lastname}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            name='addressLine1'
            label="Adress line 1"
            value={values.addressLine1}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            name='addressLine2'
            label="Adress line 2"
            value={values.address}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            name='email'
            label="E-mail"
            value={values.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            name='phone'
            label="Phone"
            value={values.phone}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            name='city'
            label="City"
            value={values.city}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            name='postalCode'
            label="Postal code"
            value={values.postalCode}
            onChange={handleChange}
          />
        </Grid>
        <Grid item container xs={12} direction='row' justifyContent='flex-end'>
          <Button type='submit' variant="contained" color="secondary" endIcon={<Check />}>
            Confirm order
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export { ShippingForm };