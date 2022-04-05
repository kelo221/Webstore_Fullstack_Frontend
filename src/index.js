
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from "jotai";

import React from 'react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from "./App";


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <Router>
            <Provider>
                <App/>
            </Provider>
        </Router>
    </StrictMode>
);

