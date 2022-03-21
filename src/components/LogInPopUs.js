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
const LogInPopUs = ({areSettingVisible,setSettingsVis}) => {


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



    return (
        <React.Fragment>


            <Box bgcolor="background.main" style={{
                position: "absolute",
                top: "25vh",
                width: "25%",
                textAlign: "center",
                left: "37%",
                minWidth: '350px',
                minHeight: "200px",
                zIndex: 2,
            }}>

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


            </Box>
        </React.Fragment>
);
}
export default LogInPopUs