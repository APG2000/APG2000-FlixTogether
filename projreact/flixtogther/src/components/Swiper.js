import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import config from "../Config";

let breakpoints = {
  0: {
      slidesPerView: 2,
      spaceBetween: 20
  },
  400: {
      slidesPerView: 3,
      spaceBetween: 20
  },
  680: {
      slidesPerView: 4,
      spaceBetween: 20
  },
  850: {
      slidesPerView: 5,
      spaceBetween: 20
  },
  1000: {
      slidesPerView: 6,
      spaceBetween: 20
  },
  1200: {
      slidesPerView: 7,
      spaceBetween: 20
  },
  1300: {
      slidesPerView: 8,
      spaceBetween: 20
  }
}

export default ({title, items} ) => {

  if(!items){
    return null;
}

  return (

    
   < div className="movie-section">
    <p className="movie-section-title">{title}</p>
   
    <Swiper

     
    
autoplay={{ delay: 5000 }}
 navigation={true} modules={[Navigation, Autoplay]}
 loop={true}
 className="movie-section-row"
 breakpoints={breakpoints}>

     {
         items.map((item) => (
             <SwiperSlide key={item.id}>
                 <Link
                 to={`/${item.type === "Movie" ? "Movie" : "tv"}/${item.id}`}
                 className="movie-card"
                 style={{
                     background: `url(${config.TMDB_IMAGE_URL+"/w200"+item.image}) no-repeat center / cover`
                 }}>
                     <div className="movie-card-content">
                         <i className="fa-solid fa-play"></i>
                         <p>{item.title}</p>
                     </div>
                 </Link>
             </SwiperSlide>
         ))
     }
     
 </Swiper>
   
   
    </div>
  


  );
};