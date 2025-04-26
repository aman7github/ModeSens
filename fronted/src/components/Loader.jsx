import { Image, Text,Box, Flex } from '@chakra-ui/react'
import React from 'react'
import loader from '../video/loader.mp4'

const Loader = () => {
  return (
    <>
                     <Flex flexDirection={'column'}  w="100%" h="100%">
                        <Box mt="5rem"  fontSize={'3rem'} fontWeight={'medium'} >LOADING...</Box>
                        <Box mt="2rem"  fontWeight={600} fontSize={'1.5rem'} >Please wait data fetching might be take some time....Thankyou for your patience</Box>
                        {/* <Box mt="2rem">
                            <Image  w="12rem" h="12rem" pos={'absolute'} left={{base:"20%",sm:"35%",md:"42%"}} src="https://media.tenor.com/o8m3bKTsifUAAAAM/hold-on.gif"   /> 
                        </Box> */}
                        <Box mt="12rem" display={'flex'} justifyContent={'center'}  alignItems={'center'} position="relative">
                                  <Box as="video"  w="30rem"h="22rem"pos="absolute" 
                                       autoPlay loop muted playsInline
                                       src={loader}/>
                             </Box>  
                      </Flex>
    
    
    </>
  )
}

export default Loader