
import React from 'react'
import { Center, Text ,Image, Box,Flex} from '@chakra-ui/react'

const Error = () => {
  return (
    <>

         <Flex flexDirection={'column'} w="90%" h="30rem" m="auto" mt="0" >

        
<Box w="70%" h="60%" m="auto" > 
  <Image w="100%" h="100%" src="https://techcrunch.com/wp-content/uploads/2016/05/fefefe.gif?w=700&crop=1"  />
</Box>


 <Center fontSize="1.5rem" fontWeight='500' w="70%" h="40%" gap={1}  m="auto" >
      This Error Due To Slow Network ..Please Refresh .....
 </Center>


</Flex>

    
    
    
    
    </>
  )
}

export default Error