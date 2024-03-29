import { Grid, Typography, Switch, styled, FormControlLabel, Divider, useMediaQuery, Accordion, AccordionSummary, AccordionActions, AccordionDetails } from '@material-ui/core';
import PageInfo from '../interfaces/PageInfo';
import { useGlobalState } from '../globalState/GlobalStateProvider'
import Home from './Home';
import About from './About'
import Contact from './Contact';
import Resume from './Resume'
import Portfolio from './Portfolio';
import './Main.scss'
import { CSSProperties, useState, useEffect } from 'react';
import UrlParams from '../lib/UrlParams';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'


const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: window.darkMode ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: window.darkMode ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: window.darkMode ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));

interface strDict {
    [k: string]: {
        label: string,
        mobileLabel?: string,
        component: JSX.Element
    }
}

const pageMap: strDict = {
    home: {
        label: "Daniel Reynolds",
        mobileLabel: "Home",
        component: <Home />
    },
    about: {
        label: "About",
        component: <About />
    },
    contact: {
        label: "Contact",
        component: <Contact />
    },
    resume: {
        label: "Resume",
        component: <Resume />
    },
    portfolio: {
        label: "Portfolio",
        component: <Portfolio />
    }
}

function renderMain(pageId: string) {
    document.title = pageMap[pageId].label === "Daniel Reynolds" ? "Daniel Reynolds" : `${pageMap[pageId].label} - Daniel Reynolds`;
    return pageMap[pageId].component;
}

export default function Main() {
    const { globalState, setGlobalState } = useGlobalState();
    const { page } = globalState;
    const [darkModeSwitchValue, setDarkModeSwitchValue] = useState(window.darkMode ?? false as boolean)
    const matches = useMediaQuery('(max-width:960px)');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        window.onpopstate = () => {
            const newUrlOptions = UrlParams();
            if (newUrlOptions.page) {
                setGlobalState({ page: newUrlOptions.page })
            }
            else {
                setGlobalState({ page: 'home' })
            }
        };
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page])

    const createHeaderItem = (text: string, page: string, bold = false) => {
        const textStyle = bold ? { fontWeight: 'bold' } : {}
        return <div style={{ display: 'inline-block' }} className="headerItemLeft">
            <div className='headerItem' onClick={() => {
                mobileMenuOpen && setMobileMenuOpen(false)
                setGlobalState({ page })
            }}>
                <Typography variant='h5' style={textStyle as CSSProperties}>{text}</Typography>
            </div>
        </div>
    }

    const renderHeader = () => {
        if (!matches) {
            return <div className='header'>
                {createHeaderItem("Daniel Reynolds", "home", true)}
                {createHeaderItem("About", "about")}
                {createHeaderItem("Contact", "contact")}
                {createHeaderItem("Resume", "resume")}
                {createHeaderItem("Portfolio", "portfolio")}
                <div className="headerItemRight" style={{ display: 'inline-block' }} onClick={() => {
                    localStorage.setItem("darkMode", !darkModeSwitchValue ? "true" : "false")
                    window.location.reload();
                }}>
                    <div className='headerItem'>
                        <FormControlLabel
                            control={<MaterialUISwitch checked={darkModeSwitchValue} />}
                            label={darkModeSwitchValue ? 'Dark Mode' : 'Light Mode'}
                        />
                    </div>
                </div>
            </div>
        }
        else {
            return <div className='header'>
                <Accordion style={{
                    borderRadius: 0,
                    boxShadow: 'none',
                    backgroundColor: 'inherit'
                }} expanded={mobileMenuOpen} onClick={() => {
                    setMobileMenuOpen(!mobileMenuOpen)
                }}>
                    <AccordionSummary
                        style={{display: 'block'}}
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography variant="h4"><b>Daniel Reynolds</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{display: 'block'}}>
                        {createHeaderItem("Home", "home", true)}
                        {createHeaderItem("About", "about")}
                        {createHeaderItem("Contact", "contact")}
                        {createHeaderItem("Resume", "resume")}
                        {createHeaderItem("Portfolio", "portfolio")}
                        <div className="headerItemRight" style={{ display: 'inline-block' }} onClick={() => {
                            localStorage.setItem("darkMode", !darkModeSwitchValue ? "true" : "false")
                            window.location.reload();
                        }}>
                            <div className='headerItem'>
                                <FormControlLabel
                                    control={<MaterialUISwitch checked={darkModeSwitchValue} />}
                                    label={darkModeSwitchValue ? 'Dark Mode' : 'Light Mode'}
                                />
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        }
    }

    return <Grid container className="content" alignItems="center" alignContent="center" justify="center">
        <Grid item xs={12}>
            <Grid container>
                <Grid item xs={12}>
                    {renderHeader()}
                </Grid>
            </Grid>
            <div className="header"><Divider /></div>
        </Grid>
        <Grid item xs={12}>
            <div style={{
                minHeight: "87vh"
            }}>
                <div className="header" style={{ paddingTop: globalState.page !== 'home' ? '2vh' : '0', paddingBottom: globalState.page !== 'home' ? '2vh' : '0' }}>
                    {renderMain(page)}
                </div>
            </div>
        </Grid>
        <Grid item xs={12}>
            <div className="header"><Divider /></div>
            <Grid container className='header'>
                <Grid item>
                    <div className='footerItemContainer'>
                        <div className='footerItem'>
                            <Typography>
                                Copyright &copy; 2021 Daniel Reynolds
                            </Typography>
                        </div>
                    </div>
                    <div className='footerItemContainer'>
                        <div className='footerItem'>
                            <a href="https://github.com/drg101/personal-site" target="_blank" style={{
                                textDecoration: "none"
                            }}>
                                <Typography color="textPrimary">
                                    View Source
                                </Typography>
                            </a>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
}