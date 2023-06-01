import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Flex, Box,Popover,PopoverTrigger,PopoverContent,PopoverArrow,Button ,Portal,
  PopoverBody,PopoverCloseButton ,PopoverHeader,Center    } from "@chakra-ui/react"
  import {doLogout} from "../redux/User/action"

const Logout = ({w,h,ml,mt}) => {

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
  <Box w="3rem" h="3rem" ml="-2rem" mt="1.5rem"  zIndex={500} >
      <Popover>
       <PopoverTrigger>
         <Center  cursor={'pointer'} >Logout</Center>
       </PopoverTrigger>
      <Portal>
        <PopoverContent mt="1.5rem" zIndex={500} w="17rem" >
            <PopoverArrow />
            <PopoverHeader  >click on button for logout</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <Flex justifyContent={'end'} >
                <Button colorScheme='red' onClick={logout}  >Logout</Button>
              </Flex>
           </PopoverBody>
       </PopoverContent>
  </Portal>
</Popover>
             
    
    
     </Box>
  )
}

export default Logout