import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box ,Text,Image} from '@chakra-ui/react';
import Slider from "react-slick"



const Carousel = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
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

      const arr = [ "https://rukminim1.flixcart.com/image/832/832/l59xq4w0/jacket/q/w/y/m-no-mens-rider-jacket-benkerz-original-imagfzkwbxcygyss.jpeg?q=70","https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/13258046/2021/3/19/20e5b79f-6335-4469-ab44-f145768c844a1616145596184-Sangria-Women-Tops-3751616145595467-1.jpg",
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19473744/2022/9/13/5b4fc687-b93b-4141-aeb6-1bd82db75e671663054576612-Antheaa-Women-Dresses-631663054576038-1.jpg","https://www.dutchhaven.com/wp-content/uploads/2020/09/amish-straw-hat-2.jpg",
      "https://images.hellomagazine.com/horizon/square/06459019ab5e-best-dad-sandals-t.jpg","https://manubhai.in/SocialMedia/post_artworks/TT-03-24Feb2023.jpg",
      "https://storage.sg.content-cdn.io/cdn-cgi/image/width=1000,height=1500,quality=75,format=auto/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/ProductImages/Source/ftwweonspo000078ss21beg-1.jpg","https://5.imimg.com/data5/DE/KR/MY-61376355/mens-cotton-formal-pant-1000x1000.jpg" ]
       
        const name=[
            "Jackets","Tops","Dress","Hats","Bags","Jewellery","Sandles","Pants"
        ]

  return (
    <>
         <Box w="95%" m="auto" mt="2rem" >
          <Slider {...settings}>

             {

                  arr.map((el,i)=>{
                       return <Box key={i}  w="22%" h="22rem" >
                                   <Text fontSize="1.5rem" fontWeight="700" color="white" pos="absolute" bottom="0.5rem"  ml="4rem" >{name[i]}</Text>
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