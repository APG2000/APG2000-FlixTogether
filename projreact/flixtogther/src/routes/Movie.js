import * as React from 'react';

import { useParams } from "react-router-dom";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Footer from "../components/Footer";
import { Container } from "@mui/material"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar ,faFire} from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import Config from '../Config';
import Swiper from '../components/Swiper';
import { useState,useEffect } from 'react';
import VideoPlayer from '../components/Videoplayer';
function Movie(){
    const [data,setData] = useState(null);
    const [similar,setSimilar] = useState(null);

    const { id,Movie } = useParams();
    console.log(id);

    
    const getData = async () => {
        try {
          const type="movie";
          const response = await fetch("https://api.themoviedb.org/3/"+type+"/"+id+"?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US");
          const res = await response.json();
            
          const formattedMovies = ()=> ({
            id: res.id,
            title: res.title,
            image: Config.ImageBAser_url + (!res.backdrop_path ?res.poster_path :res.backdrop_path),
            overview: res.overview,
            type: "Movie",
            vote_average: !res.vote_average ? 0 : res.vote_average,
            popularity: res.popularity,
          });
    
          setData(formattedMovies);
        } catch (error) {
          console.error("Erro ao buscar detalhes do filme", error);
        }
      };
      const getSimilar = async () => {
        try {
          const response = await fetch("https://api.themoviedb.org/3/movie/"+id+"/similar?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US");
          const res = await response.json();
            
     

          const formattedSimilar = res.results.map((movie) => ({
            id: movie.id,
            title: movie.title,
            image: Config.ImageBAser_url + (!movie.backdrop_path ? movie.poster_path : movie.backdrop_path),
            overview: res.overview,
            type: "Movie",
            vote_average: !movie.vote_average ? 0 : movie.vote_average,
            popularity: movie.popularity,
            related:movie.belongs_to_collection
          }));
    
          setSimilar(formattedSimilar);
          console.log(similar);
        } catch (error) {
          console.error("Erro ao buscar detalhes do filme", error);
        }
      };




    // styles
    const StyledCard = styled(Card)({
        display: 'flex',
        alignItems: 'center',
        backgroundColor:"#001A33",
        
      });
      
      const StyledCardMedia = styled(CardMedia)({
        backgroundColor:"black" , width:"250px",height:"375px",border : "4px solid",borderColor:"#222",borderRadius:"5px",
      });
      
      const StyledCardContent = styled(CardContent)({
         width:"90%",height:"375px",marginLeft:"5%"
      });

 
      
  useEffect(() => {
    getData();
    getSimilar();
 
  }, []);

  if (!data) {
    return null; // Se você não tiver um componente Loading, pode retornar null
  }


    return(
        <>
            <ResponsiveAppBar/>

                <Container  style={{background:"#001A33 "}} sx={{height:"500vh" ,width:"90%" }} >


                    <Box  style={{with:"100%",height:"375px",display:"flex" ,marginTop:"5%"}}>
                     
                      <StyledCardMedia
                                  component="img"
                                  image={data.image}
                      />
                      <StyledCardContent >
                        <Box style={{ alignItems:"center",marginLeft:"10%"}}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ'  style={{
                              width: '100%',

                              
                            }}/>
                        </Box>

                           

                      </StyledCardContent>  
 
 
                    </Box>
                    <Box sx={{height:"200px" ,marginTop:"3%"}}>
                      <Typography variant="h5" component="div" style={{marginRight:"110%", color:"white",fontWeight:"600",fontFamily:"__Raleway_bdd8fd,__Raleway_Fallback_bdd8fd",display:"inline-flex",width:"100%"}}>
                                {data.title}                   
                            </Typography>
                            <Typography variant="subtitle1" color="white"  style={{ textAlign: 'justify',
                            textJustify: 'inter-word',marginTop:"1%"}}>
                                {data.overview}
                            </Typography>
                            <Typography variant="body2" color="white" style={{marginRight:"95%" ,paddingTop:"2%" ,fontWeight:"600",fontFamily:"__Raleway_bdd8fd,__Raleway_Fallback_bdd8fd"} }>
                              
                            <Box style={{display:"flex" , alignItems:"center"}}> 
                                
                                <FontAwesomeIcon icon={faStar}  style={{ color: 'yellow' ,padding:"5%"}} />    
                                  {data.vote_average}

                                  <FontAwesomeIcon icon={faFire} style={{ color: 'orange', marginRight: '5px' ,marginLeft:"20px"}} />
                              <Typography >

                              Popularidade {data.popularity}


                              </Typography>
                            </Box>
                        
                                                    
                            </Typography>
                      </Box>


                    <Box sx={{height:"300px" , marginTop:"4%"}}>
                            
                                {
                            !similar ? 
                            (
                                <div className="movie-section">
                                    <Typography variant='body4' style={{fontFamily:"__Raleway_bdd8fd,__Raleway_Fallback_bdd8fd ",fontWeight:"600"}}>

                                    Related

                                    </Typography>        
                                        <div className="movie-section-loading">
                                        <i className="fa-solid fa-spinner-third"></i>
                                    </div>
                                </div>
                            ) :
                            (
                                <Swiper
                                title="Similar ✨"
                                items={similar} />
                            )
                        }



                    </Box>
                    <Box sx={{bgcolor:"green" , height:"300px", marginTop:"2%"}}>
                        <Typography  variant='body4' style={{fontFamily:"__Raleway_bdd8fd,__Raleway_Fallback_bdd8fd ",fontWeight:"600"}}>
                            Comentarios 

                        </Typography>

                    </Box>


                



                {/*


                    <Box sx={{ height:"600px" , marginTop:"2%" }}>



                        
                    

                        <Box sx={{bgcolor:"#001A33" , height:"300px" , marginTop:"%"}}>
                           <Typography variant="h5" component="div" style={{marginRight:"110%", color:"white",fontWeight:"600",fontFamily:"__Raleway_bdd8fd,__Raleway_Fallback_bdd8fd",display:"inline-flex",width:"100%"}}>
                                    {data.title}                   
                                </Typography>
                                <Typography variant="subtitle1" color="white"  style={{ textAlign: 'justify',
                                textJustify: 'inter-word',marginTop:"1%"}}>
                                    {data.overview}
                                </Typography>
                                <Typography variant="body2" color="white" style={{marginRight:"95%" ,paddingTop:"2%" ,fontWeight:"600",fontFamily:"__Raleway_bdd8fd,__Raleway_Fallback_bdd8fd"} }>
                                  
                                <Box style={{display:"flex" , alignItems:"center"}}> 
                                    
                                    <FontAwesomeIcon icon={faStar}  style={{ color: 'yellow' ,padding:"5%"}} />    
                                      {data.vote_average}

                                      <FontAwesomeIcon icon={faFire} style={{ color: 'orange', marginRight: '5px' ,marginLeft:"20px"}} />
                                   <Typography >

                                   Popularidade {data.popularity}


                                   </Typography>
                                </Box>
                            
                                                        
                                </Typography>
                            </Box>
                    </Box>

                    
                    
                     <Box sx={{height:"20%", marginTop:"7%"}}>
                        
                     
                        {
                    !similar ? 
                    (
                        <div className="movie-section">
                            <Typography variant='body4' style={{fontFamily:"__Raleway_bdd8fd,__Raleway_Fallback_bdd8fd ",fontWeight:"600"}}>

                            Related

                            </Typography>        
                                <div className="movie-section-loading">
                                <i className="fa-solid fa-spinner-third"></i>
                            </div>
                        </div>
                    ) :
                    (
                        <Swiper
                        title="Similar ✨"
                        items={similar} />
                    )
                }



                    </Box>


                    <Box sx={{bgcolor:"green" , height:"20%", marginTop:"2%"}}>
                        <Typography  variant='body4' style={{fontFamily:"__Raleway_bdd8fd,__Raleway_Fallback_bdd8fd ",fontWeight:"600"}}>
                            Comentarios 

                        </Typography>

                    </Box>


                    
                    
                    
                   
                 
                </Container>

                <Container>

                                    
    
              */}

                </Container>
             <Footer />

            

            </>


    );




}


export default Movie;