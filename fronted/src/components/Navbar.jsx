import { Box, Flex, Image,Center, Input,Button,HStack,
    MenuButton ,MenuList,MenuItem,Menu,InputLeftElement,InputGroup,Avatar

} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineHeart,AiOutlineShoppingCart,AiOutlineSearch} from "react-icons/ai"
import {GiHamburgerMenu} from "react-icons/gi"
import {Link as RouteLink, useLocation} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import Logout from './Logout'
import ButtonSignup from './ButtonSignup'
import Logout2 from './Logout2'
import { ByBrand, CurrentPage, Sort ,ByCategory} from '../redux/men/action'
import { woByBrand, woByCategory, woCurrentPage, woSort } from '../redux/women/action'
import logo from '../images/logo.svg'

const Navbar = () => {
  const {token,data,wdata,totalCartItem,WishListData,name,totalWishListItem,category} = useSelector(store=>{
    return{
        token:store.userReducer.token,
        data:store.cartReducer.data,
        WishListData:store.wishListReducer.WishListData,
        totalCartItem:store.cartReducer.totalCartItem,
        name:store.userReducer.name,
        totalCartItem:store.cartReducer.totalCartItem,
        totalWishListItem:store.wishListReducer.totalWishListItem,
        category:store.womenReducer.category
      
    }
})

   const dispatch = useDispatch()

   const[val,setval] = React.useState("")

   let search="";

   const handlechange=(e)=>{
     setval(prev=>e.target.value)

      if(search){
          clearTimeout(search)
      }
    search = setTimeout(()=>{
      dispatch(woByCategory(e.target.value))
      dispatch(ByCategory(e.target.value))
     },1000)
    
   }

   React.useEffect(()=>{

  

 

   },[])

 



   const handlemen=()=>{
     // <------when you back to men page all previous filter will remove from women page --------------------------------------------------------------------------------->  
  
      dispatch(CurrentPage(1))
      dispatch(ByCategory(""))
       dispatch(ByBrand(""))
       dispatch(Sort(undefined))

   }
   
   const handlewomen=()=>{
     // <------when you back to women page all previous filter will remove from men page --------------------------------------------------------------------------------->  
  
     dispatch(woCurrentPage(1))
     dispatch(woByCategory(""))
      dispatch(woByBrand(""))
      dispatch(woSort(undefined))

  }
  
 

  return (
    <>
    
    <Flex w="100%" h="4rem" bg="rgb(255,255,255)" justifyContent={'space-between'} position="sticky" top="0"  zIndex={100} m="auto" >

 {/* <-----------------flex left part-------------------------> */}
      <Flex w={{base:"100%",lg:"65%"}} h="100%"  justifyContent={{sm:"start",lg:"space-between"}}   >
           
         <Center display={{base:"block",lg:"none"}} mt={3} >
           <Menu   >
            <MenuButton as={Button} >
              <GiHamburgerMenu />
            </MenuButton>
            <MenuList  >
            <MenuItem fontSize="1.2rem" onClick={handlewomen}  >  <RouteLink to="/women" > WOMEN </RouteLink>  </MenuItem>
            <MenuItem  fontSize="1.2rem" onClick={handlemen}  >  <RouteLink to="/men" > MEN </RouteLink>      </MenuItem>
    
            <MenuItem fontSize="1.2rem" >  <RouteLink to="/" > HOME </RouteLink>  </MenuItem>
            <MenuItem>
              <RouteLink to="/cart">
               <Flex  fontSize="1.2rem" justifyContent="center" alignItems="center" >
                Cart <AiOutlineShoppingCart fontSize="1.4rem"   />
                <Center border="1px" borderRadius="50%" pos="absolute" fontSize="0.8rem" bg="rgb(192,0,0)" color="white" w="1.2rem" ml="4.2rem" mb="0.8rem" >  {token!="" ? totalCartItem :0}</Center>
               </Flex>
              </RouteLink>
            </MenuItem>

            <MenuItem> 
             <RouteLink to="/wishlist" >
               <Flex  fontSize="1.1rem" justifyContent="center" alignItems="center" >
                WISHLIST <AiOutlineHeart ml="0.5rem" fontSize="1.4rem"   />
                <Center border="1px" ml="6.7rem" borderRadius="50%" pos="absolute" fontSize="0.8rem" bg="rgb(192,0,0)" color="white" w="1.2rem" mb="0.8rem" > {token!="" ? totalWishListItem : 0}</Center>
               </Flex>
             </RouteLink>
            </MenuItem>

           
              <MenuItem>
                {/* <RouteLink to="/signup" >  */}
                    { token==false?  <ButtonSignup />: <Logout2 />     }
                {/* </RouteLink> */}
               </MenuItem>
            
            </MenuList>
           </Menu>    
         </Center>

      {/* <--------------------------------------------------------------------------------->    */}

          <Center w={{base:"50%",md:"22%",lg:"25%"}} h="100%"    >
             <Image src={logo} w="85%"  />
          </Center>

          <Center  display={{base:"none",lg:"flex"}} justifyContent={'space-between'} w="30%" outline={'none'} >
                <RouteLink to="/women" onClick={handlewomen} > <Box>WOMEN</Box>  </RouteLink>
                <RouteLink to="/men" onClick={handlemen} > <Box   >MEN</Box>   </RouteLink>
             
                <RouteLink to="/" >HOME</RouteLink>
          </Center>

          <Center w={{base:"50%",lg:"32%"}}>
           <InputGroup>
            <InputLeftElement children={<AiOutlineSearch color="gray.300" />} />
            <Input
              value={val}
              onChange={handlechange}
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
    
          <Center  w="18%"   display={{base:"block",lg:"none"}}  >
                
          </Center>
       
        </Flex>

{/* <-----------------flex right part-------------------------> */}

        <Flex w="26%" h="100%"  justifyContent={'space-around'} display={{base:"none",lg:"flex"}} >
        <Center gap={4} fontSize="1.7rem" > 

           <Center>
           <RouteLink to="/wishlist" state={{url:"/wishlist"}}  >  
             <Flex>
                <AiOutlineHeart  />
                <Center border="1px" borderRadius="50%" pos="absolute" fontSize="0.8rem" bg="rgb(192,0,0)" color="white" w="1.2rem" ml="1.2rem"  > {token!="" ? totalWishListItem : 0}</Center>
             </Flex>
           </RouteLink>  
          </Center>

          <Center>
          <RouteLink to="/cart" state={{url:"/cart"}} >
            <Flex>
                <AiOutlineShoppingCart   />
                <Center border="1px" borderRadius="50%" pos="absolute" fontSize="0.8rem" bg="rgb(192,0,0)" color="white" w="1.2rem" ml="1.2rem" > {token!="" ? totalCartItem :0} </Center>
             </Flex>
          </RouteLink>
          </Center>
        </Center> 

        {/* <Center w="16%" mt="0.4rem" h="78%" border="1px" borderRadius="50%"  > */}
         <Avatar name={name? name :""} bg="gray" color="white" mt="0.3rem" ml="0.9rem"  size={'md'} />
        {/* </Center> */}
       
         <Center  fontWeight="600" h="85%" ml="0.5rem"  mt="0.1rem" >
           {/* <RouteLink to="/signup" > */}
                 { token==false?  <ButtonSignup />: <Logout   />     }
            {/* </RouteLink> */}
         </Center>
        

        </Flex>
    </Flex>
    

    </>
  )
}

export default Navbar


