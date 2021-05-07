import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid } from '@material-ui/core';
import Header from './header/Header';
import Main from './main/Main';
import UrlParams from './lib/UrlParams';
import {GlobalStateProvider} from './globalState/GlobalStateProvider';


const pages = [ "home", "account", "tokens" ];
const hiddenPages = [ "token" ]
const urlOptions = UrlParams();
let defaultPageFromParams: string;
if (urlOptions.address) {
    defaultPageFromParams = "account"
}
else if (urlOptions.contract) {
    defaultPageFromParams = "token"
}

function App() {
    const defaultPage = pages[ 0 ];
    return (
        <GlobalStateProvider value={{page: "home", contract: "", address: ""}}>
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
