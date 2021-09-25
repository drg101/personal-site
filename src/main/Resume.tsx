import { Grid, Typography, Paper, Divider, Button } from '@material-ui/core';
import PageInfo from '../interfaces/PageInfo';
import { useGlobalState } from '../globalState/GlobalStateProvider'
import './Main.scss';
import DanielImg from "../static/images/daniel.jpg"



export default function Resume() {
    const { globalState, setGlobalState } = useGlobalState();
    return <Grid container justify="flex-start">
        <Grid item xs={12}>
            <Typography variant='h4' align="center">
                My Resume.
            </Typography>
            <br />
            <Divider />
            <br />
        </Grid>
        <Grid item xs={12}>
            <Typography variant='h5' align='left'>Daniel Reynolds</Typography>
        </Grid>
        <Grid item>
            <Button variant="contained" color='primary' style={{
                margin: '15px',
                marginLeft: '0'
            }} onClick={() => {
                setGlobalState({ page: 'contact' })
            }}>Contact Me!</Button>
        </Grid>
        <Grid item xs={12}>
            <Typography align='left'>Hard-working, fast learning, and self-driven Computer Science student looking to implement relevant
                technologies and gain critical skills through Software Engineering internships. Knowledge and interest in Frontend {'& '}
                Full Stack Software Engineering, AI/ML, 3d Worlds and simulations, and the integration of well-designed software into physical things.</Typography>
        </Grid>
        <Grid item xs={12}>
            <br />
            <Divider />
            <br />
            <Typography variant="h6" align="left">Experience</Typography>
            <br />
            <Typography align="left">
                <b>Full-Stack Software Engineer</b> - <i>Project Sustain, Colorado State University</i>
                <br />
                Feburary 2020 → Present
                <br />
                <br />
                &emsp;&emsp;🗺️ Engineered {'&'} developed an innovative geospatial visualization system for the web.
                <br />
                <br />
                &emsp;&emsp;👨‍💻 Sourced, downloaded, curated, ingested, queried, processed, and rendered hundreds of diverse datasets.
                <br />
                <br />
                &emsp;&emsp;🎓 Learned & Applied relevant Full-Stack skills including JavaScript, ReactJS, TypeScript, gRPC, Express, Bash, Envoy, MongoDB, Java, GitHub, CI, Code Climate, ZenHub and more.
                <br />
                <br />
                &emsp;&emsp;⚡ Accelerated client performance by leveraging modern web features, pushing the boundaries for what is possible for a web app.
            </Typography>

            <br />
            <Divider />
            <br />

            <Typography align="left">
                <b>Web Developer {'&'} Video Creator</b> - <i>Digital Learning With Infospaces, Colorado State University</i>
                <br />
                Feburary 2020 → May 2020
                <br />
                <br />
                &emsp;&emsp;‍💻 Responsible for adding features to a how-to video site created for CSU Computer Science students.
                <br />
                <br />
                &emsp;&emsp;🎥 Learned and consolidated complex topics into 2-minute videos that contained essential content.
            </Typography>
        </Grid>

        <Grid item xs={12}>
            <br />
            <Divider />
            <br />
            <Typography variant="h6" align="left">Education</Typography>
            <br />
            <Typography align="left">
                <b>Colorado State University, Fort Collins</b> - <i>Bachelor of Science in Computer Science, Artificial Intelligence and Machine Learning Concentration with a Minor in Mathematics</i>
                <br />
                August 2019 → Present → December 2022
                <br />
                <br />
                &emsp;&emsp;🎓 GPA: 3.97
                <br />
                <br />
                &emsp;&emsp;✏️ Learned relevant skills and technologies for the modern job-scape through hands-on coursework and projects.
            </Typography>
        </Grid>

        <Grid item xs={12}>
            <br />
            <Divider />
            <br />
            <Typography variant="h6" align="left">Skills</Typography>
            <br />
            <Typography align="left">
                <b>Technical Skills</b>
                <br />
                JavaScript ● TypeScript ● ReactJS ● NodeJS ● Webpack ● Express ● Envoy ● SocketIO ● gRPC ● MongoDB ● Git/Github ● CI ● Python ● Numpy ● OpenCV ● PyTorch ● Python ●  Unity ● C# ● C++ ● C ● Java ● HTML/CSS
                <br />
                <br />
                <b>Soft Skills</b>
                <br />
                Team worker ● Critical Thinker ● Self Motivated ● Problem Solver ● Dependable ● Adaptable ● Hard Worker
            </Typography>
        </Grid>

        <Grid item xs={12}>
            <br />
            <Divider />
            <br />
            <Typography variant="h6" align="left">Projects</Typography>
            <br />
        </Grid>
        <Grid item>
            <Button variant="contained" color='primary' style={{
                margin: '15px',
                marginLeft: '0'
            }} onClick={() => {
                setGlobalState({ page: 'portfolio' })
            }}>View My Portfolio</Button>
        </Grid>
    </Grid>
}