import React, {useState} from "react";
import Box from "@mui/material/Box";
import requests from "../components/services/requests";
import Store from "../components/Store/Store";
import {useSnapshot} from "valtio";
import {TextField} from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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


            <Box bgcolor="secondary.main"
                 style={{
                textAlign: "center",
                justifyContent: "center",

            }}>


                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    justify="center"
                >
                    <main className="form-signin">
                        <form onSubmit={submit}>

                            <Grid item xl={"auto"} md={"auto"} sm={"auto"} xs={"auto"}
                                  sx={{ mt: 4}}>
                                <TextField
                                    label="Email"
                                    name="email"
                                    fullWidth
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xl={"auto"} md={"auto"} sm={"auto"} xs={"auto"}>
                                <TextField
                                    style= {{textAlign: 'center'} }
                                    label="Password"
                                    name="password"
                                    fullWidth
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Grid>

                            <Grid item xl={"auto"} md={"auto"} sm={"auto"} xs={"auto"}>

                                <TextField
                                    label="Password Confirm"
                                    name="password"
                                    fullWidth
                                    onChange={e => setPasswordConfirm(e.target.value)}
                                />


                                <Grid item xl={"auto"} md={"auto"} sm={"auto"} xs={"auto"}  sx={{ m: 2}}>

                                <Button type="submit" style={{margin:"4px"}}  variant="outlined"  onClick={(e) => submit(e)}>
                                    Register</Button>
                                </Grid>
                            </Grid>


                        </form>
                    </main>
                </Grid>




            </Box>
        </React.Fragment>

    )
}

export default RegisterPage;