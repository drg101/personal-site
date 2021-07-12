import { Grid, Typography, Button, Paper } from '@material-ui/core';
import PageInfo from '../interfaces/PageInfo';
import blackLogo from '../static/images/TokenHub_white.svg';
import { useContext, useState } from 'react';
import { useGlobalState } from '../globalState/GlobalStateProvider'
import Constants from '../globalState/Constants'
import { makeStyles, useTheme } from '@material-ui/core/styles';

const headerFontSize = 36;
const useStyles = makeStyles({
    headerItem: {
        fontWeight: 700,
        fontSize: headerFontSize,
        cursor: 'pointer',
        padding: '0.25em',
        '&:hover': {
            background: "#0000001F",
            fontSize: headerFontSize + 1
        },
        transition: 'all 0.25s;'
    },

})

export default function Header() {
    const { globalState, setGlobalState } = useGlobalState();
    const theme = useTheme();
    const classes = useStyles();

    function wrapHeaderItem(item: JSX.Element, key: number = 0) {
        return <Grid item xs={12} sm={12} md={4} lg={3} xl={2} key={key}>{item}</Grid>
    }

    function createHeaderItem(pageName: string, key: number) {
        return wrapHeaderItem(
            <Typography variant="h4" onClick={() => { setGlobalState({ page: pageName }) }} className={classes.headerItem} >
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