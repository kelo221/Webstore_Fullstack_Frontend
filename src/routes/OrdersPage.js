import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer, TableHead, TableRow
} from "@mui/material";

import {useSnapshot} from "valtio";
import Store from "../components/Store/Store";
import Paper from "@mui/material/Paper";


function CommentIcon() {
    return null;
}

const OrdersPage = () => {

    const snap = useSnapshot(Store)

    console.log(snap.orders)

    if (snap.orders.OrderItem === undefined) {
        return null
    }

    return (

        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Product Title</TableCell>
                        <TableCell align="left">Price</TableCell>
                        <TableCell align="left">Quantity</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {snap.orders.OrderItem.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell align="left">{row.Title}</TableCell>
                            <TableCell align="left">{row.Price}</TableCell>
                            <TableCell align="left">{row.Quantity}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );

    /* <React.Fragment >
         { Object.keys(snap.orders.OrderItem).map((arrayIndex) => (
           <p>
               {snap.orders.OrderItem[arrayIndex].Title}
           </p>
         ))
         }
     </React.Fragment>
 );*/
};

export default OrdersPage;