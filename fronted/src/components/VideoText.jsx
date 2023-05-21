import { Box, Flex ,Text,Center,Image} from '@chakra-ui/react'
import React from 'react'
import ReactPlayer from 'react-player'


const VideoText = ({t1,t2,t3,t4,t5,t6, src}) => {
  








  return (
    <>
    
             <Flex flexDirection={{base:"column",lg:"row"}} w="95%" m="auto" pt="1rem"  bg="rgb(248,247,246)"  >
              {/* <Box w={{base:"100%",lg:"40%"}}> */}
                <Flex w={{base:"100%",lg:"40%"}}  h="100%"  flexDirection={'column'} justifyContent={"center"} alignItems={{base:"center",lg:"start"}} >
                    <Flex flexDirection={"column"}   >
                      <Text  ml={{lg:"3rem"}}  fontSize={{base:"2.2rem",lg:"2.2rem"}} fontWeight="400"   >
                         {/* Check Modesens */}
                         {t1}
                      </Text>  
                      <Text  ml={{lg:"1rem"}}  fontSize={{base:"2.2rem",lg:"2.2rem"}}fontWeight="400"   >
                          {/* Before You Buy */}
                          {t2}
                      </Text>
                    </Flex>

                    <Flex  flexDirection={"column"} mt="2rem" fontWeight="450" >
                        <Text ml={{lg:"2.2rem"}} >
                           {/* Want to score the best price-on anything-in */}
                           {t3}
                        </Text>
                        <Text  ml={{lg:"2.2rem"}} >
                            {/* seconds? Just paste a product link from any */}
                            {t4}
                        </Text>
                        <Text ml={{lg:"3rem"}} >
                             {/* partner retailer into the search bar on our app */}
                             {t5}
                        </Text>
                        <Text ml={{lg:"-12.5rem"}} >
                            {/* or website. */}
                            {t6}
                        </Text>
                       
                    </Flex>
                </Flex>
             {/* </Box>  */}
                   
                   <Center w={{base:"100%",lg:"60%"}}  h="100%"  >
                      
                        <Image src={src} /> 
                      
                   </Center>


             </Flex>
    
    
    </>
  )
}

export default VideoText

// src="https://cdn.modesens.com/static/img/20221231bg1_en.png" 