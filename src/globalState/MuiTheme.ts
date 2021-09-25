import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { dark } from '@material-ui/core/styles/createPalette';

let theme = createMuiTheme({
    typography: {
        fontFamily: 'Roboto, sans-serif'
    },
    palette: {
        type: "dark"
    }
});
theme = responsiveFontSizes(theme);

export default theme;