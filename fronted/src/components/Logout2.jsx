import React from 'react'
import { Button,Box,Center,Flex } from '@chakra-ui/react'
import {useDispatch, useSelector} from "react-redux"
import {BsFillBagCheckFill} from "react-icons/bs"
import {Link as RouterLink} from "react-router-dom"

  import {doLogout} from "../redux/User/action"

const Logout2 = () => {

    const {token} = useSelector(store=>{
        return{
            token:store.userReducer.token
        }
    })
        const dispatch = useDispatch()
   
       const logout=()=>{
          dispatch(doLogout())
       }
    
     
    


  return (
    <Box mt="-0.5rem" >
         <RouterLink to="/order" >
        <Flex gap="0.7rem" >
         
            <Box fontSize={"1.3rem"} >
               order
            </Box>
            <Box>
               <BsFillBagCheckFill  fontSize={'1.5rem'}   border="1px" />
            </Box>
             
        
        </Flex>
        </RouterLink>

        <Center ml="-2rem" mt='0.1rem'  fontSize={'1.2rem'} onClick={logout}  >
             Logout
        </Center>
       
    
    
    </Box>
  )
}

export default Logout2