import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { dark } from '@material-ui/core/styles/createPalette';

declare global {
    interface Window { darkMode: boolean; }
}

window.darkMode = window.darkMode || false;

let darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if(localStorage.getItem("darkMode")){
    darkMode = localStorage.getItem("darkMode") === "true"
}
window.darkMode = darkMode;

let theme = createMuiTheme({
    typography: {
        fontFamily: 'Roboto, sans-serif'
    },
    palette: {
        type: darkMode ? "dark" : "light"
    }
});
theme = responsiveFontSizes(theme);

export default theme;