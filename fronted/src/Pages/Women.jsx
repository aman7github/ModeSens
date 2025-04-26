// import React, { useEffect, useRef, useState } from 'react'
// import {useDispatch,useSelector} from "react-redux"
// import { woError, woGetSuccess, woLoading, woSort, woTotalItem,woByCategory, woByBrand, woCurrentPage, PageQuery} from '../redux/women/action'
// import {Box, Center,Grid,GridItem, Flex, Text,Image, useToast} from "@chakra-ui/react"
// import Card from '../components/Card'
// import Pagination from '../components/Pagination'
// import Navbar from "../components/Navbar"
// import Route from '../components/Route'
// import Footer from "../components/Footer"
// import { useNavigate, useSearchParams } from 'react-router-dom'
// import {Link as RouteLink} from "react-router-dom"
// import {Like, wSuccess} from "../redux/WishList/action"
// import {AiOutlineHeart,AiFillHeart} from "react-icons/ai"
// import Loader from '../components/Loader'
// import Error from '../components/Error'
// import NoProduct from '../components/NoProduct'
// import { ByBrand, ByCategory, CurrentPage, Sort } from '../redux/men/action'
// import {BsHeart} from "react-icons/bs"
// import { PayableAmount, TotalDiscount, TotalPrice } from '../redux/Cart/action'



// const Women = () => {

//   const {wo_loading,wo_error,data,woStatus,currentPage,sort,category,brand,pageQuery,like} = useSelector((store)=>{
//     return{
//         wo_loading:store.womenReducer.loading,
//         wo_error:store.womenReducer.error,
//         data:store.womenReducer.data,
//         woStatus:store.womenReducer.status,
//         currentPage:store.womenReducer.currentPage,
//         sort:store.womenReducer.sort,
//         category:store.womenReducer.category,
//         brand:store.womenReducer.brand,
//         like:store.wishListReducer.like
    
//     }
//   })

 
//   const dispatch=useDispatch()


//    React.useEffect(()=>{

//        getWomenData(currentPage,sort,category,brand)
//    },[currentPage,sort,category,brand,like])


//    // useEffect(()=>{
//    //    setsearchParmas({page:currentPage,category:category,brand:brand,sort:sort})
//    // },[currentPage,sort,category,brand])

  
//    // const [searchParams,setsearchParmas] = useSearchParams()

//    // const [pPage,setpPage] = useState(Number(searchParams.get("page")))



  
  
 

//    const getWomenData=(currentPage,sort,category)=>{
//         dispatch(woLoading())
//         //https://modesens1.onrender.com/women/get
//         fetch(`https://modesens1.onrender.com/women/get?sort=price&order=${sort}&page=${currentPage}&category=${category}&brand=${brand}`)
//         .then((res)=>res.json())
//         .then((res)=>{
//             dispatch(woGetSuccess(res.msg))
//             dispatch(woTotalItem(res.totalItems)) 
//         })
//         .catch((err)=>{
//             console.log(err)
//             dispatch(woError())
//         })
//    }

//     const Sortbyprice=(val)=>{
//        dispatch(woSort(val))
//     }

//     const Category=(val)=>{
//          dispatch(woByCategory(val))
//     }

//     const Brand=(val)=>{

//        dispatch(woByBrand(val))
//     }

  



//    // <------------------------------------add to wishlist----------------------------------------->

//       //  const toastWishlist = useToast()

//       // const handleclick=(el)=>{
//       //    fetch(`https://modesens1.onrender.com/wishlist/add`,{
//       //       method:"POST",
//       //       body:JSON.stringify(el),
//       //       headers:{
//       //         "Content-Type":"application/json",
//       //         "authorization":`${token}`
//       //       }
//       //   })
//       //   .then((res)=>res.json())
//       //   .then((res)=>{
//       //     dispatch(TotalPrice())
//       //     dispatch(TotalDiscount())
//       //     dispatch(PayableAmount())
//       //     dispatch(wSuccess(res.data))
        
