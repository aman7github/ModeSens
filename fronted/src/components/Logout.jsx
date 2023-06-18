import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Flex, Box,Popover,PopoverTrigger,PopoverContent,PopoverArrow,Button ,Portal,
  PopoverBody,PopoverCloseButton ,PopoverHeader,Center    } from "@chakra-ui/react"
  import {Name, doLogout} from "../redux/User/action"
  import {BsFillBagCheckFill} from "react-icons/bs"
  import {Link as RouterLink} from "react-router-dom"

const Logout = ({w,h,ml,mt}) => {

  const {token} = useSelector(store=>{
    return{
        token:store.userReducer.token
    }
})
    const dispatch = useDispatch()




   const logout=()=>{
      dispatch(doLogout())
      dispatch(Name(""))
   }

   console.log("t",token)

  return (
  <Flex w="6rem" h="3rem" ml="-0.9rem" zIndex={500} gap="0.9rem" >

        <Center     >
          <RouterLink to="/order" >
             <BsFillBagCheckFill  fontSize={'1.6rem'}  border="1px" />
          </RouterLink>
        </Center>



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

      
             
    
    
     </Flex>
  )
}

export default Logout