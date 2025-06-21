import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";


const ImageCarousel = ( {images} ) => {
    console.log('carousel ',images.length);
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
                {images.map((image, index) => (
                    <img src={image} key={index} alt="screenshot ${index}" loading="lazy" className="w-[500px] h-[300px] object-contain rounded"/>
                ))}
            </Slider>
        </Box>
    );
};

export default ImageCarousel;
