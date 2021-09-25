import { Grid, Typography, Paper } from '@material-ui/core';
import PageInfo from '../interfaces/PageInfo';
import { useGlobalState } from '../globalState/GlobalStateProvider'
import './Main.scss';
import BgMain from "../static/images/bgMain.JPG"
import Skills from "../static/images/skills.png"
import PortfolioImg from "../static/images/portfolio2.png"
import DanielImg from "../static/images/danielv1.JPG"
import Sunset from "../static/images/sunset.jpg"



export default function Home() {
    const { globalState, setGlobalState } = useGlobalState();
    const renderCategory = (label: string, image: any) => {
        return <Grid item xs={12} sm={12} md={6} className="category">
            <Paper className='categoryContent' elevation={10}>
                <div className='categoryContentImage' style={{
                    backgroundImage: `url(${image})`
                }} />
                <div className='categoryContentText'>
                    <Typography variant="h3" style={{
                    }}>{label}</Typography>
                </div>
            </Paper>
        </Grid>;
    }

    return <Grid container>
        {renderCategory("About Me", DanielImg)}
        {renderCategory("Contact", Sunset)}
        {renderCategory("Resume", Skills)}
        {renderCategory("Portfolio", PortfolioImg)}
    </Grid>
}