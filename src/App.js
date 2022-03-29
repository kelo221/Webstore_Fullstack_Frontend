import './App.css';
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import Box from "@mui/material/Box";
import * as React from "react";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {useEffect} from "react";
import requests from "./components/services/requests";
import {Pagination} from "@mui/material";

import {Route, Routes, useLocation} from 'react-router-dom'

import AboutPage from "./components/AboutPage";
import RegisterPage from "./components/RegisterPage";
import MissingHandler from "./routes/MissingHandler";

import {useAtom} from "jotai"
import Atoms from "./components/Atoms/Atoms";
import Themes from "./themes/Themes"

function App() {

    const location = useLocation()

    const [usingLightTheme, setTheme] = useAtom(Atoms.lightTheme);
    const [products, setProducts] = useAtom(Atoms.products);
    const [page] = useAtom(Atoms.page);
    const [userInfo, setUserInfo] = useAtom(Atoms.userInfo);



    useEffect(() => {
        requests.getAllProducts("asc", page)
            .then(initialproducts => {
                if (initialproducts)
                    setProducts(initialproducts);
            })


        requests.getUserInfo()
            .then(userData => {
                if (userData)
                    setUserInfo(userData)
            })

    }, [page, setProducts, setUserInfo])


    return (
        <ThemeProvider theme={usingLightTheme ? Themes.ThemeLight : Themes.ThemeDark}>
            <Routes location={location} key={location.pathname}>

                <Route path="*" element={<MissingHandler/>}/>

                <Route path="/" element={
                    <Box bgcolor="background.main">
                        <CssBaseline/>
                        <main>
                            <NavBar/>

                            <Product products={products.data}/>

                            <Box my={2} display="flex" justifyContent="center">
                                <Pagination count={products.last_page} hidePrevButton hideNextButton
                                            onChange={(e) => {
                                                requests
                                                    .getAllProducts("asc", e.target.textContent)
                                                    .then(initialProducts => {
                                                        if (initialProducts)
                                                            setProducts(initialProducts);
                                                    })
                                            }}
                                />
                            </Box>
                        </main>

                    </Box>

                }/>

                <Route path="about" element={
                    <Box bgcolor="background.main">
                        <CssBaseline/>
                        <main>
                            <NavBar/>

                            <AboutPage> </AboutPage>

                        </main>
                    </Box>
                }/>

                <Route path="register" element={
                    <Box bgcolor="background.main">
                        <CssBaseline/>
                        <main>
                            <NavBar/>

                            <RegisterPage/>

                        </main>
                    </Box>
                }/>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
