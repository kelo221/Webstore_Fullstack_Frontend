import './App.css';
import NavBar from "./components/NavBar";
import Box from "@mui/material/Box";
import * as React from "react";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {useEffect} from "react";
import requests from "./components/services/requests";

import {Route, Routes, useLocation} from 'react-router-dom'

import AboutPage from "./routes/AboutPage";
import RegisterPage from "./routes/RegisterPage";
import MissingHandler from "./routes/MissingHandler";
import Store from "./components/Store/Store"
import Themes from "./themes/Themes"
import {useSnapshot} from "valtio";
import AlertBox from "./components/alerts/AlertBox";
import ProductsPage from "./routes/ProductsPage";
import CheckOutPage from "./routes/CheckOutPage";
import OrdersPage from "./routes/OrdersPage";

function App() {

    const location = useLocation()
    const snap = useSnapshot(Store)





    useEffect(() => {

        requests.getAllProducts("asc", snap.page)
            .then(initialproducts => {
                if (initialproducts) {
                    Store.products = (initialproducts);
                }
            })
    }, [Store.page])

    useEffect( () =>{
        requests.getUserInfo()
            .then(userData => {
                if (userData){
                    Store.userInfo = (userData)
                    Store.shoppingCart.UserId = userData._Id
                }
            })

    }, [Store.userInfo])

    useEffect( () =>{
        requests.GetUserOrders()
            .then(userData => {
                if (userData){
                    Store.orders = (userData)
                }
            })

    }, [Store.orders])




    return (
        <ThemeProvider theme={snap.lightTheme ? Themes.ThemeLight : Themes.ThemeDark}>
            <Routes location={location} key={location.pathname}>

                <Route path="*" element={<MissingHandler/>}/>

                <Route path="/" element={
                   <ProductsPage/>
                }/>

                <Route path="about" element={
                    <Box bgcolor="background.main">
                        <CssBaseline/>
                        <main>
                            <NavBar/>
                            <AlertBox/>
                            <AboutPage/>
                        </main>
                    </Box>
                }/>


                <Route path="checkout" element={
                    <Box bgcolor="background.main">
                        <CssBaseline/>
                        <main>
                        <CheckOutPage/>
                        </main>
                    </Box>
                }/>

                <Route path="register" element={
                    <Box bgcolor="background.main">
                        <CssBaseline/>
                        <main>
                            <NavBar/>
                            <AlertBox/>
                            <RegisterPage/>
                        </main>
                    </Box>
                }/>


                <Route path="orders" element={
                    <Box bgcolor="background.main">
                        <CssBaseline/>
                        <main>
                            <NavBar/>
                            <OrdersPage/>
                        </main>
                    </Box>
                }/>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