//       //       toastWishlist({
//       //         title:res.msg,
//       //         duration:3000,
//       //         isClosable:true,
//       //         position:"top"
//       //       })
            
//       //   })
//       //   .catch((err)=>{
//       //       console.log(err)
     
//       //   })

//       // }



//       // const change=(el)=>{
//       //    fetch(`https://modesens1.onrender.com/wishlist/add`,{
//       //       method:"POST",
//       //       body:JSON.stringify(el),
//       //       headers:{
//       //         "Content-Type":"application/json",
//       //         "authorization":`${token}`
//       //       }
//       //   })
//       //   .then((res)=>res.json())
//       //   .then((res)=>{
//       //     dispatch(TotalPrice())
//       //     dispatch(TotalDiscount())
//       //     dispatch(PayableAmount())
//       //     dispatch(wSuccess(res.data))
        
//       //       toastWishlist({
//       //         title:res.msg,
//       //         duration:3000,
//       //         isClosable:true,
//       //         position:"top"
//       //       })
            
//       //   })
//       //   .catch((err)=>{
//       //       console.log(err)
     
//       //   })

//       // }



  
   
  

//   return (
//   <>
//     {   wo_loading==true? <Loader /> : wo_error==true? <Error />: 
//       // <-----------------------------if loading false then this box will render------------------------------------------------------------>             
//        <Box>  
         
//           <Navbar />
//            {/* <Route gender="women" color="rgb(248,247,246)" /> */}
        
//            <Box w="95%" m="auto"  >
              
//                   <Pagination />
              
            
//                    <Flex  justifyContent={{base:"space-between",sm:"space-around",md:"space-around"}} >

//                         <Box w={{base:"50%",sm:"40%",md:"27%",lg:"27%"}} bg="rgb(248,247,246)" pr="1.5rem" pl="1.5rem" >


//                              <Box textAlign="start" >
//                                  <Flex justifyContent={'space-between'} flexDirection={{base:"column", lg:"row" }} >
//                                      <Text fontWeight={'medium'} fontSize="1.1rem" mt="0.5rem" >
//                                         Sort By Price 
//                                      </Text>
//                                      <Center border="1px" mt="0.7rem" pl="1rem" pr="1rem" fontWeight={'bold'} fontSize="1rem"  borderRadius="0.5rem" 
//                                       cursor={'pointer'} _hover={{bg:"black", color:"white"}} onClick={()=>Sortbyprice("undefined")} >
//                                          Reset
//                                      </Center>
//                                   </Flex>

//                                   <Flex  mt="0.7rem" justifyContent="space-between" flexDirection={{base:"column", lg:"row" }} >
//                                      <Center border="1px" pl="1rem" pr="1rem" pt="0.4rem" pb="0.4rem" fontWeight={'bold'} fontSize="1rem" bg="black" color="white" borderRadius="0.5rem" 
//                                       cursor={'pointer'} _hover={{bg:"white", color:"black"}} onClick={()=>Sortbyprice("asc")} >
//                                          Low To High
//                                      </Center>
//                                      <Center border="1px"  pl="1rem" pr="1rem" pt="0.4rem" pb="0.4rem" fontSize="1rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
//                                       cursor={'pointer'} _hover={{bg:"white", color:"black"}} onClick={()=>Sortbyprice("desc")} >
//                                          High To Low
//                                      </Center>
//                                   </Flex>
//                              </Box>

//                              <Box textAlign="start" mt="2rem" >
//                                  <Flex justifyContent={'space-between'} flexDirection={{base:"column", lg:"row" }} >
//                                      <Text fontWeight={'medium'} fontSize="1.1rem" mt="0.5rem" >
//                                         Filter By Category 
//                                      </Text>
//                                      <Center border="1px" mt="0.7rem" pl="1rem" pr="1rem" fontWeight={'bold'} fontSize="1rem"  borderRadius="0.5rem" 
//                                       cursor={'pointer'} _hover={{bg:"black", color:"white"}} onClick={()=>Category("")} >
//                                          Reset
//                                      </Center>
//                                   </Flex>

