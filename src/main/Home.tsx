import { Grid, Typography, Paper } from '@material-ui/core';
import PageInfo from '../interfaces/PageInfo';
import { useGlobalState } from '../globalState/GlobalStateProvider'
import './Main.scss';
import BgMain from "../static/images/bgMain.JPG"
import Skills from "../static/images/skills.png"
import PortfolioImg from "../static/images/aper1.PNG"
import DanielImg from "../static/images/danielv1.JPG"
import Sunset from "../static/images/sunset.jpg"



export default function Home() {
    const { globalState, setGlobalState } = useGlobalState();
    const renderCategory = (label: string, image: any, page: string) => {
        return <Grid item xs={12} sm={12} md={6} className="category">
            <Paper className='categoryContent' elevation={10} onClick={() => {
                setGlobalState({ page })
            }}>
                <img className='categoryContentImage' src={image} />
                <div className='categoryContentText'>
                    <Typography variant="h3" style={{
                    }}>{label}</Typography>
                </div>
            </Paper>
        </Grid>;
    }

    return <Grid container>
        {renderCategory("About Me", DanielImg, "about")}
        {renderCategory("Connect", Sunset, "contact")}
        {renderCategory("Resume", Skills, "resume")}
        {renderCategory("Portfolio", PortfolioImg, "portfolio")}
    </Grid>
}