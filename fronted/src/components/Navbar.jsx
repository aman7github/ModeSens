import { Box, Flex, Image,Center, Input,Button,HStack,
    MenuButton ,MenuList,MenuItem,Menu,InputLeftElement,InputGroup


} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineHeart,AiOutlineShoppingCart,AiOutlineSearch} from "react-icons/ai"
import { useDisclosure } from '@chakra-ui/react'
import {GiHamburgerMenu} from "react-icons/gi"
import {Link as RouteLink} from "react-router-dom"







const Navbar = () => {

  return (
    <>
    
    <Flex w="100%" h="4rem"  bg="rgb(255,255,255)" justifyContent={'space-between'} position={'sticky'} zIndex={100} >

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
            <MenuItem>CART <AiOutlineShoppingCart   />  </MenuItem>
            <MenuItem>WISHLIST <AiOutlineHeart  />  </MenuItem>
            <MenuItem> SIGNUP/SINGIN  </MenuItem>
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

        <Flex w="22%" h="100%"  justifyContent={'space-around'} display={{base:"none",sm:"none",md:"none",lg:"flex"}} >
        <Center gap={5} fontSize="1.7rem" > 
           <Center>
            <AiOutlineHeart  />
          </Center>
          <Center>
            <AiOutlineShoppingCart   />
          </Center>
        </Center> 

        <Center w="17%" mt="0.4rem" h="75%" border="1px" borderRadius="50%"  >
        </Center>
        <Center  fontWeight="600" >
            signup/signin
        </Center>

        </Flex>
    </Flex>
    

    </>
  )
}

export default Navbar


