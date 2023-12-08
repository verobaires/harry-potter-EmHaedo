import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import harry from "../../assets/harry.jpg"


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};
const Carousel = () => {
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div><img src={harry} alt="Imagen 1" /></div>
        <div><img src="src/assets/ron.jpg" alt="Imagen 2" /></div>
        <div><img src="src/assets/hermione.jpg" alt="Imagen 3" /></div>
        <div><img src="src/assets/snape.jpg" alt="Imagen 4" /></div>
        <div><img src="src/assets/voldemort.jpg" alt="Imagen 5" /></div>
        <div><img src="src/assets/neville.jpg" alt="Imagen 6" /></div>
        <div><img src="src/assets/bellatrix.jpg" alt="Imagen 7" /></div>
        <div><img src="src/assets/hagrid.jpg" alt="Imagen 8" /></div>
        <div><img src="src/assets/luna.jpg" alt="Imagen 9" /></div>
        <div><img src="src/assets/draco.jpg" alt="Imagen 10" /></div>
        <div><img src="src/assets/mcgonagall.jpg" alt="Imagen 11" /></div>
      </Slider>
    </div>
  );
};

export default Carousel;