//                                   <Grid mt="0.7rem"  templateColumns={{base:"repeat(1,1fr)", lg:"repeat(2,1fr)" }} gap="1rem"  >
//                                      <Center border="1px" pt="0.4rem" pb="0.4rem"   fontWeight={'bold'} fontSize="1rem" bg="black" color="white" borderRadius="0.5rem" 
//                                        cursor={'pointer'} _hover={{bg:"white", color:"black"}} onClick={()=>Category("bag")} >
//                                          Bag
//                                      </Center>
//                                      <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="1rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
//                                        cursor={'pointer'} _hover={{bg:"white", color:"black"}} onClick={()=>Category("dress")} >
//                                          Dress
//                                      </Center>
//                                      <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="1rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
//                                        cursor={'pointer'} _hover={{bg:"white", color:"black"}} onClick={()=>Category("hat")} >
//                                          Hat
//                                      </Center>
//                                      <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="1rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
//                                        cursor={'pointer'} _hover={{bg:"white", color:"black"}} onClick={()=>Category("short")} >
//                                          Short
//                                      </Center>
//                                      <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="1rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
//                                        cursor={'pointer'} _hover={{bg:"white", color:"black"}} onClick={()=>Category("Trouser")} >
//                                          Trouser
//                                      </Center>
//                                      <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="1rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
//                                        cursor={'pointer'} _hover={{bg:"white", color:"black"}} onClick={()=>Category("shoe")} >
//                                          Shoe
//                                      </Center>
//                                   </Grid>
//                              </Box>



//                              <Box textAlign="start" mt="2rem" >
//                                   <Flex justifyContent={'space-between'} flexDirection={{base:"column", lg:"row" }} >
//                                      <Text fontWeight={'medium'} fontSize="1.1rem" mt="0.5rem" >
//                                         Filter By Top Brands 
//                                      </Text>
//                                      <Center border="1px" mt="0.7rem" pl="1rem" pr="1rem" fontWeight={'bold'} fontSize="1rem"  borderRadius="0.5rem" 
//                                       cursor={'pointer'} _hover={{bg:"black", color:"white"}} onClick={()=>Brand("")} >
//                                          Reset
//                                      </Center>
//                                   </Flex>

//                                   <Grid mt="0.4rem"  templateColumns={{base:"repeat(1,1fr)", lg:"repeat(2,1fr)" }} gap="1rem"  >
//                                      <Center border="1px" pt="0.4rem" pb="0.4rem"   fontWeight={'bold'} fontSize="0.9rem" bg="black" color="white" borderRadius="0.5rem" 
//                                       cursor={'pointer'}  onClick={()=>Brand("ZIMMERMANN")} _hover={{bg:"white", color:"black"}} >
//                                         ZIMMERMANN
//                                      </Center>
//                                      <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="0.9rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
//                                       cursor={'pointer'}  onClick={()=>Brand("ISABEL MARANT")} _hover={{bg:"white", color:"black"}} >
//                                         ISABEL MARANT
//                                      </Center>
//                                      <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="0.9rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
//                                       cursor={'pointer'}  onClick={()=>Brand("JACQUEMUS")} _hover={{bg:"white", color:"black"}} >
//                                        JACQUEMUS
//                                      </Center>
//                                      <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="0.9rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
//                                       cursor={'pointer'}  onClick={()=>Brand("VERSACE")} _hover={{bg:"white", color:"black"}} >
//                                        VERSACE
//                                      </Center>
//                                      <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="0.9rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
//                                       cursor={'pointer'}  onClick={()=>Brand("BALENCIAGA")} _hover={{bg:"white", color:"black"}} >
//                                        BALENCIAGA
//                                      </Center>
//                                      <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="0.9rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
//                                       cursor={'pointer'}  onClick={()=>Brand("KHAITE")} _hover={{bg:"white", color:"black"}} >
//                                        KHAITE
//                                      </Center>
//                                      <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="0.9rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
//                                       cursor={'pointer'}  onClick={()=>Brand("GINGER")} _hover={{bg:"white", color:"black"}} >
//                                       GINGER
//                                      </Center>
//                                      <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="0.9rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
//                                       cursor={'pointer'}  onClick={()=>Brand("MAX MARA")} _hover={{bg:"white", color:"black"}} >
//                                         MAX MARA
//                                      </Center>
//                                   </Grid>
//                              </Box>
                         
                     
//                         </Box> 
                        
