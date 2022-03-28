import {Alert, FormControlLabel, Grow, Switch} from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";


const AlertBox = ({alertStatus, setAlertStatus,alertMessage, severity}) => {


    function close() {
        setTimeout(() => {setAlertStatus(false)}, 5000)
    }

    const errortext = "test"


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