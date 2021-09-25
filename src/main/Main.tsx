import { Grid } from '@material-ui/core';
import PageInfo from '../interfaces/PageInfo';
import { useGlobalState } from '../globalState/GlobalStateProvider'
import Home from './Home';

function renderMain(pageId: string) {
    switch (pageId) {
        case "home": 
            return <Home />
        case "page1":
            return <div>page1</div>
    }
}

export default function Main() {
    const { globalState } = useGlobalState();
    const { page } = globalState;
    return <Grid container className="content" alignItems="center" alignContent="center" justify="center">
        <Grid item xs={12}>   
            {renderMain(page)}
        </Grid>
    </Grid>
}