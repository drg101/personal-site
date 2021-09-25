import { Grid, Typography } from '@material-ui/core';
import PageInfo from '../interfaces/PageInfo';
import { useGlobalState } from '../globalState/GlobalStateProvider'
import Home from './Home';
import About from './About'
import Contact from './Contact';
import Resume from './Resume'
import './Main.scss'
import { CSSProperties } from 'react';

function renderMain(pageId: string) {
    switch (pageId) {
        case "home":
            return <Home />
        case "about":
            return <About />
        case "contact":
            return <Contact />
        case "resume": 
            return <Resume /> 
    }
}

export default function Main() {
    const { globalState, setGlobalState } = useGlobalState();
    const { page } = globalState;

    const createHeaderItem = (text: string, page: string, bold = false) => {
        const textStyle = bold ? { fontWeight: 'bold' } : {}
        return <div style={{ display: 'inline-block' }}>
            <div className='headerItem' onClick={() => {
                setGlobalState({ page })
            }}>
                <Typography variant='h5' style={textStyle as CSSProperties}>{text}</Typography>
            </div>
        </div>
    }

    return <Grid container className="content" alignItems="center" alignContent="center" justify="center">
        <Grid item xs={12}>
            <Grid container className='header'>
                <Grid item>
                    {createHeaderItem("Daniel Reynolds", "home", true)}
                    {createHeaderItem("About", "about")}
                    {createHeaderItem("Contact", "contact")}
                    {createHeaderItem("Resume", "resume")}
                    {createHeaderItem("Portfolio", "portfolio")}
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <div style={{ margin: globalState.page !== 'home' ? '2vw' : '0' }}>
                {renderMain(page)}
            </div>
        </Grid>
    </Grid>
}