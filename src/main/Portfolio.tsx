import { Grid, Typography, Paper, Divider, Button } from '@material-ui/core';
import PageInfo from '../interfaces/PageInfo';
import { useGlobalState } from '../globalState/GlobalStateProvider'
import './Main.scss';
import DanielImg from "../static/images/daniel.jpg"
import { useState } from 'react';
import SelfDrivingCar from '../static/images/bobv1.jpg'
import SelfDrivingCarPlan from '../static/images/bobPlan.jpg'
import AperPic from "../static/images/aper1.png"
import FastLoad from "../static/images/fastLoad.gif"
import Infospaces from "../static/images/infospaces.png"
import TrueNorthHQ from "../static/images/TrueNorthHQ.jpg"
import Aper2Pic from "../static/images/aper2.PNG"


interface Project {
    content: JSX.Element,
    timeStart: number,
    name: string,
    dates: string
}

export default function Portfolio() {
    const { globalState, setGlobalState } = useGlobalState();
    const [ordering, setOrdering] = useState('newToOld' as 'newToOld' | 'oldToNew')

    const renderProjects = (projectsList: Project[]) => {
        return projectsList.sort((a, b) => ordering !== 'newToOld' ? a.timeStart - b.timeStart : b.timeStart - a.timeStart).map((project) => {
            return <Grid container key={project.timeStart}>
                <Grid item xs={12}>
                    <br />
                    <Divider />
                    <br />
                    <a href={`#${project.name}`} style={{
                        textDecoration: 'none'
                    }}>
                        <Typography variant="h5" color="textPrimary">{project.name}</Typography>
                    </a>
                    <Typography variant="caption">{project.dates}</Typography>
                    {project.content}
                </Grid>
            </Grid >
        })
    }

    const trueNorth: Project = {
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
                                For this project, I
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
        timeStart: new Date('1/01/2019').valueOf(),
        name: "True North, Published Video game",
        dates: 'January 2019 → July 2019'
    }

    const infospaces: Project = {
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
                                In the spring of 2020, before I transitioned primarily to research, I worked on a video site specifically for CSU Computer Science Students. For this site, I
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
                                        During this project, I was able to learn PHP, SQL, ffmpeg, and other monolithic technologies that make up a huge part of systems today.
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
        timeStart: new Date('2/01/2020').valueOf(),
        name: "Video Creation & Web Developing",
        dates: 'Febuary 2020 → May 2020'
    }

    const urbanSustainability: Project = {
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
                                <Button variant="contained" color='primary' style={{
                                    margin: '15px',
                                    marginLeft: '0'
                                }} onClick={() => {
                                    setGlobalState({ page: 'contact' })
                                }}>Contact Me!</Button>
                            </Typography>
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
                    <Grid item xs={12}><br/></Grid>
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
        timeStart: new Date('2/02/2020').valueOf(),
        name: "Urban Sustainabilty Research & Software Engineering",
        dates: 'Febuary 2020 → Present'
    }

    const selfDrivingCar: Project = {
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
                                For our Introduction to Artificiall Intelligcence Class' term research project, my friend Joe and I decided to go above and beyond.
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
                        <iframe width="377px" height="771px" src="https://www.youtube.com/embed/_NIIsQdZSgM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen frameBorder="0"></iframe>
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
        timeStart: new Date('8/30/2021').valueOf(),
        name: "Self Driving Car",
        dates: 'August 2021 → Present'
    }

    return <Grid container justify="flex-start">
        <Grid item xs={12} style={{ marginBottom: "2vh" }}>
            <Typography variant='h4'>
                My (Proudest) Projects.
            </Typography>
        </Grid>
        {renderProjects([
            selfDrivingCar,
            urbanSustainability,
            infospaces,
            trueNorth
        ])}
    </Grid>
}