// {/* <----------------------------------Right side -----------------------------------------> */}
//                      {  data.length===0 ? <NoProduct brand={brand} category={category} /> :
//                         <Grid w={{base:"50%",sm:"50%",md:"60%",lg:"72%"}}  templateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}} gap="0.5rem" >
//                              {
//                                 data.map((el,i)=>{
//                                      return <GridItem key={i}  border="1px"  borderColor="gray.200" pb="1rem"  bg="rgb(248,247,246)" >

//                                               {/* <Center   pos="absolute" ml="-0.3rem" fontSize="1.8rem" color={'red'} ref={ele=>{ref2.current[i]=ele}} onClick={()=>handleclick(el)}  >
//                                                  <BsHeart  cursor={'pointer'}      />
//                                                </Center> */}

//                                                {/* <RouteLink to={`/women/${el._id}`} > */}
//                                                       <Card   img={el.Image} title={el.Title} des={el.Name} price={el.price} originalprice={el.Sprice} 
//                                                         arr={el.arr} el={el} gender={"women"} i={i}   />
//                                                 {/* </RouteLink>   */}

//                                             </GridItem>
                                           
//                                 })
//                              }	
//                         </Grid>
//                      }

//                    </Flex>



//          </Box>

//          <Pagination />

//          <Footer />

//        </Box>


//     }
//   </>     
//   )
// }

// export default Women











































// import React, { useEffect, useRef, useState } from 'react'
// import {useDispatch,useSelector} from "react-redux"
// import { woError, woGetSuccess, woLoading, woSort, woTotalItem,woByCategory, woByBrand, woCurrentPage, PageQuery} from '../redux/women/action'
// import {Box, Center,Grid,GridItem, Flex, Text,Image, useToast} from "@chakra-ui/react"
// import Card from '../components/Card'
// import Pagination from '../components/Pagination'
// import Navbar from "../components/Navbar"
// import Route from '../components/Route'
// import Footer from "../components/Footer"
// import { useNavigate, useSearchParams } from 'react-router-dom'
// import {Link as RouteLink} from "react-router-dom"
// import {Like, wSuccess} from "../redux/WishList/action"
// import {AiOutlineHeart,AiFillHeart} from "react-icons/ai"
// import Loader from '../components/Loader'
// import Error from '../components/Error'
// import NoProduct from '../components/NoProduct'
// import { ByBrand, ByCategory, CurrentPage, Sort } from '../redux/men/action'
// import {BsHeart} from "react-icons/bs"
// import { PayableAmount, TotalDiscount, TotalPrice } from '../redux/Cart/action'















import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Center, Grid, GridItem, Flex, Text, Image, Button, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, IconButton } from "@chakra-ui/react";
import { CloseIcon } from '@chakra-ui/icons';
import Card from '../components/Card';
import Pagination from '../components/Pagination';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from '../components/Loader';
import NoProduct from '../components/NoProduct';
import { useBreakpointValue } from '@chakra-ui/react';
import { woByBrand, woByCategory, woError, woGetSuccess, woLoading, woSort, woTotalItem } from '../redux/women/action';

