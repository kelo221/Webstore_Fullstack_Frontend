import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import * as React from "react";


export default function Product({products}) {


    if (products === undefined) {
        return null
    }

    return (
        <Container sx={{py: 8}} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
                {products.map((product) => (
                    <Grid item key={product._Id} xs={12} sm={6} md={4}>
                        <Card sx={{height: 430, bgcolor: 'action.main' }}>
                            <CardMedia
                                component="img"
                                alt={product.Title}
                                image={'http://127.0.0.1:8000/' + product.Image}
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
                            </CardContent>
                            <CardActions>
                                <Button size="small">Details</Button>
                                <Button size="small">Add to cart</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}


