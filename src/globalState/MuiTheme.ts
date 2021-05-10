import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
    typography: {
        fontFamily: 'Fredoka One, cursive'
    }
});
theme = responsiveFontSizes(theme);

export default theme;