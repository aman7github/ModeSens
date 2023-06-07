import { Center, Text ,Image, Box,Flex} from '@chakra-ui/react'
import React from 'react'

const NoProduct = ({brand,category}) => {
  return (
    <>

    <Flex flexDirection={'column'} w="90%" h="30rem" m="auto" mt="0" >

        
        <Box w="70%" h="60%" m="auto" > 
          <Image w="100%" h="100%" src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif"  />
        </Box>
       
       
         <Center fontSize="1.5rem" fontWeight='500' w="70%" h="40%" gap={1}  m="auto" >
            { brand ? `This Brand  " ${brand} "  has no " ${category} "  ..Please Click Reset on Brand for back` : ` No " ${category} " category avilable..make sure search in small letters  ..Please Click Reset on Categroy for back`  } 
         </Center>

        
    </Flex>
    
    
    
    
    </>
  )
}

export default NoProduct