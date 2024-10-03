import { Center, Flex, Grid, VStack,GridItem,Image } from '@chakra-ui/react'
import React from 'react'
import brand1 from '../images/brandImg/brand1.png'
import brand2 from '../images/brandImg/brand2.png'
import brand3 from '../images/brandImg/brand3.png'
import brand4 from '../images/brandImg/brand4.png'
import brand5 from '../images/brandImg/brand5.png'
import brand6 from '../images/brandImg/brand6.png'
import brand7 from '../images/brandImg/brand7.png'
import brand8 from '../images/brandImg/brand8.png'
import brand9 from '../images/brandImg/brand9.png'
import brand10 from '../images/brandImg/brand10.png'
import brand11 from '../images/brandImg/brand11.png'
import brand12 from '../images/brandImg/brand12.png'
import brand13 from '../images/brandImg/brand13.png'
import brand14 from '../images/brandImg/brand14.png'
import brand15 from '../images/brandImg/brand15.png'



const Brand = () => {
   
    // const arr=[
    //     "https://cdn.modesens.com/banner/20220708-SSENSE-logo.png","https://cdn.modesens.com/banner/20220708-NET-A-PORTER-logo.png",
    //     "https://cdn.modesens.com/banner/20220708-FARFETCH-logo.png","https://cdn.modesens.com/banner/20220708-NORDSTROM-logo.png",
    //     "https://cdn.modesens.com/banner/20220708-SAKS-FIFTH-AVENUE-logo.png","https://cdn.modesens.com/banner/20220708-MYTHERESA-logo.png",
    //     "https://cdn.modesens.com/banner/20220708-SHOPBOP-logo.png","https://cdn.modesens.com/banner/20220708-ITALIST-logo.png",
    //     "https://cdn.modesens.com/banner/20220708-CETTIRE-logo.png","https://cdn.modesens.com/banner/20220708-LUISAVIAROMA-logo.png",
    //     "https://cdn.modesens.com/banner/20211014-GUCCI-logo.png","https://cdn.modesens.com/banner/20211014-PRADA-logo.png",
    //     "https://cdn.modesens.com/banner/20211014-SAINT-LAURENT-logo.png","https://cdn.modesens.com/banner/20211014-BOTTEGA-VENETA-logo.png",
    //     "https://cdn.modesens.com/upload/Burberry-Logo_1676559805.png","https://cdn.modesens.com/banner/20211014-VERSACE-logo.png",
    //     "https://cdn.modesens.com/banner/20211014-BALENCIAGA-logo.png","https://cdn.modesens.com/banner/20211014-LOEWE-logo.png",
    //     "https://cdn.modesens.com/banner/20220708-BROWNSFASHION-logo.png","https://cdn.modesens.com/banner/20211014-FENDI-logo.png",
       
       
       
    // ]

 
    
    const arrImg =[
      brand1,brand2,brand3,brand4,brand5,brand6,brand7,brand8,brand9,brand10,brand11,brand12,brand13,brand14,brand15
    ]



  return (
    <>
    
          <Center w="95%" m="auto"  bg="rgb(255,255,255)" >
               
               <VStack gap={5} mt="3rem" >
                 <Center fontSize={{base:"1.9rem",lg:"2.2rem"}}  >
                      500+ PREMIUM PARTNERS
                 </Center>

                 <Center w="65%" color="gray"  >
                 We only partner with the most reputable stores and brands to offer you the largest selections and most trustworthy shopping experience online.
                 </Center>
                

               <Grid templateColumns='repeat(5, 1fr)' gap={4} mt="2rem"  >
                  {
                    arrImg.map((el,i)=>{
                       return <GridItem h="8rem" key={i}  >
                                  {/* <Image src={el} w="100%" h="100%" /> */}
                                  <Image src={el} />
                              </GridItem>
                    })
                  }
               </Grid>
               </VStack>

          </Center>
    
    
    
    </>
  )
}

export default Brand