import { Grid, Typography } from '@material-ui/core';
import PageInfo from '../interfaces/PageInfo';
import { useGlobalState } from '../globalState/GlobalStateProvider'
import './Main.scss';
import BgMain from "../static/images/bgMain.JPG"
import Skills from "../static/images/skills.png"



export default function Home() {
    const { globalState, setGlobalState } = useGlobalState();
    const renderCategory = (label: string, image: any) => {
        console.log()
        return <Grid item xs={12} sm={12} md={6} className="category">
            <div className='categoryContent'>
                <div className='categoryContentImage' style={{
                    backgroundImage: `url(${image})`
                }} />
                <div className='categoryContentText'>
                    <Typography variant="h3" style={{
                    }}>{label}</Typography>
                </div>
            </div>
        </Grid>;
    }

    return <Grid container>
        {renderCategory("About Me", BgMain)}
        {renderCategory("Resume", Skills)}
    </Grid>
}