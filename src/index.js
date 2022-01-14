import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';


import App from './App/App';
import reportWebVitals from './reportWebVitals';
import store from './store/store';
import DefaultThemeProvider from "./theme/DefaultThemeProvider";


ReactDOM.render(
    <React.StrictMode>
        <Provider store={ store }>
            <DefaultThemeProvider>
                <CssBaseline/>
                <App/>
            </DefaultThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById( 'root' )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
