import { Grid } from '@material-ui/core';
import PageInfo from '../interfaces/PageInfo';
import { useGlobalState } from '../globalState/GlobalStateProvider'
import { useContext } from 'react';

function renderMain(pageId: string) {
    switch (pageId) {
        case "home":
            return <div>home</div>
        case "account":
            return <div>account</div>
        case "tokens":
            return <div>tokens</div>
        case "token":
            return <div>token</div>
    }
}

export default function Main(props: PageInfo) {
    const { globalState, setGlobalState } = useGlobalState();
    const { page } = globalState;
    return <Grid container>
        {renderMain(page)}
    </Grid>
}