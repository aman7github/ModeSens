import { Button,Box,Center } from '@chakra-ui/react'
import React from 'react'
import {Link as RouteLink} from "react-router-dom"

const ButtonSignup = () => {
  return (
    <>
  
        <Center h="3rem"  fontSize={'1.3rem'} mt='-0.9rem'   >
          <RouteLink to="/login"  > 
             Signup/Signin
          </RouteLink> 
        </Center>
    
    </>
  )
}



export default ButtonSignup