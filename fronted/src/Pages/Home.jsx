import React from 'react'
import Navbar from '../components/Navbar'
import { Center, Image,Box, Text, Flex } from '@chakra-ui/react'
import VideoText from '../components/VideoText'
import Brand from '../components/Brand'
import Carousel from '../components/Carousel'
import Category from '../components/Category'
import FavouriteCategory from '../components/FavouriteCategory'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Navbar />
  {/* <-------------------------first container------------------------------------> */}

    <Box w="95%" h="37rem" border="1px" m="auto" >
      <Box textAlign={'start'}> 
        <Text pos={'absolute'} mt="2rem" left={{base:"2rem",md:"3rem",lg:"5rem"}} color="white" fontSize={{base:"2.2rem",lg:"4.3rem"}} fontWeight="400"  zIndex={10} >
           CHECK MODESENS
        </Text>  
        <Text pos={'absolute'} mt={{base:"5rem",lg:"7rem"}} left={{base:"2rem",md:"3rem",lg:"5rem"}} color="white" fontSize={{base:"2.2rem",lg:"4.3rem"}}fontWeight="400"  zIndex={10} >
           BEFORE YOU BUY
        </Text>
        <Text pos={'absolute'} mt={{base:"10rem",lg:"14rem"}} left={{base:"2rem",md:"3rem",lg:"5rem"}} color="white" fontSize={{base:"1.5rem",lg:"2rem"}} fontWeight="350"  zIndex={10} >
           We're not a store
        </Text>
        <Text pos={'absolute'} mt={{base:"12rem",lg:"17rem"}} left={{base:"2rem",md:"3rem",lg:"5rem"}} color="white" fontSize={{base:"1.5rem",lg:"2rem"}} fontWeight="350"  zIndex={10} >
           We are your fashion shopping assitant.
        </Text>
      </Box> 
       <Image src="https://cdn.modesens.com/static/img/20221009_bg1.png" w="100%" h="100%"/>
    </Box>
    
    {/* <-------------------------second container------------------------------------> */} 

       <VideoText 
         t1="Check Modesens" t2="Before You Buy" t3="Want to score the best price-on anything-in "
         t4="seconds? Just paste a product link from any" t5="partner retailer into the search bar on our app "
         t6="or website." src="https://cdn.modesens.com/static/img/20221231bg1_en.png"
       />   

    {/* <-------------------------brand container------------------------------------> */} 

       <Brand />


       <Carousel />


       <VideoText 
         t1="Compare 500+ Stores " t2="In One Place " t3="ModeSens allows you to compare prices and "
         t4="availability across hundreds of stores and" t5="thousands of brands."
         src="https://cdn.modesens.com/static/img/20221231bg3_en.png"
       /> 


      <Category />

      <FavouriteCategory />

      <Footer />

    </>
  )
}

export default Home