import { Image, Text,Box } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <>
                     <Box  >
                        <Text mt="5rem"  fontSize={'3rem'} >LOADING...</Text>
                        <Image  w="12rem" h="12rem" pos={'absolute'} top="5rem" left={{base:"20%",sm:"35%",md:"42%"}} src="https://www.perodua.com.my/assets/gif/loading4.gif"   /> 
                     </Box>
    
    
    </>
  )
}

export default Loader