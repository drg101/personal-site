import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Grid, ThemeProvider } from '@material-ui/core';
import Header from './header/Header';
import Main from './main/Main';
import UrlParams from './lib/UrlParams';
import { GlobalStateProvider } from './globalState/GlobalStateProvider';
import Constants from './globalState/Constants';
import theme from './globalState/MuiTheme'

import firebase from 'firebase/app';
import 'firebase/analytics'
import 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'

import CssBaseline from '@material-ui/core/CssBaseline';

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyBvD7-f4eMOjpfGSdo3HNPy716zSPsqBdg",
        authDomain: "personal-site-fe4ac.firebaseapp.com",
        projectId: "personal-site-fe4ac",
        storageBucket: "personal-site-fe4ac.appspot.com",
        messagingSenderId: "903886659632",
        appId: "1:903886659632:web:c2a57ce44fc9eb39674df5",
        measurementId: "G-MMYEDGE4RM"
    })
}



const auth = firebase.auth();


const urlOptions = UrlParams();

function App() {
    const [user] = useAuthState(auth);
    return (
        <GlobalStateProvider value={{ 
            page: urlOptions.page ?? Constants.defaultPage,
            user
        }}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className="App">
                    <Grid container>
                        <Grid item xs={12}>
                            <Header/>
                        </Grid>

                        <Grid item xs={12}>
                            <Main/>
                        </Grid>

                        <Grid item xs={12}>
                            
                        </Grid>
                    </Grid>
                </div>
            </ThemeProvider>
        </GlobalStateProvider>
    );
}

export default App;
