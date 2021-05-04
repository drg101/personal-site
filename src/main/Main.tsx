import { Grid } from '@material-ui/core';
import PageInfo from '../interfaces/PageInfo';

function renderMain(pageState: PageInfo){
    switch(pageState.currentPage){
        case pageState.defaultPage:
            return <div>home</div>
        case "account":
            return <div>account</div>
    }
}

export default function Main(props: PageInfo){


    return <Grid container>
        {renderMain(props)}
    </Grid>
}