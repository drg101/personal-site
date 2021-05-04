import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid } from '@material-ui/core';
import Header from './header/Header';
import Main from './main/Main';

function App() {
    const pages = [ "home", "account" ];
    const defaultPage = pages[0];
    const [ currentPage, setCurrentPage ] = useState(pages[0]);


    return (
        <div className="App">
            <Grid container>
                <Grid item xs={12}>
                    <Header
                        pages={pages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        defaultPage={defaultPage}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Main
                        pages={pages}
                        currentPage={currentPage}
                        defaultPage={defaultPage}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
