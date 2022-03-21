import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';


const Navbar2 = ({ usingLightTheme, setCurrentTheme}) => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
        console.log("handleOpen")
    };

    const handleClose = () => {
        setOpen(false);
        console.log("handleClose")
    };

    return (
        <div >
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start"
                                color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Geeks for Geeks
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};
export default Navbar2;