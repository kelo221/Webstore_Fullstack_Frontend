import * as React from "react";
import {useSnapshot} from "valtio";
import Store from "../Store/Store";

const ShoppingCartIcon = () => {


    const snap = useSnapshot(Store)
    if (snap.shoppingCart === null){
        return null
    }




    return (
        <>
            <div className="container">
                <p style={{
                    position: "absolute",
                    top: "18%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                }}>{snap.shoppingCart.OrderItem.length}</p>
                <img height="40" src={"https://localhost:8000/img/etc/shoppingCart.png"} alt={""}/>
            </div>

        </>
    )
}

export default ShoppingCartIcon;