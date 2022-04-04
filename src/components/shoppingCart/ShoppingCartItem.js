import {ListItemIcon, ListItemText, MenuItem} from "@mui/material";
import * as React from "react";
import {useAtom} from "jotai";
import Atoms from "../Atoms/Atoms";
import DeleteIcon from '@mui/icons-material/Delete';

const ShoppingCartItem = () => {

    const [shoppingCart, updateShoppingCart] = useAtom(Atoms.shoppingCart);

    if (shoppingCart === null) {
        return null
    }

    if (shoppingCart.OrderItem.length===0){
        return (
        <ListItemText sx={{ m: 1 }} >No items</ListItemText>
        )
    }

    const deleteItem = (itemId) => {

        const index = Object.keys(shoppingCart.OrderItem).map(x => {
            return x._Id;
        }).indexOf(itemId);

        shoppingCart.OrderItem.splice(index, 1)

        updateShoppingCart({
            "TransactionId": shoppingCart.TransactionId,
            "UserId": shoppingCart.UserId,
            "Code": shoppingCart.Code,
            "FirstName": shoppingCart.FirstName,
            "LastName": shoppingCart.LastName,
            "Email": shoppingCart.Email,
            "Name": shoppingCart.Name,
            "Address": shoppingCart.Address,
            "City": shoppingCart.City,
            "Country": shoppingCart.Country,
            "Zip": shoppingCart.Zip,
            "Complete": shoppingCart.Complete,
            "OrderItem": shoppingCart.OrderItem,
        })

    }

    return (
        Object.keys(shoppingCart.OrderItem).map((arrayIndex, index) => (
            <React.Fragment key={index}>
                <MenuItem>
                    <ListItemIcon sx={{ m: 1 }}>
                        <img src={'https://127.0.0.1:8000/' + shoppingCart.OrderItem[arrayIndex].Image}  width="25" />
                    </ListItemIcon>
                    <ListItemText sx={{ mr: 1 }} >{shoppingCart.OrderItem[arrayIndex].Title}</ListItemText>
                    <ListItemText sx={{ mr: 1 }} >{shoppingCart.OrderItem[arrayIndex].Price}</ListItemText>
                    <DeleteIcon sx={{ m: 1 }} fontSize="small" onClick={()=> deleteItem(shoppingCart.OrderItem[arrayIndex]._Id)} />
                </MenuItem>
            </React.Fragment>
        ))
    )
}

export default ShoppingCartItem;