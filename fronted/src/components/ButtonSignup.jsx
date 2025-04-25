import { Button,Box,Center } from '@chakra-ui/react'
import React from 'react'
import {Link as RouteLink} from "react-router-dom"

const ButtonSignup = () => {
  return (
    <>
  
        <Center h="3rem" ml={{base:"0.4rem",sm:"0.3rem"}}   >
          <RouteLink to="/login"  > 
             Signup/Signin
          </RouteLink> 
        </Center>
    
    </>
  )
}



export default ButtonSignup