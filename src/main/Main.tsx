import { Grid } from '@material-ui/core';
import PageInfo from '../interfaces/PageInfo';
import { useGlobalState } from '../globalState/GlobalStateProvider'

function renderMain(pageId: string) {
    switch (pageId) {
        case "home": 
            return <div>home</div>
        case "page1":
            return <div>page1</div>
    }
}

export default function Main() {
    const { globalState } = useGlobalState();
    const { page } = globalState;
    return <Grid container className="content" alignItems="center" alignContent="center" justify="center">
        <Grid item xs={12} md={8}>   
            {renderMain(page)}
        </Grid>
    </Grid>
}