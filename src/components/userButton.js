import * as React from "react";
import Button from "@mui/material/Button";
import {Menu, MenuItem} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import {useContext} from "react";
import {UserContext} from "./contexts/userContext";
import LogInPopUs from "./LogInPopUs";
import requests from "./services/requests";
import axios from "axios";
const UserButton = ({areSettingVisible,setSettingsVis}) => {

    const STATES = Object.freeze({
        ORDERS: 1,
        LOG_OUT: 2,
    });

    const {userInfo} = useContext(UserContext)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };


    const logInButton = (event) => {
        console.log("login")
        setSettingsVis(!areSettingVisible)
        console.log(areSettingVisible)
    };

    const logOut = (event) => {
        setSettingsVis(!areSettingVisible)
    };

    const submit = async () => {
        await axios.post('http://127.0.0.1:8000/api/user/logout', {
        }, {withCredentials: true})

    }


    const handleClose = (who) => {

        if (who === STATES.ORDERS) {
            console.log("orders")
        }

        else if (who === STATES.LOG_OUT) {
            console.log("LOG_OUT")
            submit().then(r => console.log(r))
        }

        setAnchorEl(null);
    };

    if (userInfo._Id===null){
        return (
            <React.Fragment >
                <div>
                    <Tooltip title="Profile">
                        <IconButton  sx={{p: 0}} onClick={logInButton}>
                            <Avatar src={"http://127.0.0.1:8000/" + userInfo.Avatar}/>
                        </IconButton>
                    </Tooltip>
                </div>

            </React.Fragment>
        )
    }



    return(
    <React.Fragment >

        <div>

            <Tooltip title="Profile">
                <IconButton  sx={{p: 0}} onClick={handleClick}>
                    <Avatar src={"http://127.0.0.1:8000/" + userInfo.Avatar}/>
                </IconButton>
            </Tooltip>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => handleClose(STATES.ORDERS)}>Orders</MenuItem>
                <MenuItem onClick={() => handleClose(STATES.LOG_OUT)}>Logout</MenuItem>
            </Menu>
        </div>


    </React.Fragment>
    )
}

export default UserButton;