import { Button,Box,Center } from '@chakra-ui/react'
import React from 'react'
import {Link as RouteLink} from "react-router-dom"

const ButtonSignup = () => {
  return (
    <>
    
        <Center h="3rem" ml="-1rem"   >
          <RouteLink to="/signup"  > 
             Signup/Signin
          </RouteLink> 
        </Center>
    
    </>
  )
}

export default ButtonSignup