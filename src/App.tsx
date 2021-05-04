import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid } from '@material-ui/core';
import Header from './header/Header';
import Main from './main/Main';

function App() {
    const pages = [ "account" ];
    const [ currentPage, setCurrentPage ] = useState(pages[0]);


    return (
        <div className="App">
            <Grid container>
                <Grid item xs={12}>
                    <Header
                        pages={pages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Main
                        pages={pages}
                        currentPage={currentPage}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
