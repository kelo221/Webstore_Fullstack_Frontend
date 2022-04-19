import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import {useSnapshot} from "valtio";
import Store from "../Store/Store";

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export default function Review() {

  const snap = useSnapshot(Store)

  const getTotal = ()=>{

  let total=0

    for (let i = 0; i < snap.shoppingCart.OrderItem.length; i++) {
      total += snap.shoppingCart.OrderItem[i].Price
    }

    return total.toFixed(2)
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {Object.keys(snap.shoppingCart.OrderItem).map((arrayIndex) => (
          <ListItem key={arrayIndex} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={snap.shoppingCart.OrderItem[arrayIndex].Title}
                          secondary={snap.shoppingCart.OrderItem[arrayIndex].Description} />
            <Typography variant="body2">{snap.shoppingCart.OrderItem[arrayIndex].Price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {getTotal()}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>


          <Grid item xs={6}>
            <Typography gutterBottom>{snap.shoppingCart.FirstName +" "+ snap.shoppingCart.LastName}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{snap.shoppingCart.Address +" "+ snap.shoppingCart.City +" "+ snap.shoppingCart.Zip
                +" "+ snap.shoppingCart.Country


            }</Typography>
          </Grid>


        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
