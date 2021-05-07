import { Grid } from '@material-ui/core';
import PageInfo from '../interfaces/PageInfo';
import { useStore } from '../globalState/Store'
import { useContext } from 'react';

function renderMain(pageId: string) {
    switch (pageId) {
        case "home":
            return <div>home</div>
        case "account":
            return <div>account</div>
    }
}

export default function Main(props: PageInfo) {
    const [ globalState, setGlobalState ] = useStore();
    const { page } = globalState;
    return <Grid container>
        {renderMain(page)}
    </Grid>
}