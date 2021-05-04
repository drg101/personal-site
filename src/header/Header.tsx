import { Grid } from '@material-ui/core';
import PageInfo from '../interfaces/PageInfo';
import blackLogo from '../static/images/TokenHub_white.svg';

export default function Header(props: PageInfo){
    function setPage(pageName: string){
        if(props.setCurrentPage){
            props.setCurrentPage(pageName)
        }
    }

    return <Grid container className="Header">
        <Grid item xs={1} sm={4} md={3} lg={2}>
            <img 
                src={blackLogo} 
                alt="TokenHub" 
                className="logo" 
                onClick={() => { setPage(props.defaultPage) }}
            />
        </Grid>
        <Grid item xs={1} sm={4} md={3} lg={2}>
            <div className="headerItem" onClick={() => { setPage("account") }}>
                Account
            </div>
        </Grid>
    </Grid>
}