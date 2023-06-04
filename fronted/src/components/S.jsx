import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Image
 
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function S({card}) {

  const [slider, setSlider] = React.useState(null);


  return (
    <Box
      position={'relative'}
      height={'100%'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={'1rem'}
        top={'12rem'}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={'1rem'}
        top={"12rem"}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {card.map((el, index) => (
          <Image
            key={index}
            w="20rem"
            height="24rem"
            position="relative"
         
            backgroundRepeat="no-repeat"
          
            src={`${el}`}    />
        
           
       
        ))}
      </Slider>
    </Box>
  );
}