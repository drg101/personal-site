import { Grid, Typography } from '@material-ui/core';
import PageInfo from '../interfaces/PageInfo';
import { useGlobalState } from '../globalState/GlobalStateProvider'
import Home from './Home';
import './Main.scss'

function renderMain(pageId: string) {
    switch (pageId) {
        case "home":
            return <Home />
        case "page1":
            return <div>page1</div>
    }
}

export default function Main() {
    const { globalState, setGlobalState } = useGlobalState();
    const { page } = globalState;

    const createHeaderItem = (text: string, page: string) => {
        return <div style={{display: 'inline-block'}}>
            <div className='headerItem' onClick={() => {
                setGlobalState({ page })
            }}>
                <Typography variant='h5'>{text}</Typography>
            </div>
        </div>
    }

            return <Grid container className="content" alignItems="center" alignContent="center" justify="center">
                <Grid item xs={12}>
                    <Grid container className='header'>
                        <Grid item>
                            {createHeaderItem("Daniel Reynolds", "home")}
                            {createHeaderItem("About", "about")}
                            {createHeaderItem("Resume", "resume")}
                            {createHeaderItem("Portfolio", "portfolio")}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    {renderMain(page)}
                </Grid>
            </Grid>
}