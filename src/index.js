import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserContext from "./components/contexts/userContext";
import {BrowserRouter as Router} from 'react-router-dom'


ReactDOM.render(
    <React.StrictMode>
        <Router>
        <UserContext>
            <App/>
        </UserContext>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