const Women = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { w_loading, w_error, data, currentPage, sort, category, brand, like } = useSelector((store) => ({
    w_loading: store.womenReducer.loading,
    w_error: store.womenReducer.error,
    data: store.womenReducer.data,
    currentPage: store.womenReducer.currentPage,
    sort: store.womenReducer.sort,
    category: store.womenReducer.category,
    brand: store.womenReducer.brand,
    like: store.wishListReducer.like
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    getWomenData(currentPage, sort, category, brand);
  }, [currentPage, sort, category, brand]);

  const getWomenData = (currentPage, sort, category, brand) => {
    dispatch(woLoading());
    fetch(`https://modesens1.onrender.com/women/get?sort=price&order=${sort}&page=${currentPage}&category=${category}&brand=${brand}`)
      .then((res) => res.json())
      .then((res) => {
        dispatch(woGetSuccess(res.msg));
        dispatch(woTotalItem(res.totalItems));
      })
      .catch((err) => {
        console.log(err);
        dispatch(woError());
      });
  };

  const Sortbyprice = (val) => {
    dispatch(woSort(val));
    if (window.innerWidth <= 500) {
      onClose();  //  Close the drawer after sorting
    }
  };

  const Category = (val) => {
    dispatch(woByCategory(val));
    if (window.innerWidth <= 500) {
      onClose();  //  Close the drawer after sorting
    }
  };

  const Brand = (val) => {
    dispatch(woByBrand(val));
    if (window.innerWidth <= 500) {
      onClose();  // Close the drawer after sorting
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 500 && isOpen) {
        onClose();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, onClose]);



  const RenderSortFilter = () => (
    <Box textAlign="start">
      {/* Sort Section */}
      <Flex justifyContent={'space-between'} flexDirection={{ base: "column", lg: "row" }}>
        <Text fontWeight={'medium'} fontSize="1.1rem" mt="0.5rem">
          Sort By Price
        </Text>
        <Center border="1px" mt="0.7rem" pl="1rem" pr="1rem" fontWeight={'bold'} fontSize="1rem" borderRadius="0.5rem"
          cursor={'pointer'} _hover={{ bg: "black", color: "white" }} onClick={() => Sortbyprice("undefined")}>
          Reset
        </Center>
      </Flex>
      <Flex mt="0.7rem" justifyContent="space-between" flexDirection={{ base: "column", lg: "row" }}>
        <Center border="1px" pl="1rem" pr="1rem" pt="0.4rem" pb="0.4rem" fontWeight={'bold'} fontSize="1rem" bg="black" color="white" borderRadius="0.5rem"
          cursor={'pointer'} _hover={{ bg: "white", color: "black" }} onClick={() => Sortbyprice("asc")}>
          Low To High
        </Center>
        <Center border="1px" pl="1rem" pr="1rem" pt="0.4rem" pb="0.4rem" fontWeight={'bold'} fontSize="1rem" bg="black" color="white" borderRadius="0.5rem"
          cursor={'pointer'} _hover={{ bg: "white", color: "black" }} onClick={() => Sortbyprice("desc")}>
          High To Low
        </Center>
      </Flex>

      {/* Category Section */}
      <Box textAlign="start" mt="2rem">
        <Flex justifyContent={'space-between'} flexDirection={{ base: "column", lg: "row" }}>
          <Text fontWeight={'medium'} fontSize="1.1rem" mt="0.5rem">
            Filter By Category
          </Text>
          <Center border="1px" mt="0.7rem" pl="1rem" pr="1rem" fontWeight={'bold'} fontSize="1rem" borderRadius="0.5rem"
            cursor={'pointer'} _hover={{ bg: "black", color: "white" }} onClick={() => Category("")}>
            Reset
          </Center>
        </Flex>
        <Grid mt="0.7rem" templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }} gap="1rem">
          {["Dresses", "Heels", "Tops", "Jeans", "Handbags", "Skirts"].map((item) => (
            <Center key={item} border="1px" pt="0.4rem" pb="0.4rem" fontWeight={'bold'} fontSize="1rem" bg="black" color="white" borderRadius="0.5rem"
              cursor={'pointer'} _hover={{ bg: "white", color: "black" }} onClick={() => Category(item)}>
              {item}
            </Center>
          ))}
        </Grid>
      </Box>

      {/* Brand Section */}
      <Box textAlign="start" mt="2rem">
        <Flex justifyContent={'space-between'} flexDirection={{ base: "column", lg: "row" }}>
          <Text fontWeight={'medium'} fontSize="1.1rem" mt="0.5rem">
            Filter By Top Brands
          </Text>
          <Center border="1px" mt="0.7rem" pl="1rem" pr="1rem" fontWeight={'bold'} fontSize="1rem" borderRadius="0.5rem"
            cursor={'pointer'} _hover={{ bg: "black", color: "white" }} onClick={() => Brand("")}>
            Reset
          </Center>
        </Flex>
        <Grid mt="0.4rem" templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }} gap="1rem">
          {["ZARA", "H&M", "MANGO", "VERO MODA", "GUESS", "Forever 21"].map((item) => (
            <Center key={item} border="1px" pt="0.4rem" pb="0.4rem" fontWeight={'bold'} fontSize="0.9rem" bg="black" color="white" borderRadius="0.5rem"
              cursor={'pointer'} _hover={{ bg: "white", color: "black" }} onClick={() => Brand(item)}>
              {item}
            </Center>
          ))}
        </Grid>
      </Box>
    </Box>
  );

  return (
    <>
      {w_loading ? <Loader /> :
        <Box>
          <Navbar />
          <Box w={{ base: "100%", sd: "95%" }} m="auto">

            {/* Drawer Button Mobile */}
            <Box display={{ base: "block", md: "none" }} textAlign="left" p="1rem">
              <Button onClick={onOpen} colorScheme="pink"   sx={{bg:"black"}} >
                Sort & Filter
              </Button>
            </Box>

            {/* Pagination Top */}
            <Pagination />

            <Flex justifyContent={{ base: "space-between", sm: "space-around", md: "space-around" }}>
              {/* Left Filters */}
              <Box w={{ base: "0px", md: "27%" }} pr="1.5rem" pl="1.5rem" bg="rgb(248,247,246)" display={{ base: "none", md: "block" }}>
                <RenderSortFilter />
              </Box>

              {/* Right Cards */}
              {data.length === 0 ? <NoProduct brand={brand} category={category} /> :
                <Grid
                  w={{ base: "90%", sm: "90%", md: "70%" }}
                  m={{ base: "auto", md: "0" }}
                  templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)", lg: "repeat(3,1fr)" }}
                  gap="0.5rem"
                >
                  {data.map((el, i) => (
                    <GridItem key={el._id} border="1px" bg="rgb(248,247,246)" borderColor="gray.200" pb="1rem">
                      <Card img={el.Image} title={el.Title} des={el.Name} price={el.price} originalprice={el.Sprice} arr={el.arr} el={el} gender={"women"} i={i} />
                    </GridItem>
                  ))}
                </Grid>
              }
            </Flex>
          </Box>

          {/* Pagination Bottom */}
          <Pagination />
          <Footer />

          {/* Drawer */}
          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent maxW="90%">
              <DrawerHeader display="flex" justifyContent="space-between" alignItems="center" color="white" bg='black'>
                Sort & Filter
                <IconButton
                  icon={<CloseIcon />}
                  size="sm"
                  onClick={onClose}
                  aria-label="Close"
                  colorScheme="whiteAlpha"
                  bg="white"
                  color="black"
                  borderRadius="full"
                />
              </DrawerHeader>
              <DrawerBody>
                <RenderSortFilter />
              </DrawerBody>
            </DrawerContent>
          </Drawer>

        </Box>
      }
    </>
  );
};

export default Women;
