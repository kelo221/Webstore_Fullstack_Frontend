import {ListItemIcon, ListItemText, MenuItem} from "@mui/material";
import * as React from "react";
import {useAtom} from "jotai";
import Atoms from "../Atoms/Atoms";
import {Cloud} from "@material-ui/icons";

const ShoppingCartItem = () => {

    const [shoppingCart, updateShoppingCart] = useAtom(Atoms.shoppingCart);

    if (shoppingCart === null) {
        return null
    }

    return (
        Object.keys(shoppingCart.OrderItem).map((arrayIndex, index) => (
            <React.Fragment key={index}>
                <MenuItem>
                    <ListItemIcon>
                        <img src={'https://127.0.0.1:8000/' + shoppingCart.OrderItem[arrayIndex].Image}  width="25" />
                    </ListItemIcon>
                    <ListItemText>{shoppingCart.OrderItem[arrayIndex].Title}</ListItemText>
                    <b/>
                    <ListItemText>{shoppingCart.OrderItem[arrayIndex].Price}</ListItemText>
                </MenuItem>
            </React.Fragment>
        ))
    )
}

export default ShoppingCartItem;