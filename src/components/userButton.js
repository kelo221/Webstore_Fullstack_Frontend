import * as React from "react";
import {Menu, MenuItem} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import requests from "./services/requests";
import {useSnapshot} from "valtio";
import Store from "./Store/Store";
import {useNavigate} from "react-router-dom";


const UserButton = () => {


    const navigate = useNavigate()
    const snap = useSnapshot(Store)

    const STATES = Object.freeze({
        ORDERS: 1,
        LOG_OUT: 2,
    });

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };


    const handleClose = (who) => {

        if (who === STATES.ORDERS) {
            navigate("/orders")
        } else if (who === STATES.LOG_OUT) {
            requests.LogOut()
                .then(r => {
                    Store.setUserInfo = ({
                        "Email": null,
                        "IsAdmin": false,
                        "_Id": null,
                        "Avatar": "/img/users/noImage.jpg"
                    })
                    Store.alertSeverity = "success"
                    Store.alertStatus = true
                    Store.alertMessage = r.message
                    window.location.reload();
                })
                .catch((e) => {
                    Store.alertSeverity = "error"
                    Store.alertStatus = true
                    Store.alertMessage = e.response.data.message
                })
        }

        setAnchorEl(null);
    }


    if (snap.userInfo._Id === null || snap.userInfo._Id === undefined) {
        return (
            <React.Fragment>
                <div>
                    <Tooltip title="Profile">
                        <IconButton sx={{p: 0}} onClick={() => {
                            Store.settingsVisibility = (!Store.settingsVisibility)
                        }
                        }>
                            <Avatar src={"http://127.0.0.1:8000/img/users/noImage.jpg"}/>
                        </IconButton>
                    </Tooltip>
                </div>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <div>
                <Tooltip title="Profile">
                    <IconButton sx={{p: 0}} onClick={handleClick}>
                        <Avatar src={"http://127.0.0.1:8000" + snap.userInfo.Avatar}/>
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