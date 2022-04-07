import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "../components/NavBar";
import AlertBox from "../components/alerts/AlertBox";
import Product from "../components/Product";
import {Pagination} from "@mui/material";
import requests from "../components/services/requests";
import Store from "../components/Store/Store";
import * as React from "react";
import {useSnapshot} from "valtio";

const ProductsPage = () => {
    const snap = useSnapshot(Store)
return(
    <Box bgcolor="background.main">
        <CssBaseline/>

            <NavBar/>
            <AlertBox/>
            <Product products={snap.products.data}/>
            <Box my={2} display="flex" justifyContent="center">
                <Pagination count={snap.products.last_page} hidePrevButton hideNextButton
                            onChange={(e) => {
                                requests
                                    .getAllProducts("asc", e.target.textContent)
                                    .then(initialProducts => {
                                        if (initialProducts)
                                            Store.products = (initialProducts);
                                    })
                            }}
                />
            </Box>
    </Box>
)
}

export default ProductsPage;