import React from 'react'
import { SimpleGrid,Center,Flex, Box,GridItem, Image, Text } from '@chakra-ui/react'
import {AiFillTwitterCircle,AiFillInstagram ,AiFillWechat}  from "react-icons/ai"
import {BsFacebook,BsYoutube } from "react-icons/bs"

const Footer = () => {

let arr=[{
    Title:'CUSTOMER CARE',
    t1:"Shopper Protection",
    t2:"Loyalty Program",
    t3:"Help Center",
    t4:"Size Guides",
    t5:"Contact Us / Feedback",
    t6:"Shipping / Returns",
},{
    Title:'INFORMATION',
    t1:"About Us",
    t2:"Influencer Program",
    t3:"Partner Stores",
    t4:"Sitemap",
    t5:"",
    t6:"",
},{
    Title:'LEGAL',
    t1:"Terms Of Use",
    t2:"Disclosure",
    t3:"Privacy Policy",
    t4:"Community Guidelines",
    t5:"",
    t6:"",
},{
    Title:'NTERNATIONAL',
    t1:"ModeSens",
    t2:"ModeSens-United Kingdom",
    t3:"ModeSens-chaina",
    t4:"",
    t5:"",
    t6:"",
},{
    Title:"CONNECT WITH US",
    t1:"Through different channels",
    t2:"Different Social media plateform"
   
}]

  return (
    <>
    <Box w="95%" m="auto"  borderTop="1px" borderBottom="1px" bg="rgb(255,255,255)" mt="3rem"  >
    <SimpleGrid minChildWidth="10rem"   w="95%" m="auto" gap={2}   >
          {
             arr.map((el,i)=>{
                return <Flex flexDirection="column" key={i}   gap={1} alignItems="start"  >
                            <Box mt="3rem" mb="0.3rem" fontSize="1.2rem" fontWeight="450" >{el.Title}</Box>
                            <Box color="gray" fontSize="1rem" textAlign={'start'}  >{el.t1}</Box>
                            <Box color="gray" fontSize="1rem" textAlign={'start'}  >{el.t2}</Box>
                            <Box color="gray" fontSize="1rem" textAlign={'start'}  >{el.t3}</Box>
                            <Box color="gray" fontSize="1rem" textAlign={'start'}  >{el.t4}</Box>
                            <Box color="gray" fontSize="1rem" textAlign={'start'}  >{el.t5}</Box>
                            <Box color="gray" fontSize="1rem" textAlign={'start'}  >{el.t6}</Box>
                       </Flex>
             })

          }
           


    </SimpleGrid>
    
    <Center color="gray" mt="5rem" mb="2rem" fontSize="1.1rem" >When you purchase through links on our site, we may earn a commission</Center>
    </Box>

     <Flex  bg="rgb(255,255,255)" h="7rem" flexDirection={{base:"column",md:"row"}} justifyContent="space-between" >
           <Flex w={{base:"100%",md:"70%",lg:"30%"}} justifyContent="center" >
              <Image src="https://cdn.modesens.com/static/img/20180905footer_logo.svg" mt="2rem" w={{base:"20%",md:"10%",lg:"20%"}} h="40%"  />
              <Center> © 2023, ModeSens Inc </Center>
           </Flex>


           <Flex w={{base:"100%",md:"70%",lg:"25%"}} h="100%" justifyContent="center" pb="2rem" alignItems="center" gap={5}  >
            
                 <AiFillTwitterCircle  fontSize="2.7rem" />
                 <AiFillInstagram fontSize="2.7rem"   />
                 <BsFacebook fontSize="2.3rem"  />
                 <BsYoutube fontSize="2.7rem"  />
                 <AiFillWechat fontSize="2.7rem"  />
        
                
           </Flex>
                
           </Flex>


           </>
   
  )
}

export default Footer