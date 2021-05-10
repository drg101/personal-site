import { Grid } from '@material-ui/core';
import PageInfo from '../interfaces/PageInfo';
import { useGlobalState } from '../globalState/GlobalStateProvider'
import Account from './pages/Account';

function renderMain(pageId: string) {
    switch (pageId) {
        case "home": 
            return <div>home</div>
        case "account":
            return <Account/>
        case "tokens":
            return <div>tokens</div>
        case "token":
            return <div>token</div>
    }
}

export default function Main(props: PageInfo) {
    const { globalState } = useGlobalState();
    const { page } = globalState;
    return <Grid container className="content" alignItems="center" alignContent="center" justify="center">
        <Grid item xs={12} md={8}>   
            {renderMain(page)}
        </Grid>
    </Grid>
}