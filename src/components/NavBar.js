import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import {UserContext} from "./contexts/userContext";
import {useContext, useState} from "react";
import LogInPopUs from "./LogInPopUs";


import {useLocation, useNavigate} from "react-router-dom";
import UserButton from "./userButton";







const Navbar = ({ usingLightTheme, setCurrentTheme}) => {

    let pages = ['Products', 'About']
    let settings = ['Orders', 'Logout']


    const navigate = useNavigate()

    const {userInfo, setUserInfo} = useContext(UserContext)



    if (userInfo._Id === null) {
        settings = ['Log in']
        pages = ['Products', 'About','Register']
    }

    const theme = usingLightTheme ? "light" : "dark"


    const [areSettingVisible, setSettingsVis] = useState(false);

    const handleOpenNavMenu =(page)=> {
        console.log("handleOpenNavMenu",page)
        if (page === "Products"){
            navigate("/")
        }else if (page === "About") {
            navigate("/about")
        }else {
            navigate("register")
        }
    }

    const handleOpenUserMenu=()=> {
        console.log("handleOpenUserMenu")
    }


    return (
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


                    <IconButton onClick={() => setCurrentTheme(prev => !prev)}>
                        <img height="44" src={"http://localhost:8000/img/theme/"+theme+".png"} alt={""}/>
                    </IconButton>


                    <Box sx={{flexGrow: 0}}>
                        <UserButton areSettingVisible={areSettingVisible} setSettingsVis={setSettingsVis}/>
                    </Box>
                </Toolbar>
            </Container>
              <LogInPopUs  areSettingVisible={areSettingVisible} setSettingsVis={setSettingsVis}/>
        </AppBar>


    );
};
export default Navbar;