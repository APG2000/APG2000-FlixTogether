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
    console.log(id);
    const StyledCard = styled(Card)({
        display: 'flex',
        alignItems: 'center',
        backgroundColor:"#222"

      });
      
      const StyledCardMedia = styled(CardMedia)({
        width: '250px',
        height: '375px',
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


                    <Container >
                        <Box sx={{ bgcolor: '#222', height: '100vh' , marginTop:"1%" }} >
                        <StyledCard>
                <StyledCardMedia
                    component="img"
                    image={"https://image.tmdb.org/t/p/w500///xoTOnCc50QJBwRZKlIaM92Q8vbh.jpg"}
                />
                <StyledCardContent>
                    <Typography variant="h5" component="div" style={{marginRight:"90%", color:"white",fontWeight:"600",fontFamily:"__Raleway_bdd8fd,__Raleway_Fallback_bdd8fd"}}>
                        MovieName                   
                     </Typography>
                    <Typography variant="subtitle1" color="white"  style={{ textAlign: 'justify',
                    textJustify: 'inter-word',marginTop:"1%"}}>
As Scott Lang balances being both a superhero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past.                  </Typography>
                    <Typography variant="body2" color="white" style={{marginRight:"95%" ,paddingTop:"6%" ,fontWeight:"600",fontFamily:"__Raleway_bdd8fd,__Raleway_Fallback_bdd8fd"} }>
                        2012 
                </Typography>
                </StyledCardContent>
                </StyledCard>

                       

                        </Box>

                   

                </Container>

            </Container>
            <Footer />

            

            </>


    );




}


export default Movie;