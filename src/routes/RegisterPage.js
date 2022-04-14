import React, {useState} from "react";
import Box from "@mui/material/Box";
import requests from "../components/services/requests";
import Store from "../components/Store/Store";
import {useSnapshot} from "valtio";
import {TextField} from "@mui/material";
import Grid from "@mui/material/Grid";

const RegisterPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirm, setPasswordConfirm] = useState('');
    const snap = useSnapshot(Store)


    const submit = async (e) => {
        e.preventDefault()

        requests.Register(email,password,password_confirm).then(response => {
            console.log(response)
            Store.alertSeverity = "success"
            Store.alertStatus = true
            Store.alertMessage = response.message
        }).catch((e) => {
            console.log(e.response.data.message)
            Store.alertSeverity = "error"
            Store.alertStatus = true
            Store.alertMessage = e.response.data.message
        })

    }


    return (
        <React.Fragment>


            <Box bgcolor="secondary.main" style={{
                textAlign: "center",
                justifyContent: "center",
            }}>


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


                                <button type="submit"   onClick={(e) => submit(e)}>
                                    Register</button>




                        </form>
                    </main>
                </Grid>




            </Box>
        </React.Fragment>

    )
}

export default RegisterPage;