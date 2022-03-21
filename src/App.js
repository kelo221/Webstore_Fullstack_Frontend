import './App.css';
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import Box from "@mui/material/Box";
import * as React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {useContext, useEffect, useState} from "react";
import requests from "./components/services/requests";
import {Pagination, useTheme} from "@mui/material";

import {Route, Routes, useLocation, useNavigate} from 'react-router-dom'

import {UserContext} from './components/contexts/userContext'
import AboutPage from "./components/AboutPage";

//https://coolors.co/6c9a8b-77625c-49392c-eaf2d7-f7b2ad
const themeLight = createTheme({

    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: "#EAF2D7",
                }
            }
        }
    },

    palette: {
        primary: {
            main: '#6C9A8B',
        },
        secondary: {
            main: '#77625C',
        },
        common: {
            main: '#49392C'
        },
        background: {
            main: '#EAF2D7'
        },
        action: {
            main: '#eeeeee'
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
            main: '#3B3B3B',
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



    console.log(userInfo)


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
            </Routes>
        </ThemeProvider>
    );
}

export default App;
