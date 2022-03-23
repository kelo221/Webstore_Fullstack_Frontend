import React, {useState} from 'react';
import {
    Grid,
    TextField,
    Button
} from '@material-ui/core';
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import {Input} from "@mui/material";
import * as PropTypes from "prop-types";
import requests from "./services/requests";
import axios from "axios";
import {Redirect} from "react-router-dom";

function RaisedButton(props) {
    return null;
}

RaisedButton.propTypes = {label: PropTypes.string};
const LogInPopUs = ({areSettingVisible, setSettingsVis}) => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if (!areSettingVisible) {
        return null
    }


    const submit = async (e) => {
        e.preventDefault();

        await axios.post('http://127.0.0.1:8000/api/user/login', {
            email,
            password
        }, {withCredentials: true})

        setSettingsVis(false)
    }


    function navigateToRegister() {

    }

    return (
        <React.Fragment>


            <Box bgcolor="secondary.main" sx={{borderRadius: '16px'}} style={{
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

                            <Button size="small" type="submit" variant="text"  onClick={() => navigateToRegister()}>> Register</Button>
                        </form>
                    </main>
                </Grid>

                {/*

              <main className="form-signin">
                    <form onSubmit={submit}>
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"
                                   onChange={e => setEmail(e.target.value)}
                            />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                                   onChange={e => setPassword(e.target.value)}
                            />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    </form>
                </main>

                */}


            </Box>
        </React.Fragment>
    );
}
export default LogInPopUs