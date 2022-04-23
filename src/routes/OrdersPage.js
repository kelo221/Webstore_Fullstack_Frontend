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
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const OrdersPage = () => {

    const snap = useSnapshot(Store)

    const ProxyConverted = JSON.parse(JSON.stringify(snap.orders))

    console.log(ProxyConverted)



    if (ProxyConverted.length === undefined) {
        return <Box>
            <Grid container justifyContent="center">
            <h1>No orders</h1>
            </Grid>
        </Box>
    }

    const listItems = Object.keys(ProxyConverted).map((number) =>
        <React.Fragment key={number}>
            <Grid container justifyContent="center">
            <Box sx={{ textAlign: 'center', m: 10, maxWidth: "700px" }} bgcolor="action.main">

        <h3>{ProxyConverted[number]._Id}</h3>
                <p>Order Status: {ProxyConverted[number].Complete ? "Completed" : "In Progress"}</p>

            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Product Name</TableCell>
                            <TableCell align="left">Quantity</TableCell>
                            <TableCell align="left">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ProxyConverted[number].OrderItem.map((row,index) => (
                            <TableRow
                                key={index}
                            >
                                <TableCell align="left">{row.Title}</TableCell>
                                <TableCell align="left">{row.Quantity+1}</TableCell>{/* Currently, the quantity is not implemented*/}
                                <TableCell align="left">{row.Price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </Box>
            </Grid>
        </React.Fragment>
    );


    return (

        listItems

    );

};

export default OrdersPage;