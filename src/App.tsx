import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid } from '@material-ui/core';
import Header from './header/Header';
import Main from './main/Main';
import UrlParams from './lib/UrlParams';
import {GlobalStateProvider} from './globalState/GlobalStateProvider';
import Constants from './globalState/Constants';


const pages = [ "home", "account", "tokens" ];
const hiddenPages = [ "token" ]
const urlOptions = UrlParams();

function App() {
    const defaultPage = pages[ 0 ];
    return (
        <GlobalStateProvider value={{page: urlOptions.page ?? Constants.defaultPage, contract: urlOptions.contract ?? "", address: urlOptions.address ?? ""}}>
            <div className="App">
                <Grid container>
                    <Grid item xs={12}>
                        <Header
                            pages={pages}
                            hiddenPages={hiddenPages}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Main
                            pages={pages}
                            hiddenPages={hiddenPages}
                        />
                    </Grid>
                </Grid>
            </div>
        </GlobalStateProvider>
    );
}

export default App;
