import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import LogInPopUs from "./LogInPopUs";
import {useNavigate} from "react-router-dom";
import UserButton from "./userButton";

import ShoppingCartButton from "./shoppingCart/ShoppingCartButton";
import Tooltip from "@mui/material/Tooltip";
import {useSnapshot} from "valtio";
import Store from "./Store/Store";


const Navbar = () => {

    let pages = ['Products', 'About']
    let settings = ['Orders', 'Logout']


    const navigate = useNavigate()


    const snap = useSnapshot(Store)

    if (snap.userInfo._Id === null) {
        settings = ['Log in']
        pages = ['Products', 'About', 'Register']
    }




    const theme = snap.lightTheme ? "light" : "dark"


    const handleOpenNavMenu = (page) => {
        if (page === "Products") {
            navigate("/")
        } else if (page === "About") {
            navigate("/about")
        } else {
            navigate("/register")
        }
    }


    return (
        <React.Fragment>
            <LogInPopUs/>
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>

                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                    </Box>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{my: 2, color: 'white', display: 'block'}}
                                onClick={() => handleOpenNavMenu(page)}>
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <ShoppingCartButton/>

                    <Tooltip title="Change theme">
                        <IconButton onClick={() => Store.lightTheme = !Store.lightTheme}>
                            <img height="44" src={"https://localhost:8000/img/theme/" + theme + ".png"} alt={""}/>
                        </IconButton>
                    </Tooltip>

                    <Box>
                        <UserButton/>
                    </Box>

                </Toolbar>
            </Container>


        </AppBar>
        </React.Fragment>

    );
};
export default Navbar;