import { Grid, Typography, Button, Paper } from '@material-ui/core';
import PageInfo from '../interfaces/PageInfo';
import blackLogo from '../static/images/TokenHub_white.svg';
import { useContext, useState } from 'react';
import { useGlobalState } from '../globalState/GlobalStateProvider'
import Constants from '../globalState/Constants'
import { useTheme } from '@material-ui/core/styles';

export default function Header() {
    const { globalState, setGlobalState } = useGlobalState();
    const theme = useTheme();

    function wrapHeaderItem(item: JSX.Element, key: number = 0) {
        return <Grid item xs={12} sm={4} md={3} lg={2} xl={1} key={key}>{item}</Grid>
    }

    function createHeaderItem(pageName: string, key: number) {
        return wrapHeaderItem(
            <Typography variant="h4" onClick={() => { setGlobalState({ page: pageName }) }} className="headerItem">
                {pageName}
            </Typography>
            , key);
    }

    function createHeaderItems() {
        let headerKey = 1;
        return Constants.pages.map(pageName => {
            const displayName = pageName.replace(/(?:^|\s)\S/g, function (a: string) { return a.toUpperCase(); });
            return createHeaderItem(pageName, headerKey++);
        })
    }

    return <Paper>
        <Grid container>
            {createHeaderItems()}
        </Grid>
    </Paper>
}