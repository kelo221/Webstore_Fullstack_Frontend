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

function App() {

    const location = useLocation()
    const snap = useSnapshot(Store)


    useEffect(() => {

        requests.getAllProducts("asc", snap.page)
            .then(initialproducts => {
                if (initialproducts)
                    Store.products = (initialproducts);
            })

    }, [snap.page])

    useEffect( () =>{
        requests.getUserInfo()
            .then(userData => {
                if (userData)
                    Store.userInfo = (userData)
            })

    }, [snap.userInfo])

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
            </Routes>
        </ThemeProvider>
    );
}

export default App;
