import { Grid, Typography, ThemeProvider } from '@material-ui/core';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import PageInfo from '../interfaces/PageInfo';
import blackLogo from '../static/images/TokenHub_white.svg';
import { useContext } from 'react';
import { useGlobalState } from '../globalState/GlobalStateProvider'
import Constants from '../globalState/Constants'

let theme = createMuiTheme({
    typography: {
        fontFamily: 'Fredoka One, cursive'
    }
});
theme = responsiveFontSizes(theme);

export default function Header(props: PageInfo) {
    const { globalState, setGlobalState } = useGlobalState();

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
        return props.pages.filter(pageName => pageName !== Constants.defaultPage).map(pageName => {
            const displayName = pageName.replace(/(?:^|\s)\S/g, function (a: string) { return a.toUpperCase(); });
            return createHeaderItem(pageName, headerKey++);
        })
    }

    return <Grid container className="Header">
        <ThemeProvider theme={theme}>
            {wrapHeaderItem(<img
                src={blackLogo}
                alt="TokenHub"
                className="logo"
                onClick={() => { setGlobalState({ page: Constants.defaultPage }) }}
            />)
            }
            {createHeaderItems()}
        </ThemeProvider>
    </Grid>
}