import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import * as React from "react";
import {useAtom} from "jotai";
import Atoms from "./Atoms/Atoms";


export default function Product({products}) {

    const [shoppingCart, updateShoppingCart]   = useAtom(Atoms.shoppingCart);

    if (products === undefined) {
        return null
    }

    const openDetails = (product) => {
        console.log(product)
    }

    //https://codesandbox.io/s/quizzical-herschel-4j4xx?file=%2Fsrc%2FApp.js%3A150-192
    const addToCart = (product) => {
        shoppingCart.OrderItem.push(product)
        updateShoppingCart({
            "TransactionId": shoppingCart.TransactionId,
            "UserId": shoppingCart.UserId,
            "Code": shoppingCart.Code,
            "FirstName": shoppingCart.FirstName,
            "LastName": shoppingCart.LastName,
            "Email": shoppingCart.Email,
            "Name": shoppingCart.Name,
            "Address": shoppingCart.Address,
            "City": shoppingCart.City,
            "Country": shoppingCart.Country,
            "Zip": shoppingCart.Zip,
            "Complete": shoppingCart.Complete,
            "OrderItem": shoppingCart.OrderItem,
        })
        //Atoms seem to work bit differently, compared to useState, TODO: come up with a cleaner solution

    }


    return (
        <Container sx={{py: 8}} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
                {products.map((product) => (
                    <Grid item key={product._Id} xs={12} sm={6} md={4}>
                        <Card sx={{height: 430, bgcolor: 'action.main'}}>
                            <CardMedia
                                component="img"
                                alt={product.Title}
                                image={'https://127.0.0.1:8000/' + product.Image}
                                justify-content="center"
                                width='20vw'
                                height='300vh'
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {product.Title}
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    {product.Description}
                                </Typography>

                                <Typography variant="subtitle1" color="text.primary" style={{fontWeight: 600}}>
                                    ${product.Price}
                                </Typography>
                            </CardContent>


                            <CardActions>
                                <Button size="small" onClick={() => openDetails(product)}>Details</Button>
                                <Button size="small" onClick={() => addToCart(product)}>Add to cart</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}



