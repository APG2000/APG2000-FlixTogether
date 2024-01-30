import * as React from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { Container, Typography } from "@mui/material";
import Footer from "../components/Footer";
import { useState,useEffect } from "react";
import Config from "../Config";
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
function Pesquisa(){


    const [data, setData] = useState();
    const searchTerm=useParams();
    const getData = async () => {
        try {
          console.log(searchTerm.name)
          const response = await fetch(Config.TMDB_search_url+searchTerm.name);
          const res = await response.json();
          const formatedres = res.results.map((movie) => ({
            id: movie.id,
            title: !movie.title ? movie.name : movie.title,
            image: Config.ImageBAser_url + (!movie.backdrop_path ? movie.poster_path : movie.backdrop_path),
            type: "Movie",
          }));
          console.log(formatedres)
          setData(formatedres);
        } catch (error) {
          console.error("Erro ao buscar filmes psopulares:", error);
        }
      };

      useEffect(() => {
        getData();
      }, []);
    
      if (!data) {
        return null; // Se você não tiver um componente Loading, pode retornar null
      }
    
    return(

        <>
            <ResponsiveAppBar/>
        <Container  style={{backgroundColor:"red" , height:"500vh" , marginTop:"2%"}}> 
        <Container style={{ backgroundColor: "red", height: "500vh", marginTop: "2%" }}>
               


        <div className="row" >
                    {data.map((movie) => (
                        <div key={movie.id} className="col-md-4 mb-4">
                            <MDBCard style={{ backgroundColor: "#222", height: "100%" }}>
                                <MDBCardImage src={movie.image} position='top' alt={movie.title}
                                    style={{maxHeight:"200px"}}
                                />
                                <MDBCardBody>
                                    <MDBCardTitle>{movie.title}</MDBCardTitle>
                                    <MDBBtn href='#'>Button</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    ))}
                </div>

                
            </Container>


        </Container>
        <Footer/>
        </>
        

    );

}


export default  Pesquisa;