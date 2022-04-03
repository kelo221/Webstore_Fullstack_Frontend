import axios from "axios";
import {Button, Grid, TextField} from "@material-ui/core";
import React, {useState} from "react";
import Box from "@mui/material/Box";
import AlertBox from "./alerts/AlertBox";
import requests from "./services/requests";
import {atom, useAtom} from "jotai";
import Atoms from "./Atoms/Atoms";

const RegisterPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirm, setPasswordConfirm] = useState('');

    const [alertMessage, setAlertMessage]  = useAtom(Atoms.alertMessage);
    const [severity, setSeverity]  = useAtom(Atoms.alertSeverity);
    const [alertStatus, setAlertStatus] = useAtom(Atoms.alertStatus);



    const submit = async (e) => {
        e.preventDefault()

        requests.Register(email,password,password_confirm).then(response => {
            console.log(response)
            setSeverity("success")
            setAlertStatus(true)
            setAlertMessage(response.message)
        }).catch((e) => {
            console.log(e.response.data.message)
            setSeverity("error")
            setAlertStatus(true)
            setAlertMessage(e.response.data.message)
        })

    }


    return (
        <React.Fragment>

            <AlertBox/>

            <Box bgcolor="secondary.main">


                <Grid container
                      spacing={0}
                      direction="column"
                      alignItems="center"
                      justifyContent="center">
                    <main className="form-signin">
                        <form onSubmit={submit}>

                            <Grid item xl={"auto"} md={"auto"} sm={"auto"} xs={"auto"}>
                                <TextField
                                    id="outlined-email-input"
                                    label="Email"
                                    name="email"
                                    fullWidth
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xl={"auto"} md={"auto"} sm={"auto"} xs={"auto"}>
                                <TextField
                                    id="outlined-password-input"
                                    label="Password"
                                    name="password"
                                    fullWidth
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Grid>

                            <Grid item xl={"auto"} md={"auto"} sm={"auto"} xs={"auto"}>

                                <TextField
                                    id="outlined-password-input"
                                    label="Password"
                                    name="password"
                                    fullWidth
                                    onChange={e => setPasswordConfirm(e.target.value)}
                                />

                            </Grid>

                            <Button size="small" type="submit" variant="text" onClick={(e) => submit(e)}>
                                Register</Button>
                        </form>
                    </main>
                </Grid>

            </Box>
        </React.Fragment>

    )
}

export default RegisterPage;