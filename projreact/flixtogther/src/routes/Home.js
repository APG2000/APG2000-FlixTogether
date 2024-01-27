import React, { useEffect, useState } from "react";
// Remova a importação do 'react-router-dom' e 'react-helmet' se não estiver usando
import { Link } from "react-router-dom";

// Importe diretamente o CSS ou as classes relevantes necessárias
// import "../caminho-para-o-arquivo/seu-arquivo-css.css";

// Substitua 'Config' por 'config' conforme o padrão de nomenclatura usual em JavaScript
import config from "../Config";
// Importe os componentes necessários (se necessário)
// import Loading from "../views/Loading";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { Container } from "@mui/material";
// Import Swiper React components
import Swiper from "../components/Swiper";
import Footer from "../components/Footer"; 



function Home() {
  const [featured, setFeatured] = useState(null);

  const [popularMovies, setPopularMovies] = useState(null);
  const [popularTv, setPopularTv] = useState(null);

  async function getFeatured() {
    const req = await fetch(config.TMDB_api_url);
    const res = await req.json();

    const data = res.results[10];
    setFeatured({
      id: data.id,
      title: data.title,
      image: config.ImageBAser_url + data.backdrop_path,
      year: data.release_date,
      length: 10,
      stars: 10,
      description: data.overview,
      type: "movie",
    });
  }

  const getPopularMovies = async () => {
    try {
      const response = await fetch(config.TMDB_api_url);
      const data = await response.json();
        
      const formattedMovies = data.results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        image: config.ImageBAser_url + movie.backdrop_path,
        type: "Movie",
      }));

      setPopularMovies(formattedMovies);
    } catch (error) {
      console.error("Erro ao buscar filmes populares:", error);
    }
  };

  const getPopularTv = async () => {
    try {
      const response = await fetch(config.TMDBtv_api_url);
      const data = await response.json();

      const formattedTv = data.results.map((tv) => ({
        id: tv.id,
        title: tv.name,
        image: config.ImageBAser_url + (!tv.backdrop_path ? tv.poster_path : tv.backdrop_path),
        type: "tv",
      }));

      setPopularTv(formattedTv);
    } catch (error) {
      console.error("Erro ao buscar filmes populares:", error);
    }
  };

  useEffect(() => {
    getFeatured();
    getPopularMovies();
    getPopularTv();
  }, []);

  if (!featured) {
    return null; // Se você não tiver um componente Loading, pode retornar null
  }

  return (
    <>
    <ResponsiveAppBar />
    <Container maxWidth="sm>" style={{marginTop:"1%" , marginBottom : " 10%"}}>
 
    
     <div className="container">
                <Link
                to={featured.type === "movie" ? `/movie/${featured.id}` : `/tv/${featured.id}`}
                className="movie-hero"
                style={{
                    background: `url(${featured.image}) no-repeat center / cover`
                }}>
                    <div className="movie-hero-drop"></div>

                    <div className="movie-hero-content">
                        <p className="movie-hero-title">{featured.title}</p>
                        
                        <div className="movie-hero-meta">
                            <div className="movie-hero-stars">
                                <i className="fa-solid fa-star"></i>
                                <p>{featured.stars}/10</p>
                            </div>
                            
                            <p className="movie-hero-year">{featured.year}</p>

                            <p className="movie-hero-length">{featured.length}</p>
                        </div>
                        
                        <p className="movie-hero-desc">{featured.description}</p>

                        <button className="movie-hero-play">
                            <i className="fa-solid fa-play"></i>
                            <p>Play</p>
                        </button>
                    </div>
                </Link>

             

                {
                    !popularMovies ? 
                    (
                        <div className="movie-section">
                            <p className="movie-section-title">Popular Movies 🔥</p>
        
                            <div className="movie-section-loading">
                                <i className="fa-solid fa-spinner-third"></i>
                            </div>
                        </div>
                    ) :
                    (
                        <Swiper
                        title="Popular Movies 🔥"
                        items={popularMovies} />
                    )
                }


                {
                    !popularTv ? 
                    (
                        <div className="movie-section">
                            <p className="movie-section-title">Popular TV Shows ✨</p>
        
                            <div className="movie-section-loading">
                                <i className="fa-solid fa-spinner-third"></i>
                            </div>
                        </div>
                    ) :
                    (
                        <Swiper
                        title="Popular TV Shows ✨"
                        items={popularTv} />
                    )
                }

            </div>

    


   

    </Container>

    <Footer />
    </>
  );
}

export default Home;