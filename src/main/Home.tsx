import { Grid, Typography, Paper } from '@material-ui/core';
import PageInfo from '../interfaces/PageInfo';
import { useGlobalState } from '../globalState/GlobalStateProvider'
import './Main.scss';
import BgMain from "../static/images/bgMain.JPG"
import Skills from "../static/images/darkModeResume.png"
import SkillsLight from "../static/images/lightModeResume.png"
import PortfolioImg from "../static/images/aper1.png"
import DanielImg from "../static/images/danielv1.JPG"
import Sunset from "../static/images/sunset.jpg"
import Email from "../static/images/email.svg"
import PaperAirplane from "../static/images/paperAirplane.jpg"
import { useEffect } from 'react';



export default function Home() {
    const { globalState, setGlobalState } = useGlobalState();

    useEffect(() => {
        setTimeout(() => {
            sessionStorage.setItem("animPlayed", "true");
        }, 4500)
    }, [])

    const playAnimation = !sessionStorage.getItem("animPlayed") || true;

    const renderCategory = (label: string, image: any, page: string, cNum: number) => {
        return <Grid item xs={12} sm={6} md={6} className={`category ${playAnimation ? `c${cNum}` : ''}`}>
            <Paper className="categoryContent" elevation={10} onClick={() => {
                setGlobalState({ page })
            }}>
                <img className='categoryContentImage' src={image} />
                <div className='categoryContentText'>
                    <Typography variant="h4" style={{
                    }}>{label}</Typography>
                </div>
            </Paper>
        </Grid>;
    }

    return <Grid container>
        <Grid item xs={12}>
            <br />
            <div style={{
                display: 'inline-block',
                verticalAlign: 'top'
            }}>
                <Typography variant="h2" className={playAnimation ? `typewriter` : ''}>Daniel Reynolds</Typography>
            </div>
            <br />
            <div style={{
                display: 'inline-block',
                verticalAlign: 'top'
            }}>
                <Typography variant="h4" className={playAnimation ? `typewriter2` : ''}>Software Engineer {'&'} Student</Typography>
            </div>
        </Grid>
        {renderCategory("About Me", DanielImg, "about", 0)}
        {renderCategory("Contact", PaperAirplane, "contact", 1)}
        {renderCategory("Resume", window.darkMode ? Skills : SkillsLight, "resume", 2)}
        {renderCategory("Portfolio", PortfolioImg, "portfolio", 3)}
    </Grid>
}