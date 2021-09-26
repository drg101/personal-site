import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import './main/Main.scss'
import { Grid, ThemeProvider, makeStyles, Container } from '@material-ui/core';
import Header from './header/Header';
import Main from './main/Main';
import UrlParams from './lib/UrlParams';
import { GlobalStateProvider } from './globalState/GlobalStateProvider';
import Constants from './globalState/Constants';
import theme from './globalState/MuiTheme'
import BgImage from './static/images/bgMain.JPG'
import { getImageSize, imageSizeType } from './lib/Util';
import useWindowSize from './hooks/useWindowSize';
import Vector2 from './interfaces/Vector2';

import firebase from 'firebase/app';
import 'firebase/analytics'
import 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'

import CssBaseline from '@material-ui/core/CssBaseline';

const urlOptions = UrlParams();

function App() {
    const size = useWindowSize();

    useEffect(() => {
        (async () => {
            const imageSize = await getImageSize(`${BgImage}`)
        })();
    }, []);

    return (
        <GlobalStateProvider value={{
            page: urlOptions.page ?? Constants.defaultPage,
            user: null
        }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="App">
                    <Container maxWidth="lg" className="siteContainer">
                        <Main />
                    </Container>
                </div>
            </ThemeProvider>
        </GlobalStateProvider>
    );
}

export default App;
