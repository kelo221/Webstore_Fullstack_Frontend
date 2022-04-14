import {ListItemIcon, ListItemText, MenuItem} from "@mui/material";
import * as React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import {useSnapshot} from "valtio";
import Store from "../Store/Store";

const ShoppingCartItem = () => {

//    const [shoppingCart, updateShoppingCart] = useAtom(Atoms.shoppingCart);
    const snap = useSnapshot(Store)


    if (snap.shoppingCart === null) {
        return null
    }

    if (snap.shoppingCart.OrderItem.length===0){
        return (
        <ListItemText sx={{ m: 1 }} >No items</ListItemText>
        )
    }

    const deleteItem = (itemId) => {

        const index = Object.keys(snap.shoppingCart.OrderItem).map(x => {
            return x._Id;
        }).indexOf(itemId);

        Store.shoppingCart.OrderItem.splice(index, 1)

    }

    return (
        Object.keys(snap.shoppingCart.OrderItem).map((arrayIndex, index) => (
            <React.Fragment key={index}>
                <MenuItem>
                    <ListItemIcon sx={{ m: 1 }}>
                        <img src={'http://127.0.0.1:8000/' + snap.shoppingCart.OrderItem[arrayIndex].Image}  width="25" />
                    </ListItemIcon>
                    <ListItemText sx={{ mr: 1 }} >{snap.shoppingCart.OrderItem[arrayIndex].Title}</ListItemText>
                    <ListItemText sx={{ mr: 1 }} >{snap.shoppingCart.OrderItem[arrayIndex].Price}</ListItemText>
                    <DeleteIcon sx={{ m: 1 }} fontSize="small" onClick={()=> deleteItem(snap.shoppingCart.OrderItem[arrayIndex]._Id)} />
                </MenuItem>
            </React.Fragment>
        ))
    )
}

export default ShoppingCartItem;