import React, {useState} from 'react';
import {
    Grid,
    TextField,
    Button
} from '@material-ui/core';
import Box from "@mui/material/Box";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useAtom} from "jotai";
import Atoms from "./Atoms/Atoms";
import requests from "./services/requests";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';


const LogInPopUs = () => {


    const [areSettingVisible, setSettingsVis] = useAtom(Atoms.settingsVisibility);
    const [userInfo, setUserInfo] = useAtom(Atoms.userInfo);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [alertMessage, setAlertMessage]  = useAtom(Atoms.alertMessage);
    const [severity, setSeverity]  = useAtom(Atoms.alertSeverity);
    const [alertStatus, setAlertStatus] = useAtom(Atoms.alertStatus);

    const navigate = useNavigate()

    if (!areSettingVisible) {
        return null
    }

    const submit = async (e) => {
        e.preventDefault()
        requests.Login(email,password).then(response => {

            console.log(response)
            setSeverity("success")
            setAlertStatus(true)
            setAlertMessage(response.message)

            requests.getUserInfo()
                .then(userData => {
                    if (userData)
                        setUserInfo(userData)
                })
            setSettingsVis(false)
        }).catch((e) => {
            console.log(e.response.data.message)
            setSeverity("error")
            setAlertStatus(true)
            setAlertMessage(e.response.data.message)
        })

    }


    function navigateToRegister(e) {
        e.preventDefault()
        setSettingsVis(false)
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


                top:  200,
                left: 0,
                right: 0,
                marginLeft: "auto",
                marginRight: "auto",

                zIndex: 2,
            }}>

                <IconButton aria-label="delete" style={{ left: "45%"}} onClick={() => setSettingsVis(false)}>
                    <CloseIcon />
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

                            <Grid  item xl={"auto"} md={"auto"} sm={"auto"} xs={"auto"} >

                                <Button size="small" type="submit" variant="text"> Sign in</Button>
                            </Grid>

                            <Button size="small" type="submit" variant="text"  onClick={(e) => navigateToRegister(e)}> Register</Button>
                        </form>
                    </main>
                </Grid>


            </Box>
        </React.Fragment>
    );
}
export default LogInPopUs