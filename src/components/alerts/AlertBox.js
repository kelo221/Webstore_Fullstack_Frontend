import {Alert, Grow} from "@mui/material";
import * as React from "react";
import {useState} from "react";
import {useAtom} from "jotai";
import Atoms from "../Atoms/Atoms";


const AlertBox = () => {


    const [alertMessage, setAlertMessage]  = useAtom(Atoms.alertMessage);
    const [severity, setSeverity]  = useAtom(Atoms.alertSeverity);

    const [alertStatus, setAlertStatus] = useAtom(Atoms.alertStatus);


    function close() {
        setTimeout(() => {setAlertStatus(false)}, 5000)
    }


    if (alertStatus === false) {
        return null
    }else {
        close()
    }

    return (
        <React.Fragment>

            <Grow
                in={alertStatus}
                style={{transformOrigin: '0 0 0'}}
                {...(alertStatus ? {timeout: 1000} : {})}
            >
                <Alert variant="filled" severity={severity} style={{
                    width: "100%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    position: "absolute",

                }}>
                    {alertMessage}
                </Alert>
            </Grow>

        </React.Fragment>
    )
}
export default AlertBox;