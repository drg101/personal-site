import { Grid } from '@material-ui/core';
import PageInfo from '../interfaces/PageInfo';

export default function Header(props: PageInfo){
    return <Grid container>
        {props.currentPage}
    </Grid>
}