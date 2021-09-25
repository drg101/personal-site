import { Grid, Typography, Paper, Divider, Button } from '@material-ui/core';
import PageInfo from '../interfaces/PageInfo';
import { useGlobalState } from '../globalState/GlobalStateProvider'
import './Main.scss';
import DanielImg from "../static/images/daniel.jpg"



export default function Portfolio() {
    const { globalState, setGlobalState } = useGlobalState();
    return <Grid container justify="flex-start">
        <Grid item xs={12} style={{ marginBottom: "2vh" }}>
            <Typography variant='h4'>
                My Projects.
            </Typography>
            <br />
            <Divider />
        </Grid>
    </Grid>
}