import { Grid } from '@material-ui/core';
import PageInfo from '../interfaces/PageInfo';
import { useGlobalState } from '../globalState/GlobalStateProvider'

function renderMain(pageId: string) {
    switch (pageId) {
        case "home": 
            window.history.pushState(null, '', '/');
            return <div>home</div>
        case "account":
            window.history.pushState(null, '', '/?page=account');   
            return <div>account</div>
        case "tokens":
            window.history.pushState(null, '', '/?page=tokens'); 
            return <div>tokens</div>
        case "token":
            window.history.pushState(null, '', '/?page=token'); 
            return <div>token</div>
    }
}

export default function Main(props: PageInfo) {
    const { globalState } = useGlobalState();
    const { page } = globalState;
    return <Grid container>
        {renderMain(page)}
    </Grid>
}