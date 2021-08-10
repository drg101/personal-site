import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Grid, ThemeProvider, makeStyles } from '@material-ui/core';
import Header from './header/Header';
import Main from './main/Main';
import UrlParams from './lib/UrlParams';
import { GlobalStateProvider } from './globalState/GlobalStateProvider';
import Constants from './globalState/Constants';
import theme from './globalState/MuiTheme'
import BgImage from './static/images/bgMain.JPG'
import { getImageSize, imageSizeType } from './lib/Util';
import useWindowSize from './hooks/useWindowSize';

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
const defaultSize: imageSizeType = { height: 900, width: 1600 }

const urlOptions = UrlParams();

function App() {
    const [user] = useAuthState(auth);
    const [bgImageSize, setBgImageSize] = useState(defaultSize as imageSizeType);
    const size = useWindowSize();

    useEffect(() => {
        (async () => {
            const imageSize = await getImageSize(`${BgImage}`)
            setBgImageSize(imageSize)
        })();
    }, []);

    console.log(bgImageSize)
    const bgSizing: imageSizeType = {
        width: size.width ?? 1600,
        height: bgImageSize.height / bgImageSize.width * (size.width ?? 1600)
    }

    return (
        <GlobalStateProvider value={{
            page: urlOptions.page ?? Constants.defaultPage,
            user
        }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="App">
                    <div style={{
                        backgroundImage: `url(${BgImage})`,
                        height: '100vh',
                        width: '100vw',
                        backgroundSize: `${bgSizing.width}px ${bgSizing.height}px`,
                        backgroundRepeat: 'no-repeat'
                    }}></div>
                </div>
            </ThemeProvider>
        </GlobalStateProvider>
    );
}

export default App;
