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


const urlOptions = UrlParams();

function App() {
    return (
        <GlobalStateProvider value={{ page: urlOptions.page ?? Constants.defaultPage}}>
            <ThemeProvider theme={theme}>
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
