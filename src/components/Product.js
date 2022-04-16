import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import * as React from "react";
import {useSnapshot} from "valtio";
import Store from "./Store/Store";



export default function Product({products}) {

    const snap = useSnapshot(Store)

    if (products === undefined) {
        return null
    }

    const openDetails = (product) => {
        console.log(product)
    }


    const addToCart = (product) => {
        Store.shoppingCart.OrderItem.push(product)
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
                                image={'http://127.0.0.1:8000/' + product.Image}
                                justify-content="center"
                                width='20vw'
                                height='300vh'
                                sx={{ p: 1 }}
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



