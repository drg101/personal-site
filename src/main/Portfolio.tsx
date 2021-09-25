import { Grid, Typography, Paper, Divider, Button } from '@material-ui/core';
import PageInfo from '../interfaces/PageInfo';
import { useGlobalState } from '../globalState/GlobalStateProvider'
import './Main.scss';
import DanielImg from "../static/images/daniel.jpg"
import { useState } from 'react';
import SelfDrivingCar from '../static/images/bobv1.jpg'
import SelfDrivingCarPlan from '../static/images/bobPlan.jpg'
import AperPic from "../static/images/aper1.png"


interface Project {
    content: JSX.Element,
    timeStart: number,
    name: string
}

export default function Portfolio() {
    const { globalState, setGlobalState } = useGlobalState();
    const [ordering, setOrdering] = useState('newToOld' as 'newToOld' | 'oldToNew')

    const renderProjects = (projectsList: Project[]) => {
        return projectsList.sort((a, b) => ordering === 'newToOld' ? a.timeStart - b.timeStart : b.timeStart - a.timeStart).map((project) => {
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
                    <br />
                    {project.content}
                </Grid>
            </Grid >
        })
    }

    const urbanSustainability: Project = {
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
            </Grid>
        ),
        timeStart: new Date('2/02/2020').valueOf(),
        name: "Urban Sustainabilty Research & Software Engineering"
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
        name: "Self Driving Car"
    }

    return <Grid container justify="flex-start">
        <Grid item xs={12} style={{ marginBottom: "2vh" }}>
            <Typography variant='h4'>
                My Projects.
            </Typography>
        </Grid>
        {renderProjects([
            selfDrivingCar,
            urbanSustainability
        ])}
    </Grid>
}