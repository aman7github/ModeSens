import { Box, Text,Center } from '@chakra-ui/react'
import React from 'react'

const Route = ({gender,category,color}) => {
  return (
    <>
          <Center w="95%" m="auto" h="3rem" bg={color} textAlign={'start'} color="gray" >
            
            <Text  position={'absolute'} left="4rem" >
               Modesens/{gender}/{category}
            </Text>
                 
            
                

          </Center>
    
    </>
  )
}

export default Route