import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Store from "../Store/Store";

export default function AddressForm() {


    const handleTextInputChange = (event, target) => {
        Store.shoppingCart[target] = event.target.value
    }

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        onChange={(event) => handleTextInputChange(event, "FirstName")}
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        onChange={(event) => handleTextInputChange(event, "LastName")}
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        onChange={(event) => handleTextInputChange(event, "Address")}
                        id="address1"
                        name="address1"
                        label="Address line"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        onChange={(event) => handleTextInputChange(event, "City")}
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="shipping address-level2"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        onChange={(event) => handleTextInputChange(event, "Zip")}
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Postal code"
                        fullWidth
                        autoComplete="shipping postal-code"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        onChange={(event) => handleTextInputChange(event, "Country")}
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="shipping country"
                        variant="standard"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
