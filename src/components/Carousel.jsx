import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";

import bg from '../assets/bg.png';
import chess from '../assets/chess.jpg';

const ImageCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <Box maxWidth={600} mx="auto">
            <Slider {...settings} className="px-10">
                <img src={bg} alt="Screenshot 1" loading="lazy"/>
                <img src={chess} alt="Screenshot 1" loading="lazy"/>
                <img src={bg} alt="Screenshot 1" loading="lazy"/>
                <img src={chess} alt="Screenshot 1" loading="lazy"/>
            </Slider>
        </Box>
    );
};

export default ImageCarousel;
