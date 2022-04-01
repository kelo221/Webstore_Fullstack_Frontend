import * as React from "react";
import {useAtom} from "jotai";
import Atoms from "./Atoms/Atoms";

const ShoppingCartIcon = () => {
    const [shoppingCart, updateShoppingCart] = useAtom(Atoms.shoppingCart);


    if (shoppingCart.OrderItem == null){
        console.log("null")
        return null
    }


    return (
        <>
            <div className="container">
                <p style={{
                    position: "absolute",
                    top: "15%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textShadow: "0 0 2px white",
                }}>{shoppingCart.OrderItem.length}</p>
                <img height="40" src={"https://localhost:8000/img/etc/shoppingCart.png"} alt={""}/>
            </div>

        </>
    )
}

export default ShoppingCartIcon;