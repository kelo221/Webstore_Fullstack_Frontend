import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";
import requests from "./services/requests";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import {useSnapshot} from "valtio";
import Store from "./Store/Store";
import Grid from "@mui/material/Grid";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";


const LogInPopUs = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const snap = useSnapshot(Store)

    const navigate = useNavigate()

    if (!snap.settingsVisibility) {
        return null
    }

    const submit = async (e) => {
        e.preventDefault()
        requests.Login(email, password).then(response => {

            console.log(response)
            Store.alertSeverity = "success"
            Store.alertStatus = true
            Store.alertMessage = (response.message)

            requests.getUserInfo()
                .then(userData => {
                    if (userData)
                        Store.userInfo = (userData)
                })
            Store.settingsVisibility = false
        }).catch((e) => {
            console.log(e.response.data.message)
            Store.alertSeverity = "error"
            Store.alertStatus = true
            Store.alertMessage = (e.response.data.message)
        })

    }


    function navigateToRegister(e) {
        e.preventDefault()
        Store.settingsVisibility = false
        navigate("/register")
    }


    return (
        <React.Fragment>


            <Box bgcolor="secondary.main" sx={{borderRadius: '16px'}} boxShadow={3} style={{
                position: "absolute",
                width: "25vh",
                textAlign: "center",
                justifyContent: "center",
                minWidth: '350px',
                minHeight: "200px",


                top: 200,
                left: 0,
                right: 0,
                marginLeft: "auto",
                marginRight: "auto",

                zIndex: 2,
            }}>

                <IconButton aria-label="delete" style={{left: "45%"}} onClick={() => Store.settingsVisibility = false}>
                    <CloseIcon/>
                </IconButton>

                <Grid container
                      spacing={0}
                      direction="column"
                      alignItems="center"
                      justifyContent="center">
                    <main className="form-signin">
                        <form onSubmit={submit}>

                            <Grid item xl={"auto"} md={"auto"} sm={"auto"} xs={"auto"}>
                                <TextField
                                    label="Email"
                                    name="email"
                                    size="small"
                                    fullWidth
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xl={"auto"} md={"auto"} sm={"auto"} xs={"auto"}>
                                <TextField
                                    label="Password"
                                    name="password"
                                    type="password"
                                    size="small"
                                    fullWidth
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Grid>

                            <Grid item xl={"auto"} md={"auto"} sm={"auto"} xs={"auto"}>
                                <Button style={{margin: "5px"}} variant="outlined" type="submit"> Sign in</Button>
                            </Grid>

                            <Grid item xl={"auto"} md={"auto"} sm={"auto"} xs={"auto"}>
                                <Button style={{margin: "5px"}} variant="outlined" type="submit" onClick={(e) => navigateToRegister(e)}> Register</Button>
                            </Grid>

                        </form>
                    </main>
                </Grid>


            </Box>
        </React.Fragment>
    );
}
export default LogInPopUs