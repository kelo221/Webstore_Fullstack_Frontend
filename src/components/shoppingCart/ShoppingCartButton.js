
import * as React from "react";
import {useAtom} from "jotai";
import Atoms from "../Atoms/Atoms";
import {Menu, MenuItem, Tooltip} from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "./ShoppingCartIcon";
import ShoppingCartItem from "./ShoppingCartItem";

const ShoppingCartButton = () => {

    const [shoppingCart, updateShoppingCart] = useAtom(Atoms.shoppingCart);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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

            </Menu>
        </div>

)
}

export default ShoppingCartButton;