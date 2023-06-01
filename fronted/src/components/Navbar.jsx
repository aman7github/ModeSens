import { Box, Flex, Image,Center, Input,Button,HStack,
    MenuButton ,MenuList,MenuItem,Menu,InputLeftElement,InputGroup,Avatar

} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineHeart,AiOutlineShoppingCart,AiOutlineSearch} from "react-icons/ai"
import { useDisclosure } from '@chakra-ui/react'
import {GiHamburgerMenu} from "react-icons/gi"
import {Link as RouteLink} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import Logout from './Logout'
import ButtonSignup from './ButtonSignup'
import Logout2 from './Logout2'


const Navbar = () => {

  const {token,data,wdata,totalCartItem,WishListData,name} = useSelector(store=>{
    return{
        token:store.userReducer.token,
        data:store.cartReducer.data,
        WishListData:store.wishListReducer.WishListData,
        totalCartItem:store.cartReducer.totalCartItem,
        name:store.userReducer.name,
      
    }
})

 console.log(WishListData.length,data.length)

  return (
    <>
    
    <Flex w="100%" h="4rem" bg="rgb(255,255,255)" justifyContent={'space-between'} position="sticky" top="0"  zIndex={100} >

 {/* <-----------------flex left part-------------------------> */}
      <Flex w={{base:"100%",sm:"100%",md:"100%",lg:"65%"}} h="100%"  justifyContent={{sm:"start",md:"start",lg:"space-between"}}   >
           
         <Center display={{base:"block",sm:"block",md:"block",lg:"none"}} mt={3} >
           <Menu  >
            <MenuButton as={Button} >
              <GiHamburgerMenu />
            </MenuButton>
            <MenuList  >
            <MenuItem>  <RouteLink to="/women" > WOMEN </RouteLink>  </MenuItem>
            <MenuItem>  <RouteLink to="/men" > MEN </RouteLink>      </MenuItem>
            <MenuItem>KIDS</MenuItem>
            <MenuItem>  <RouteLink to="/home" > HOME </RouteLink>  </MenuItem>
            <MenuItem>
              <RouteLink to="/cart">
               <Flex  fontSize="1.2rem" justifyContent="center" alignItems="center" >
                Cart <AiOutlineShoppingCart fontSize="1.4rem"   />
                <Center border="1px" borderRadius="50%" pos="absolute" fontSize="0.8rem" bg="rgb(192,0,0)" color="white" w="1.2rem" ml="4.2rem" mb="0.8rem" > u</Center>
               </Flex>
              </RouteLink>
            </MenuItem>

            <MenuItem>WISHLIST 
             <RouteLink to="/wishlist" >
               <Flex  fontSize="1.2rem" justifyContent="center" alignItems="center" >
                <AiOutlineHeart  fontSize="1.4rem"   />
                <Center border="1px" borderRadius="50%" pos="absolute" fontSize="0.8rem" bg="rgb(192,0,0)" color="white" w="1.2rem" ml="2rem" mb="0.8rem" > u</Center>
               </Flex>
             </RouteLink>
            </MenuItem>

           
              <MenuItem>
                {/* <RouteLink to="/signup" >  */}
                    { token==""?  <ButtonSignup />: <Logout2 />     }
                {/* </RouteLink> */}
               </MenuItem>
            
            </MenuList>
           </Menu>    
         </Center>

          <Center w={{base:"30%",sm:"30%",md:"30%",lg:"25%"}} h="100%"    >
             <Image src="https://cdn.modesens.com/static/img/20190228newlogo-black.svg" w="85%"  />
          </Center>

          <Center  display={{base:"none",lg:"flex"}} justifyContent={'space-between'} w="30%" outline={'none'} >
                <RouteLink to="/women" > WOMEN </RouteLink>
                <RouteLink to="/men" > MEN   </RouteLink>
                <RouteLink>KIDS  </RouteLink>
                <RouteLink to="/" >HOME</RouteLink>
          </Center>

          <Center w={{base:"50%",sm:"50%",md:"50%",lg:"32%"}}>
           <InputGroup>
            <InputLeftElement children={<AiOutlineSearch color="gray.300" />} />
            <Input
              type="text"
              width="400px"
              outline="none"
              placeholder="What are you looking for?"
              backgroundColor={"#ffffff"}
              _focus={{
                boxShadow: "none",
                border: "1px solid #f89f17",
                outline: "none",
              }}
            />
            </InputGroup>
          </Center>
    
          <Center  w="18%"   display={{base:"block",sm:"block",md:"block",lg:"none"}}  >
                
          </Center>
       
        </Flex>

{/* <-----------------flex right part-------------------------> */}

        <Flex w="26%" h="100%"  justifyContent={'space-around'} display={{base:"none",sm:"none",md:"none",lg:"flex"}} >
        <Center gap={5} fontSize="1.7rem" > 
           <Center>
           <RouteLink to="/wishlist" >  
             <Flex>
                <AiOutlineHeart  />
                <Center border="1px" borderRadius="50%" pos="absolute" fontSize="0.8rem" bg="rgb(192,0,0)" color="white" w="1.2rem" ml="1.2rem"  > {token!="" ? WishListData.length : 0}</Center>
             </Flex>
           </RouteLink>  
          </Center>
          <Center>
          <RouteLink to="/cart" >
            <Flex>
                <AiOutlineShoppingCart   />
                <Center border="1px" borderRadius="50%" pos="absolute" fontSize="0.8rem" bg="rgb(192,0,0)" color="white" w="1.2rem" ml="1.2rem" > {token!=""? data.length :0} </Center>
             </Flex>
          </RouteLink>
          </Center>
        </Center> 

        {/* <Center w="16%" mt="0.4rem" h="78%" border="1px" borderRadius="50%"  > */}
         <Avatar name={name? name :""} bg="gray" color="white" mt="0.3rem"  size={'md'} />
        {/* </Center> */}
       
         <Center  fontWeight="600" h="85%" ml="0.5rem"  mt="0.1rem" >
           {/* <RouteLink to="/signup" > */}
                 { token==""?  <ButtonSignup />: <Logout   />     }
            {/* </RouteLink> */}
         </Center>
        

        </Flex>
    </Flex>
    

    </>
  )
}

export default Navbar


