import { Grid, Typography } from '@material-ui/core';
import PageInfo from '../interfaces/PageInfo';
import { useGlobalState } from '../globalState/GlobalStateProvider'
import './Main.scss';
import BgMain from "../static/images/bgMain.JPG"



export default function Home() {
    const { globalState, setGlobalState } = useGlobalState();
    const renderCategory = (label: string, image: any) => {
        console.log()
        return <Grid item sm={12} md={6} className="category">
            <div className='categoryContent' style={{
                backgroundImage: `url(${image})`,
                height: "100%",
                backgroundSize: "100%",
                display: 'flex',
                alignItems:'center',
                justifyContent: 'center'
            }}>
                <Typography variant="h3" style={{
                    color: 'white',
                    top: '50%',
                    transform: 'translateY(-50%)'
                }}>{label}</Typography>
            </div>
        </Grid>;
    }

    return <Grid container>
        {renderCategory("About Me", BgMain)}
    </Grid>
}