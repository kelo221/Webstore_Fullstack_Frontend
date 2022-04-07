import {Alert, Grow} from "@mui/material";
import * as React from "react";
import {useSnapshot} from "valtio";
import Store from "../Store/Store";


const AlertBox = () => {



    const snap = useSnapshot(Store)

    function close() {
        setTimeout(() => {Store.alertStatus = false}, 5000)
    }




    if (snap.alertStatus === false) {
        return null
    }else {
        close()
    }

    return (
        <React.Fragment>

            <Grow
                in={snap.alertStatus}
                style={{transformOrigin: '0 0 0'}}
                {...(snap.alertStatus ? {timeout: 1000} : {})}
            >
                <Alert variant="filled" severity={snap.alertSeverity} style={{
                    width: "100%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    position: "absolute",

                }}>
                    {snap.alertMessage}
                </Alert>
            </Grow>

        </React.Fragment>
    )
}
export default AlertBox;