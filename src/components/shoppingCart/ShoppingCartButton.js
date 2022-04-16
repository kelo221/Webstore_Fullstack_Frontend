import * as React from "react";
import {Menu, Tooltip} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "./ShoppingCartIcon";
import ShoppingCartItem from "./ShoppingCartItem";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import Typography from "@mui/material/Typography";
import {useSnapshot} from "valtio";
import Store from "../Store/Store";


const ShoppingCartButton = () => {


    const snap = useSnapshot(Store)

    const navigate = useNavigate()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const navigateToCheckOut = () => {
        navigate("/checkout")
    }

    return(

        <div>
            <Tooltip title="Show orders">
                <IconButton onClick={(e) => handleClick(e)}>
                    <ShoppingCartIcon/>
                </IconButton>
            </Tooltip>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                transformOrigin={{vertical: 'top', horizontal: 'center'}}
            >
                <ShoppingCartItem/>

                {Store.shoppingCart.OrderItem.length !== 0 && (
                    <Typography align='center'>
                        <Button sx={{ m: 1 }} variant="outlined" onClick={()=>navigateToCheckOut()}>Checkout</Button>
                    </Typography>
                )}
            </Menu>
        </div>

)
}

export default ShoppingCartButton;