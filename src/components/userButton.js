import * as React from "react";
import {Menu, MenuItem} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";


import axios from "axios";

import {useAtom} from "jotai"
import Atoms from "./Atoms/Atoms";
import requests from "./services/requests";



const UserButton = () => {

    const [areSettingVisible, setSettingsVis] = useAtom(Atoms.settingsVisibility);
    const [userInfo, setUserInfo] = useAtom(Atoms.userInfo);

    const STATES = Object.freeze({
        ORDERS: 1,
        LOG_OUT: 2,
    });

    const [anchorEl, setAnchorEl] = React.useState(null);


    const open = Boolean(anchorEl);




    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };


    const logInButton = (event) => {
        console.log("login")
        setSettingsVis(!areSettingVisible)
    };

    const logOut = (event) => {
        setSettingsVis(!areSettingVisible)
        setUserInfo("")
    }

    const submit = async () => {
        await axios.post('https://127.0.0.1:8000/api/user/logout', {
        }, {withCredentials: true})

        setUserInfo({
            "Email": null,
            "IsAdmin": false,
            "_Id": null,
            "Avatar": "/img/users/noImage.jpg"
        })
    }


    const handleClose = (who) => {

        if (who === STATES.ORDERS) {
            console.log("orders")
        }

        else if (who === STATES.LOG_OUT) {
            console.log("LOG_OUT")
            requests.LogOut()
                .then(r => {
                    setUserInfo({
                        "Email": null,
                        "IsAdmin": false,
                        "_Id": null,
                        "Avatar": "/img/users/noImage.jpg"
                    })
                })
        }

        setAnchorEl(null);
    };

    if (userInfo._Id===null){
        return (
            <React.Fragment >
                <div>
                    <Tooltip title="Profile">
                        <IconButton  sx={{p: 0}} onClick={logInButton}>
                            <Avatar src={"https://127.0.0.1:8000/img/users/noImage.jpg"}/>
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
                    <Avatar src={"https://127.0.0.1:8000/" + userInfo.Avatar}/>
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
                <MenuItem onClick={() => handleClose(STATES.ORDERS)}>Past Orders</MenuItem>
                <MenuItem onClick={() => handleClose(STATES.LOG_OUT)}>Logout</MenuItem>
            </Menu>
        </div>


    </React.Fragment>
    )
}

export default UserButton;