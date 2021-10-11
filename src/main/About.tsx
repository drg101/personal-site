import { Grid, Typography, Paper, Divider, Button } from '@material-ui/core';
import PageInfo from '../interfaces/PageInfo';
import { useGlobalState } from '../globalState/GlobalStateProvider'
import './Main.scss';
import DanielImg from "../static/images/daniel.jpg"



export default function About() {
    const { globalState, setGlobalState } = useGlobalState();
    return <Grid container>
        <Grid item xs={12} style={{ marginBottom: "2vh" }}>
            <Typography variant='h4'>
                Hi! I'm Daniel.
            </Typography>
            <br />
            <Divider />
        </Grid>
        <Grid item xs={12}>
            <Paper style={{ padding: '2vw', width: '100%' }}>
                <Grid container>
                    <Grid item sm={4} xs={12}>
                        <img src={DanielImg} className="danielImage" />
                    </Grid>
                    <Grid item sm={8} xs={12} style={{ padding: '0vh 2vw 0vh 2vw' }}>
                        <Typography align='left'>
                            I'm a 3rd year Computer Science student at Colorado State University, and an aspiring Software Engineer.
                            <br />
                            As a software engineer, I am most interested in the following:
                        </Typography>
                        <div className="MuiTypography-alignLeft MuiTypography-root MuiTypography-body1">
                            <ul>
                                <li>
                                    Full-Stack Software Engineering
                                </li>
                                <li>
                                    Clever Frontend Engineering (Like this site!)
                                </li>
                                <li>
                                    Backend/Server Engineering which functions harmoniously with a frontend application
                                </li>
                                <li>
                                    3D Worlds and Simulations
                                </li>
                                <li>
                                    The integration of AI {'&'} ML into physical things
                                </li>
                                <li>
                                    Geospatial-temporal data visualization
                                </li>
                            </ul>
                        </div>
                        <Typography align='left'>
                            I'm currently on the hunt for Summer 2022 internships, so if you like my stuff,
                            <br />
                        </Typography>
                        <Grid container>
                            <Grid item xs={12}>
                                <Button variant="contained" color='primary' style={{
                                    margin: '15px'
                                }} onClick={() => {
                                    setGlobalState({ page: 'contact' })
                                }}>Contact Me!</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
        {/* <Grid item xs={12} style={{ margin: "2vh 0vh 2vh 0vh" }}>
            <Typography variant='h4'>
                My Story
            </Typography>
        </Grid> */}
    </Grid >
}