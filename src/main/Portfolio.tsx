import { Grid, Typography, Paper, Divider, Button } from '@material-ui/core';
import PageInfo from '../interfaces/PageInfo';
import { useGlobalState } from '../globalState/GlobalStateProvider'
import './Main.scss';
import DanielImg from "../static/images/daniel.jpg"
import { useEffect, useState } from 'react';
import SelfDrivingCar from '../static/images/bobv1.jpg'
import SelfDrivingCarPlan from '../static/images/bobPlan.jpg'
import AperPic from "../static/images/aper1.png"
import FastLoad from "../static/images/fastLoad.gif"
import Infospaces from "../static/images/infospaces.png"
import TrueNorthHQ from "../static/images/TrueNorthHQ.jpg"
import Aper2Pic from "../static/images/aper2.PNG"
import AlgosJupy from "../static/images/algosJupy.png"
import GithubHQ from "../static/images/githubHQ.png"
import { toURIString } from "../lib/Util"
import UrlParams from '../lib/UrlParams';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


interface Project {
    content: JSX.Element,
    time: [Date, Date | number],
    name: string,
    languages: string[],
    libraries: string[],
    category: string
}

export default function Portfolio() {
    const { globalState, setGlobalState } = useGlobalState();
    const [ordering, setOrdering] = useState('newToOld' as 'newToOld' | 'oldToNew')

    useEffect(() => {
        const goto = UrlParams().goTo
        setTimeout(() => {
            goto && document.getElementById(goto)?.scrollIntoView(true)
        }, 10)
    }, [])

    const renderProjects = (projectsList: Project[]) => {
        return projectsList.sort((a, b) => { 
            const aV: number = a.time[0].valueOf();
            let bV: number;
            if(typeof b.time[1] === 'object') {
                bV = b.time[1].valueOf();
            }
            else {
                bV = b.time[1]
            }
            if(aV === bV) {
                return b.time[0].valueOf() - a.time[0].valueOf()
            }
            return bV - aV; 
        }).map((project) => {
            return <Grid container key={JSON.stringify(project.time[0].valueOf())}>
                <Grid item xs={12}>
                    <br />
                    <Divider />
                    <br />
                    <Paper style={{ padding: '1vw' }}>
                        <a href={`#${toURIString(project.name)}`} style={{
                            textDecoration: 'none'
                        }}>
                            <Typography variant="h5" color="textPrimary" id={`${toURIString(project.name)}`}>
                                {project.name}
                            </Typography>
                        </a>
                        <Typography variant="caption">{months[project.time[0].getUTCMonth()]} {project.time[0].getUTCFullYear()} → {typeof project.time[1] === 'number' ? 'Present' : months[project.time[1].getUTCMonth()] + ' ' + project.time[1].getUTCFullYear()} </Typography>
                        <Typography>
                            📖 {project.languages.join(' ● ')}
                        </Typography>
                        <Typography>
                            🛠️ {project.libraries.join(' ● ')}
                        </Typography>
                        <br />
                        <Divider />
                        {project.content}
                    </Paper>
                </Grid>
            </Grid >
        })
    }

    const trueNorth: Project = {
        languages: ['C#'],
        libraries: ['Steamworks', 'Unity', 'Adobe Illustrator', 'Davinci Resolve', 'Audacity'],
        category: 'Personal',
        content: (
            <Grid container>
                <Grid container alignItems="center">
                    <Grid item xs={12} md={6}>
                        <img src={TrueNorthHQ} style={{
                            width: '50%'
                        }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="textPadded">
                            <Typography align="left">
                                In the first half of 2019 as I was finishing high school, I decided it was time to put my self-taught Unity skills to work. In high school, I played quite alot
                                of first person shooter (FPS) games, so I decided that would be the type of game I would make.
                                <br />
                                Looking at this project in hindsight, it definetly is a bit silly, but hey, I was in high school.
                                <br />
                                For this project, I:
                            </Typography>
                            <div className="MuiTypography-alignLeft MuiTypography-root MuiTypography-body1">
                                <ul>
                                    <li>
                                        Created an entire ~2h playthrough videogame.
                                    </li>
                                    <li>
                                        Designed and Implemented an entire logic system for the game, from destructable environmets to A.I. bots. (Theres alot to talk about here!).
                                    </li>
                                    <li>
                                        Poured 1000+ hours of development into the game.
                                    </li>
                                    <li>
                                        Created procedural generation systems to design worlds for me.
                                    </li>
                                </ul>
                            </div>
                            <Typography align="left">
                                I am honestly proud of what I created at such a young age and with so little experience. The game now has over 500+ downloads on itch.io and Steam, which I think is pretty cool.
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
                {/* <Grid container alignItems="center">
                    <Grid item xs={12} md={6}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Pe9kzq50K_8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="textPadded">
                            <Typography align="left">
                                Here is the trailer I created for the game.
                            </Typography>
                        </div>
                    </Grid>
                </Grid> */}
            </Grid>
        ),
        time: [new Date('1/01/2019'), new Date('7/15/2019')],
        name: "True North, Published Video game"
    }

    const cryptographyLib: Project = {
        languages: ['Python'],
        libraries: ['Jupyter Notebook', 'Git'],
        category: 'School',
        content: (
            <Grid container>
                <Grid container alignItems="center">
                    <Grid item xs={12} md={6}>
                        <img src={AlgosJupy} style={{
                            width: '100%'
                        }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="textPadded">
                            <Typography align="left">
                                For the spring semester of 2021, I decided to take the "Mathematics of Information Security," also known as cryptography. The proffessor for this
                                class was awesome, and let us build our own programming libraries to use for homework and tests.
                                <br />
                                <br />
                            </Typography>
                            <Typography align="left">
                                Logically, I started writing an absolutely massive amount of Python for this class, implementing every single algorithm, theorem, and formula we learned.
                                This code is now all available on GitHub, totaling to over 60+ files. This library features some cool stuff like:
                            </Typography>
                            <div className="MuiTypography-alignLeft MuiTypography-root MuiTypography-body1">
                                <ul>
                                    <li>
                                        RSA from scratch.
                                    </li>
                                    <li>
                                        Diffie-Hellman from scratch.
                                    </li>
                                    <li>
                                        Zero-Knowledge-Proofs from scratch.
                                    </li>
                                    <li>
                                        Optimized methods for the fast execution of cryptographic functions.
                                    </li>
                                    <li>
                                        Fast, giant prime creation.
                                    </li>
                                </ul>
                            </div>
                            <Grid container>
                                <Grid item>
                                    <Button variant="contained" color='primary' style={{
                                        margin: '15px',
                                        marginLeft: '0'
                                    }} onClick={() => {
                                        window.open('https://github.com/drg101/M360-algos', '_blank')
                                    }}>View it On GitHub</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        ),
        name: "Cryptography Python Library",
        time: [new Date('1/01/2021'), new Date('5/15/2021')],
    }

    const infospaces: Project = {
        languages: ['PHP', 'HTML', 'CSS', 'JavaScript', 'Bash', 'SQL'],
        libraries: ['ffmpeg', 'MySQL', 'jQuery', 'Git', 'Davinci Resolve', 'Audacity'],
        category: 'Work',
        content: (
            <Grid container>
                <Grid container alignItems="center">
                    <Grid item xs={12} md={6}>
                        <img src={Infospaces} style={{
                            width: '100%'
                        }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="textPadded">
                            <Typography align="left">
                                In the spring of 2020, before I transitioned primarily to research, I worked on a video site specifically for CSU Computer Science Students. For this site, I:
                            </Typography>
                            <div className="MuiTypography-alignLeft MuiTypography-root MuiTypography-body1">
                                <ul>
                                    <li>
                                        Added short but concise 2-minute videos for entry-level CS students. Topics for these videos included SSH'ing into the CS Department's Machines,
                                        getting started with the Unix/Linux Shell, and Git.
                                    </li>
                                    <li>
                                        Designed and implemented high-quality features for the website. These included: video deletion, video editing, a playlist system (Which is now a really big deal!), and a
                                        admin account.
                                    </li>
                                    <li>
                                        Learned PHP, SQL, ffmpeg, and other monolithic technologies that make up a huge part of systems today.
                                    </li>
                                </ul>
                            </div>
                            <Typography align="left">
                                I am super proud of what I accomplished in a short time on this project. Some of my videos now have over 1,000 views, just from CS students at CSU! I also was the creator of our playlist system,
                                which has functioned flawlessly since I created it.
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        ),
        name: "Video Creation & Web Developing",
        time: [new Date('2/01/2020'), new Date('5/15/2020')],
    }

    const urbanSustainability: Project = {
        languages: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Java', 'Python', 'Bash', 'GeoJSON'],
        libraries: ['Leaflet', 'ReactJS', 'NodeJS', 'd3', 'MaterialUI', 'gRPC', 'MongoDB', 'Webpack', 'Dexie', 'jQuery', 'Nivo'],
        category: 'Work',
        content: (
            <Grid container>
                <Grid container alignItems="center">
                    <Grid item xs={12} md={6}>
                        <img src={FastLoad} style={{
                            width: '100%'
                        }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="textPadded">
                            <Typography align="left">
                                For the past year and a half, my primary work as been on an urban sustainablity project, called Project Sustain here
                                at Colorado State Univeristies' Computer Science Department.
                                <br />
                                <br />
                                A great example of what I've been doing is illustrated by this animation, in which 50+ megabytes of county income information is rendered at blisteringly fast speeds onto a Leaflet map, all on a mediocre internet connection. Much
                                of this acceleration is due to novel hashing techniques which I implemented on the server and client.
                                <br />
                                <br />
                                If you want to hear more about what I've been doing in this project,
                            </Typography>
                            <Grid container>
                                <Grid item>
                                    <Button variant="contained" color='primary' style={{
                                        margin: '15px',
                                        marginLeft: '0'
                                    }} onClick={() => {
                                        setGlobalState({ page: 'contact' })
                                    }}>Contact Me!</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
                <Grid container alignItems="center">
                    <Grid item xs={12} md={6}>
                        <img src={Aper2Pic} style={{
                            width: '100%'
                        }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="textPadded">
                            <Typography align="left">
                                Here is another example of my work, in which flood {'&'} trail data that I curated is being rendered onto a Leaflet map through a visualization system which I designed.
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12}><br /></Grid>
                </Grid>
                <Grid container alignItems="center">
                    <Grid item xs={12} md={6}>
                        <iframe width="100%" height="300" src="https://www.youtube.com/embed/7B3mC9E3kK0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="textPadded">
                            <Typography align="left">
                                Here is a video which I made for the project outlining how to use our services to identify vulnerable places.
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        ),
        name: "Urban Sustainabilty Research & Software Engineering",
        time: [new Date('2/02/2020'), Infinity]
    }

    const selfDrivingCar: Project = {
        languages: ['JavaScript', 'TypeScript', 'Python'],
        libraries: ['Electrical Engineering', 'Socket.io', 'Python Sockets', 'OpenCV', 'Raspberry PI', 'ReactJS'],
        category: 'School',
        content: (
            <Grid container>
                <Grid container alignItems="center">
                    <Grid item xs={12} md={6}>
                        <img src={SelfDrivingCar} style={{
                            width: '100%'
                        }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="textPadded">
                            <Typography align="left">
                                For our Introduction to Artificial Intelligence Class' term research project, my friend Joe and I decided to go above and beyond.
                                This project started with one goal: turn some physical thing into a self driving car.
                            </Typography>
                            <br />
                            <Typography align="left">
                                Wi-fi controlled self driving car kits tend to be very expensive, so we decided to build something from (nearly) scratch. The car itself consists of:
                            </Typography>
                            <div className="MuiTypography-alignLeft MuiTypography-root MuiTypography-body1">
                                <ul>
                                    <li>
                                        A $20 RC car from Walmart that has been stripped down to its chassis and motors.
                                    </li>
                                    <li>
                                        Two 9v batteries, one for the steering and one for drive.
                                    </li>
                                    <li>
                                        A Raspberry Pi to receive communications from a control server, and relay the controls to the engines.
                                    </li>
                                    <li>
                                        A webcam for eyesight.
                                    </li>
                                    <li>
                                        A ton of wires, hotglue, duct-tape, and popsicle sticks to link everything together.
                                    </li>
                                </ul>
                            </div>
                            <Typography align="left">
                                Through building the internals of this car, I gained some basic electrical engineering knowledge, an understanding of motor controllers, and a serous appreciaction
                                for hardware engineers.
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
                <Grid container alignItems="center">
                    <Grid item xs={12} md={6}>
                        <img src={SelfDrivingCarPlan} style={{
                            width: '100%'
                        }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="textPadded">
                            <Typography align="left">
                                This project might be one of the widest "stacks" that is possible software and hardware wise. The engineering stack for this project includes, but is not limited to.
                            </Typography>
                            <br />
                            <div className="MuiTypography-alignLeft MuiTypography-root MuiTypography-body1">
                                <ol>
                                    <li>
                                        The RC car itself, which runs Python on its Raspberry Pi. The car sends video information to the intermediary server over UDP sockets, and recieves motor
                                        control information from the intermediary server over TCP sockets.
                                    </li>
                                    <li>
                                        An intermediary server, written in Python. This server communicates with the aformentioned RC car through UDP and TCP sockets, and communicated with a web
                                        client through socket.io.
                                    </li>
                                    <li>
                                        A database, which is linked to the itermediary server. This part is still in progress.
                                    </li>
                                    <li>
                                        A ReactJS Typescript web-client, which communicates with the intermediary server using socket.io. This client has the "control pad" which is our sole way of
                                        controlling the car itself.
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Grid container alignItems="center">
                    <Grid item xs={12} md={6}>
                        <iframe width="100%" height="600px" src="https://www.youtube.com/embed/_NIIsQdZSgM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen frameBorder="0"></iframe>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="textPadded">
                            <Typography align="left">
                                This video was taken right after we implemented the most basic configuration of this stack, in which the client was controlling the RC car through an intermediary server over LAN.
                            </Typography>
                            <br />
                            <Typography align="left">
                                This project is currently a work in progress, so check back to see how the progress in going!
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        ),
        name: "Self Driving Car",
        time: [new Date('8/30/2021'), Infinity]
    }

    const otherProject = {
        languages: ['JavaScript', 'Java', 'Python', 'Bash', 'TypeScript', 'HTML', 'CSS', 'Bash', 'C#', 'and More'],
        libraries: ['Unity', 'Git', 'NodeJS', 'ReactJS', 'and More'],
        category: 'Personal, School, Work',
        content: (
            <Grid container>
                <Grid container alignItems="center">
                    <Grid item xs={12} md={6}>
                        <img src={GithubHQ} style={{
                            width: '100%'
                        }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="textPadded">
                            <Typography align="left">
                                &emsp;&emsp;You can find the rest of my Projects on GitHub. I try to put all of my projects there, and all of my work projects are hosted there aswell.
                                <br />
                                <br />
                                &emsp;&emsp;You also can see what I've been up to in the last few days there. With over 2000 (and counting) contributions in 2021 alone, im probably up to something!
                            </Typography>
                            <Grid container>
                                <Grid item>
                                    <Button variant="contained" color='primary' style={{
                                        margin: '15px',
                                        marginLeft: '0'
                                    }} onClick={() => {
                                        window.open('https://github.com/drg101', '_blank')
                                    }}>Go To My GitHub</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        ),
        name: "Other, More Minor Projects",
        time: [new Date('3/01/2018'), -1] as [Date, number]
    }

    const watercolor: Project = {
        languages: ['Python', 'JavaScript', 'HTML', 'CSS'],
        libraries: ['OpenCV', 'Docker', 'Kubernetes'],
        category: 'School',
        content: (
            <Grid container alignItems="center">
                <Grid item xs={12} md={6}>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/LNAdZsFi_zI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className="textPadded">
                        <Typography align="left">
                            For the term project for my Operating Systems class, we were expected to build some sort of containerized application using Kubernetes and Docker.
                            I was fortunate enough to have a great couple of friends to do this project with, so this was definetly a fun one.
                            <br />
                            <br />
                            My team and I decided to build a batch AI image upscaling application, which would have a simple JavaScript frontend and a containerized Python backend.
                            <br />
                            <br />
                            Thanks to some epic teamwork, this project went insanely smoothly and we ended up with a very cool end-product. Check out the video!
                            <br />
                        </Typography>
                        <Grid container>
                            <Grid item>
                                <Button variant="contained" color='primary' style={{
                                    margin: '15px',
                                    marginLeft: '0'
                                }} onClick={() => {
                                    window.open('https://github.com/drg101/watercolor', '_blank')
                                }}>View it On GitHub</Button>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        ),
        name: "Batch AI Image Upscaler",
        time: [new Date('9/15/2020'), new Date('12/15/2020')]
    }

    return <Grid container justify="flex-start">
        <Grid item xs={12}>
            <Typography variant='h4'>
                My (Proudest) Projects.
            </Typography>
        </Grid>
        {renderProjects([
            selfDrivingCar,
            urbanSustainability,
            infospaces,
            trueNorth,
            cryptographyLib,
            otherProject,
            watercolor
        ])}
    </Grid>
}