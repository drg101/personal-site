import { Grid, Typography, Paper, Divider, Button, TableContainer, Table, TableBody, TableRow, TableCell, Container, Box, TextField, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import PageInfo from '../interfaces/PageInfo';
import { useGlobalState } from '../globalState/GlobalStateProvider'
import './Main.scss';
import DanielImg from "../static/images/daniel.jpg"
import LinkedIn from "../static/images/linkedin.png"
import GitHub from "../static/images/github.png"
import Youtube from "../static/images/youtube.png"
import Insta from "../static/images/instagram.png"



export default function Contact() {
    const { globalState, setGlobalState } = useGlobalState();

    const makeSocialImage = (image: any, link: string) => {
        return <img className="socialImage" src={image} onClick={() => {
            window.open(link)
        }} />
    }

    return <Grid container>
        <Grid item xs={12}>
            <Typography variant='h4' align="center">
                How to contact me.
            </Typography>
            <br />
            <Divider />
            <br />
            <Container maxWidth="sm">
                <TableContainer component={Paper}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    By Email
                                </TableCell>
                                <TableCell>
                                    <a href="mailto: danielreynolds101@gmail.com" style={{
                                        textDecoration: "none"
                                    }} target="_blank"><Typography color="primary">danielreynolds101@gmail.com</Typography></a>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    LinkedIn
                                </TableCell>
                                <TableCell>
                                    <a href="https://linkedin.com/in/daniel-reynolds-software-engineer" style={{
                                        textDecoration: "none"
                                    }} target="_blank"><Typography color="primary">linkedin.com/in/daniel-reynolds-software-engineer</Typography></a>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
            <br />
        </Grid>
        <Grid item xs={12}>
            <Divider />
            <br />
            <Typography variant="h4">My Various Socials.</Typography>
            <br />
            {makeSocialImage(LinkedIn, 'https://www.linkedin.com/in/daniel-reynolds-software-engineer')}
            {makeSocialImage(GitHub, 'https://github.com/drg101')}
            {makeSocialImage(Youtube, 'https://www.youtube.com/channel/UCN4FI-F77dgfh-CI5zt9s4w')}
            {makeSocialImage(Insta, 'https://www.instagram.com/danielreynolds101/?hl=en')}
        </Grid>
    </Grid>
}