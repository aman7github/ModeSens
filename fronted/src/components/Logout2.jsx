import React from 'react'
import { Button,Box,Center } from '@chakra-ui/react'
import {useDispatch, useSelector} from "react-redux"

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
    
       console.log("t",token)
    


  return (
    <>
        <Center   fontSize={'1.1rem'} onClick={logout}  >
             Logout
        </Center>
    
    
    </>
  )
}

export default Logout2