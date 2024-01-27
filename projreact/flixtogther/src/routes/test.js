import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useParams } from "react-router-dom";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Footer from "../components/Footer";
import { Container } from "@mui/material"

import ReactPlayer from 'react-player'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
function Movie(){

    const { id } = useParams();

    const StyledCard = styled(Card)({
        display: 'flex',
        alignItems: 'center',
      });
      
      const StyledCardMedia = styled(CardMedia)({
        width: 150,
        height: 'auto',
        marginRight: '20px',
      });
      
      const StyledCardContent = styled(CardContent)({
        flexGrow: 1,
        textAlign: 'center',
      });


    return(
        <>
            <ResponsiveAppBar/>

            <Container  maxWidth="sm>"  style={{background:"#222" }} >

                        <StyledCard>
                <StyledCardMedia
                    component="img"
                    image={"https://image.tmdb.org/t/p/w500///xoTOnCc50QJBwRZKlIaM92Q8vbh.jpg"}
                />
                <StyledCardContent>
                    <Typography variant="h5" component="div">
adasdasd                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
adsadasd                    </Typography>
                    <Typography variant="body2" color="text.secondary">
adasdasd                    </Typography>
                </StyledCardContent>
                </StyledCard>



               

            </Container>
            <Footer />

            

            </>


    );




}


export default Movie;