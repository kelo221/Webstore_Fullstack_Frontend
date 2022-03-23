import {Alert, FormControlLabel, Grow, Switch} from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";


const RedAlert = ({errorStatus, setErrorStatus}) => {


    function close() {
        setTimeout(() => {setErrorStatus(false)}, 5000)
    }

    const errortext = "test"


    if (errorStatus === false) {
        return null
    }else {
        close()
    }

    return (
        <React.Fragment>

            <Grow
                in={errorStatus}
                style={{transformOrigin: '0 0 0'}}
                {...(errorStatus ? {timeout: 1000} : {})}
            >
                <Alert variant="filled" severity="error" style={{
                    width: "100%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    position: "absolute",

                }}>
                    {errortext}
                </Alert>
            </Grow>

        </React.Fragment>
    )
}
export default RedAlert;