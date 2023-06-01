import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box ,Text,Image,useBreakpointValue,IconButton} from '@chakra-ui/react';
import Slider from "react-slick"




const Carousel = ({arr,name,slide,scroll}) => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slide,
        slidesToScroll: scroll,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    



     

  return (
    <>
         <Box w="95%" m="auto" mt="2rem" >
          <Slider {...settings}>

             {

                  arr.map((el,i)=>{
                       return <Box key={i}  w="22%" h="22rem" >
                                   {
                                     name && <Text fontSize="1.5rem" fontWeight="700" color="white" pos="absolute" bottom="0.5rem"  ml="4rem" >{name[i]}</Text>
                              
                                    }
                                       <Image  src={el}  w="100%" h="100%"   />
                                        
                  
                              </Box>
                           })



             }
             
          </Slider>
          </Box>
    
    </>
  )
}

export default Carousel