import { Box } from '@chakra-ui/react'
import React, { useCallback, useState } from 'react'
import Likes from '../AllRoutes/Likes'

const Try = () => {

 const[p,setp]=useState(true)

//  const y=()=>{
//  console.log("like")
//  }
  

  const y = useCallback(()=>{
    console.log(!p)
  },[])
console.log(p)
  return (

    <>
    
    <Box  w="30rem" h="30rem" bg="gray"  >

            <Likes   y={y} />

    </Box>
    
    </>
  )
}

export default Try