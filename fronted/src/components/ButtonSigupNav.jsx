import React from 'react'
import {Center } from '@chakra-ui/react'
import {Link as RouteLink} from "react-router-dom"

const ButtonSigupNav = () => {
  return <>
           <Center h="3rem"  fontSize={'1.2rem'} mt='-0.1rem' fontWeight={400}   >
          <RouteLink to="/login"  > 
             Signup/Signin
          </RouteLink> 
        </Center>
  </>
}

export default ButtonSigupNav