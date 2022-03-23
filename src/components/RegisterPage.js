import axios from "axios";
import {Button, Grid, TextField} from "@material-ui/core";
import React, {useState} from "react";
import Box from "@mui/material/Box";
import RedAlert from "./alerts/RedAlert";

const RegisterPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirm, setPasswordConfirm] = useState('');

    const [errorStatus, setErrorStatus] = React.useState(false);

    const submit = async (e) => {
        e.preventDefault();

        await axios.post('http://127.0.0.1:8000/api/user/register', {
            email,
            password,
            password_confirm
        }).catch((e) => {
            setErrorStatus(true)
        });

    }


    return (
        <React.Fragment>

            <RedAlert errorStatus={errorStatus} setErrorStatus={setErrorStatus}></RedAlert>

            <Box bgcolor="secondary.main" >


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