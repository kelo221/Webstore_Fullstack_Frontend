import './App.css';
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import Box from "@mui/material/Box";
import * as React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {useContext, useEffect, useState} from "react";
import requests from "./components/services/requests";
import {Pagination} from "@mui/material";

import {Route, Routes, useLocation} from 'react-router-dom'

import {UserContext} from './components/contexts/userContext'
import AboutPage from "./components/AboutPage";
import RegisterPage from "./components/RegisterPage";
import MissingHandler from "./routes/MissingHandler";

//https://coolors.co/b8d8ba-d9dbbc-fcddbc-ef959d-69585f
const themeLight = createTheme({

    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: "#FCDDBC",
                }
            }
        }
    },

    palette: {
        primary: {
            main: '#EF959D',
        },
        secondary: {
            main: '#E4E3E9',
        },
        common: {
            main: '#B8D8BA'
        },
        background: {
            main: '#FCDDBC'
        },
        action: {
            main: '#D9DBBC'
        },
    },
});

//https://coolors.co/484a4a-3b3b3b-222120-83837e-7a7070
const themeDark = createTheme({

    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: "#83837E",
                }
            }
        }
    },


    palette: {
        primary: {
            main: '#484A4A',
        },
        secondary: {
            main: '#9590A8',
        },
        common: {
            main: '#222120'
        },
        background: {
            main: '#83837E'
        },
        action: {
            main: '#989898'
        },
    },
});


function App() {

    const location = useLocation()
    const [usingLightTheme, setTheme] = React.useState(true);
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1)
    const {userInfo, setUserInfo} = useContext(UserContext)



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

    }, [page, setUserInfo])



    return (
        <ThemeProvider theme={usingLightTheme ? themeLight : themeDark}>
            <Routes location={location} key={location.pathname}>

                <Route path="*" element={<MissingHandler/>} />

                <Route path="/" element={
                    <Box bgcolor="background.main">
                        <CssBaseline/>
                        <main>
                            <NavBar
                                usingLightTheme={usingLightTheme} setCurrentTheme={setTheme}
                            />

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
                            <NavBar
                                usingLightTheme={usingLightTheme} setCurrentTheme={setTheme}
                            />

                            <AboutPage> </AboutPage>

                        </main>
                    </Box>
                }/>

                <Route path="register" element={
                    <Box bgcolor="background.main">
                        <CssBaseline/>
                        <main>
                            <NavBar
                                usingLightTheme={usingLightTheme} setCurrentTheme={setTheme}
                            />

                            <RegisterPage></RegisterPage>

                        </main>
                    </Box>
                }/>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
