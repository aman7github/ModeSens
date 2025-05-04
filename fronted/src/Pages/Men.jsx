

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mError, GetSuccess, mLoading, Sort, TotalItem, ByCategory, ByBrand } from '../redux/men/action';
import { Box, Center, Grid, GridItem, Flex, Text, Image, Button, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, IconButton } from "@chakra-ui/react";
import { CloseIcon } from '@chakra-ui/icons'; // ✅ Import close icon
import Card from '../components/Card';
import Pagination from '../components/Pagination';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from '../components/Loader';
import NoProduct from '../components/NoProduct';
import { useBreakpointValue } from '@chakra-ui/react';

const Men = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { m_loading, m_error, data, currentPage, sort, category, brand, like } = useSelector((store) => ({
    m_loading: store.menReducer.loading,
    m_error: store.menReducer.error,
    data: store.menReducer.data,
    currentPage: store.menReducer.currentPage,
    sort: store.menReducer.sort,
    category: store.menReducer.category,
    brand: store.menReducer.brand,
    like: store.wishListReducer.like
  }));

  const dispatch = useDispatch();

  React.useEffect(() => {
    getMenData(currentPage, sort, category, brand);
  }, [currentPage, sort, category, brand]);

  const getMenData = (currentPage, sort, category) => {
    dispatch(mLoading());
    fetch(`https://modesens1.onrender.com/men/get?sort=price&order=${sort}&page=${currentPage}&category=${category}&brand=${brand}`)
      .then((res) => res.json())
      .then((res) => {
        dispatch(GetSuccess(res.msg));
        dispatch(TotalItem(res.totalItems));
      })
      .catch((err) => {
        console.log(err);
        dispatch(mError());
      });
  }

  const Sortbyprice = (val) => {
    dispatch(Sort(val));
    if (window.innerWidth <= 500) {
      onClose();  //  Close the drawer after sorting
    }
  }

  const Category = (val) => {
    dispatch(ByCategory(val));
    dispatch(ByBrand(""));
    if (window.innerWidth <= 500) {
      onClose();  //  Close the drawer after sorting
    }
  }

  const Brand = (val) => {
    dispatch(ByBrand(val));
  
    if (window.innerWidth <= 500) {
      onClose();  //  Close the drawer after sorting
    }
  }

  //  Auto close Drawer when screen is resized above 500px
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
     {/* All Sort, Category and Brand Filters - Your existing UI copied inside this small function */}
     {/* -------- Sort Section -------- */}
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

     {/* -------- Category Section -------- */}
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
         {/* Your category buttons */}
         {["bag", "Casual Shirts", "wallet", "Jeans", "Tshirt", "shoe"].map((item) => (
           <Center key={item} border="1px" pt="0.4rem" pb="0.4rem" fontWeight={'bold'} fontSize="1rem" bg="black" color="white" borderRadius="0.5rem"
             cursor={'pointer'} _hover={{ bg: "white", color: "black" }} onClick={() => Category(item)}>
             {item}
           </Center>
         ))}
       </Grid>
     </Box>

     {/* -------- Brand Section -------- */}
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
         {/* Your brand buttons */}
         {["PUMA", "BOSSINI", "FAME", "TOMMY HILFIGER", "Skyper", "DIESEL", "FOSSIL", "KAPPA"].map((item) => (
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
      {m_loading ? <Loader /> :
        <Box>
          <Navbar />
          <Box w={{ base: "100%", sd: "95%" }} m="auto">
            {/* Drawer Button for Mobile */}
            <Box display={{ base: "block", md: "none" }} textAlign="left" p="1rem">
              <Button onClick={onOpen} colorScheme="teal" sx={{bg:'black'}} >
                Sort & Filter
              </Button>
            </Box>

            {/* Pagination Top */}
            <Pagination />

            <Flex justifyContent={{ base: "space-between", sm: "space-around", md: "space-around" }}>
              {/* Left Side Filters */}
              <Box
                w={{ base: "0px", md: "27%" }}
                pr="1.5rem"
                pl="1.5rem"
                bg="rgb(248,247,246)"
                display={{ base: "none", md: "block" }}
              >
                <RenderSortFilter />
              </Box>

              {/* Right Side Cards */}
              {data.length === 0 ? <NoProduct brand={brand} category={category} /> :
                <Grid
                  w={{ base: "90%", sm: "90%", md: "70%" }} //updated width
                  m={{ base: "auto", md: "0" }}              // centered in mobile
                  templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)", lg: "repeat(3,1fr)" }}
                  gap="0.5rem"
                >
                  {data && data.map((el, i) => (
                    <GridItem key={el._id} border="1px" bg="rgb(248,247,246)" borderColor="gray.200" pb="1rem">
                      <Card img={el.Image} title={el.Title} des={el.Name} price={el.price} originalprice={el.Sprice} arr={el.arr} el={el} gender={"men"} i={i} />
                    </GridItem>
                  ))}
                </Grid>
              }
            </Flex>
          </Box>

          {/* Pagination Bottom */}
          <Pagination />
          <Footer />

          {/* Drawer for Mobile */}
          <Drawer isOpen={isOpen} placement="left" onClose={onClose} >
            <DrawerOverlay />
            <DrawerContent maxW="90%" > 
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
}

export default Men;








































































































// import React, { useEffect } from 'react'
// import {useDispatch,useSelector} from "react-redux"
// import { mError, GetSuccess, mLoading, Sort, TotalItem,ByCategory, ByBrand } from '../redux/men/action'
// import {Box, Center,Grid,GridItem, Flex, Text,Image} from "@chakra-ui/react"
// import Card from '../components/Card'
// import Pagination from '../components/Pagination'
// import Navbar from "../components/Navbar"
// import Footer from "../components/Footer"
// import Loader from '../components/Loader'
// import NoProduct from '../components/NoProduct'





//   const Men=()=>{

//   const {m_loading,m_error,data,currentPage,sort,category,brand,like} = useSelector((store)=>{
//     return{
//         m_loading:store.menReducer.loading,
//         m_error:store.menReducer.error,
//         data:store.menReducer.data,
//         currentPage:store.menReducer.currentPage,
//         sort:store.menReducer.sort,
//         category:store.menReducer.category,
//         brand:store.menReducer.brand,
//         like:store.wishListReducer.like
//     }
//   })

 
//   const dispatch=useDispatch()


//    React.useEffect(()=>{
  
//        getMenData(currentPage,sort,category,brand)
//    },[currentPage,sort,category,brand])

  

//    const getMenData=(currentPage,sort,category)=>{
//         dispatch(mLoading())
//         fetch(`https://modesens1.onrender.com/men/get?sort=price&order=${sort}&page=${currentPage}&category=${category}&brand=${brand}`)
//         .then((res)=>res.json())
//         .then((res)=>{
//           //  console.log(res)
//             dispatch(GetSuccess(res.msg))
//             dispatch(TotalItem(res.totalItems)) 
//         })
//         .catch((err)=>{
//             console.log(err)
//            dispatch(mError())
//         })
//    }
   

//     const Sortbyprice=(val)=>{
//        dispatch(Sort(val))
//     }

//     const Category=(val)=>{
//          dispatch(ByCategory(val))
//     }

//     const Brand=(val)=>{
//        dispatch(ByBrand(val))
//     }

//    console.log(data)


//   return ( 
//    <>
//    {  m_loading==true? <Loader /> :   
//       // <-----------------------------if loading false then this box will render------------------------------------------------------------>             
//       <Box>  

//            <Navbar />
//            {/* <Route gender="men" color="rgb(248,247,246)" /> */}

//            <Box w={{base:"100%",sd:"95%"}} m="auto"  >
              
//                   <Pagination />
              
            
//                    <Flex  justifyContent={{base:"space-between",sm:"space-around",md:"space-around"}} >

// {/* <----------------------------------Left side -----------------------------------------> */}
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
//                                          Bags
//                                      </Center>
//                                      <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="1rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
//                                        cursor={'pointer'} _hover={{bg:"white", color:"black"}} onClick={()=>Category("Casual Shirts")} >
//                                         Shirts
//                                      </Center>
//                                      <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="1rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
//                                        cursor={'pointer'} _hover={{bg:"white", color:"black"}} onClick={()=>Category("wallet")} >
//                                          Wallets
//                                      </Center>
//                                      <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="1rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
//                                        cursor={'pointer'} _hover={{bg:"white", color:"black"}} onClick={()=>Category("Jeans")} >
//                                         Jeans
//                                      </Center>
//                                      <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="1rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
//                                        cursor={'pointer'} _hover={{bg:"white", color:"black"}} onClick={()=>Category("Tshirt")} >
//                                          T-shirt
//                                      </Center>
//                                      <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="1rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
//                                        cursor={'pointer'} _hover={{bg:"white", color:"black"}} onClick={()=>Category("shoe")} >
//                                          Shoes
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
//                                       cursor={'pointer'}  onClick={()=>Brand("PUMA")} _hover={{bg:"white", color:"black"}} >
//                                         PUMA
//                                      </Center>
//                                      <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="0.9rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
//                                       cursor={'pointer'}  onClick={()=>Brand("BOSSINI")} _hover={{bg:"white", color:"black"}} >
//                                         BOSSINI
//                                      </Center>
//                                      <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="0.9rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
//                                       cursor={'FAME'}  onClick={()=>Brand("FAME")} _hover={{bg:"white", color:"black"}} >
//                                        FAME
//                                      </Center>
//                                      <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="0.9rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
//                                       cursor={'pointer'}  onClick={()=>Brand("TOMMY HILFIGER")} _hover={{bg:"white", color:"black"}} >
//                                        TOMMY HILFIGER
//                                      </Center>
//                                      <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="0.9rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
//                                       cursor={'pointer'}  onClick={()=>Brand("Skyper")} _hover={{bg:"white", color:"black"}} >
//                                        Skyper
//                                      </Center>
//                                      <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="0.9rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
//                                       cursor={'pointer'}  onClick={()=>Brand("DIESEL")} _hover={{bg:"white", color:"black"}} >
//                                        DIESEL
//                                      </Center>
//                                      <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="0.9rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
//                                       cursor={'pointer'}  onClick={()=>Brand("FOSSIL")} _hover={{bg:"white", color:"black"}} >
//                                       FOSSIL
//                                      </Center>
//                                      <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="0.9rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
//                                       cursor={'pointer'}  onClick={()=>Brand("KAPPA")} _hover={{bg:"white", color:"black"}} >
//                                         KAPPA
//                                      </Center>
//                                   </Grid>
//                              </Box> 
                         
                     
//                         </Box> 
//    {/* <----------------------------------Left side end -----------------------------------------> */}                     
// {/* <----------------------------------Right side -----------------------------------------> */}
//                     {  data.length===0 ? <NoProduct brand={brand} category={category} /> :
//                         <Grid w={{base:"50%",sm:"50%",md:"60%",lg:"72%"}} templateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}} gap="0.5rem" >
//                              { data &&
//                                data.map((el,i)=>{
//                                      return <GridItem key={el._id} border="1px"  bg="rgb(248,247,246)"  borderColor="gray.200" pb="1rem" >

//                                               {/* <Center   pos="absolute" ml="-0.5rem" fontSize="2rem"  >
//                                                   <AiOutlineHeart   />
//                                                </Center> */}

//                                                {/* <RouteLink to={`/men/${el._id}`} > */}
//                                                       <Card img={el.Image} title={el.Title} des={el.Name} price={el.price} originalprice={el.Sprice} 
//                                                         arr={el.arr} el={el} gender={"men"} i={i} />
//                                                 {/* </RouteLink>   */}

//                                             </GridItem>
                                           
//                                 })
//                              }	
//                         </Grid>
//                      }

//                    </Flex>



//            </Box>
          
//           <Pagination />

//           <Footer />
                           
//       </Box>
//    }


//  </>

//   )

// }


// export default Men





















































// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { mError, GetSuccess, mLoading, Sort, TotalItem, ByCategory, ByBrand } from '../redux/men/action';
// import { Box, Center, Grid, GridItem, Flex, Text, Image, Button, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody } from "@chakra-ui/react";
// import Card from '../components/Card';
// import Pagination from '../components/Pagination';
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Loader from '../components/Loader';
// import NoProduct from '../components/NoProduct';

// const Men = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   const { m_loading, m_error, data, currentPage, sort, category, brand, like } = useSelector((store) => ({
//     m_loading: store.menReducer.loading,
//     m_error: store.menReducer.error,
//     data: store.menReducer.data,
//     currentPage: store.menReducer.currentPage,
//     sort: store.menReducer.sort,
//     category: store.menReducer.category,
//     brand: store.menReducer.brand,
//     like: store.wishListReducer.like
//   }));

//   const dispatch = useDispatch();

//   React.useEffect(() => {
//     getMenData(currentPage, sort, category, brand);
//   }, [currentPage, sort, category, brand]);

//   const getMenData = (currentPage, sort, category) => {
//     dispatch(mLoading());
//     fetch(`https://modesens1.onrender.com/men/get?sort=price&order=${sort}&page=${currentPage}&category=${category}&brand=${brand}`)
//       .then((res) => res.json())
//       .then((res) => {
//         dispatch(GetSuccess(res.msg));
//         dispatch(TotalItem(res.totalItems));
//       })
//       .catch((err) => {
//         console.log(err);
//         dispatch(mError());
//       });
//   }

//   const Sortbyprice = (val) => {
//     dispatch(Sort(val));
//   }

//   const Category = (val) => {
//     dispatch(ByCategory(val));
//   }

//   const Brand = (val) => {
//     dispatch(ByBrand(val));
//   }

//   console.log(data);

//   const RenderSortFilter = () => (
//     <Box textAlign="start">
//       {/* All Sort, Category and Brand Filters - Your existing UI copied inside this small function */}
//       {/* -------- Sort Section -------- */}
//       <Flex justifyContent={'space-between'} flexDirection={{ base: "column", lg: "row" }}>
//         <Text fontWeight={'medium'} fontSize="1.1rem" mt="0.5rem">
//           Sort By Price
//         </Text>
//         <Center border="1px" mt="0.7rem" pl="1rem" pr="1rem" fontWeight={'bold'} fontSize="1rem" borderRadius="0.5rem"
//           cursor={'pointer'} _hover={{ bg: "black", color: "white" }} onClick={() => Sortbyprice("undefined")}>
//           Reset
//         </Center>
//       </Flex>
//       <Flex mt="0.7rem" justifyContent="space-between" flexDirection={{ base: "column", lg: "row" }}>
//         <Center border="1px" pl="1rem" pr="1rem" pt="0.4rem" pb="0.4rem" fontWeight={'bold'} fontSize="1rem" bg="black" color="white" borderRadius="0.5rem"
//           cursor={'pointer'} _hover={{ bg: "white", color: "black" }} onClick={() => Sortbyprice("asc")}>
//           Low To High
//         </Center>
//         <Center border="1px" pl="1rem" pr="1rem" pt="0.4rem" pb="0.4rem" fontWeight={'bold'} fontSize="1rem" bg="black" color="white" borderRadius="0.5rem"
//           cursor={'pointer'} _hover={{ bg: "white", color: "black" }} onClick={() => Sortbyprice("desc")}>
//           High To Low
//         </Center>
//       </Flex>

//       {/* -------- Category Section -------- */}
//       <Box textAlign="start" mt="2rem">
//         <Flex justifyContent={'space-between'} flexDirection={{ base: "column", lg: "row" }}>
//           <Text fontWeight={'medium'} fontSize="1.1rem" mt="0.5rem">
//             Filter By Category
//           </Text>
//           <Center border="1px" mt="0.7rem" pl="1rem" pr="1rem" fontWeight={'bold'} fontSize="1rem" borderRadius="0.5rem"
//             cursor={'pointer'} _hover={{ bg: "black", color: "white" }} onClick={() => Category("")}>
//             Reset
//           </Center>
//         </Flex>
//         <Grid mt="0.7rem" templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }} gap="1rem">
//           {/* Your category buttons */}
//           {["bag", "Casual Shirts", "wallet", "Jeans", "Tshirt", "shoe"].map((item) => (
//             <Center key={item} border="1px" pt="0.4rem" pb="0.4rem" fontWeight={'bold'} fontSize="1rem" bg="black" color="white" borderRadius="0.5rem"
//               cursor={'pointer'} _hover={{ bg: "white", color: "black" }} onClick={() => Category(item)}>
//               {item}
//             </Center>
//           ))}
//         </Grid>
//       </Box>

//       {/* -------- Brand Section -------- */}
//       <Box textAlign="start" mt="2rem">
//         <Flex justifyContent={'space-between'} flexDirection={{ base: "column", lg: "row" }}>
//           <Text fontWeight={'medium'} fontSize="1.1rem" mt="0.5rem">
//             Filter By Top Brands
//           </Text>
//           <Center border="1px" mt="0.7rem" pl="1rem" pr="1rem" fontWeight={'bold'} fontSize="1rem" borderRadius="0.5rem"
//             cursor={'pointer'} _hover={{ bg: "black", color: "white" }} onClick={() => Brand("")}>
//             Reset
//           </Center>
//         </Flex>
//         <Grid mt="0.4rem" templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }} gap="1rem">
//           {/* Your brand buttons */}
//           {["PUMA", "BOSSINI", "FAME", "TOMMY HILFIGER", "Skyper", "DIESEL", "FOSSIL", "KAPPA"].map((item) => (
//             <Center key={item} border="1px" pt="0.4rem" pb="0.4rem" fontWeight={'bold'} fontSize="0.9rem" bg="black" color="white" borderRadius="0.5rem"
//               cursor={'pointer'} _hover={{ bg: "white", color: "black" }} onClick={() => Brand(item)}>
//               {item}
//             </Center>
//           ))}
//         </Grid>
//       </Box>
//     </Box>
//   );

//   return (
//     <>
//       {m_loading === true ? <Loader /> :
//         <Box>
//           <Navbar />
//           <Box w={{ base: "100%", sd: "95%" }} m="auto">
//             {/* --- Drawer Button for Mobile (Only Show when width <=500px) --- */}
//             <Box display={{ base: "block", md: "none" }} textAlign="left" p="1rem">
//               <Button onClick={onOpen} colorScheme="teal">
//                 Sort & Filter
//               </Button>
//             </Box>

//             {/* Pagination Top */}
//             <Pagination />

//             <Flex justifyContent={{ base: "space-between", sm: "space-around", md: "space-around" }}>
//               {/* Left Side Filters */}
//               <Box
//                 w={{ base: "0px", md: "27%" }}
//                 pr="1.5rem"
//                 pl="1.5rem"
//                 bg="rgb(248,247,246)"
//                 display={{ base: "none", md: "block" }}
//               >
//                 <RenderSortFilter />
//               </Box>

//               {/* Right Side Cards */}
//               {data.length === 0 ? <NoProduct brand={brand} category={category} /> :
//                 <Grid w={{ base: "100%", sm: "100%", md: "70%" }} templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)", lg: "repeat(3,1fr)" }} gap="0.5rem">
//                   {data && data.map((el, i) => (
//                     <GridItem key={el._id} border="1px" bg="rgb(248,247,246)" borderColor="gray.200" pb="1rem">
//                       <Card img={el.Image} title={el.Title} des={el.Name} price={el.price} originalprice={el.Sprice} arr={el.arr} el={el} gender={"men"} i={i} />
//                     </GridItem>
//                   ))}
//                 </Grid>
//               }
//             </Flex>
//           </Box>

//           {/* Pagination Bottom */}
//           <Pagination />
//           <Footer />

//           {/* Drawer for Mobile */}
//           <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
//             <DrawerOverlay />
//             <DrawerContent>
//               <DrawerHeader>Sort & Filter</DrawerHeader>
//               <DrawerBody>
//                 <RenderSortFilter />
//               </DrawerBody>
//             </DrawerContent>
//           </Drawer>
//         </Box>
//       }
//     </>
//   )
// }

// export default Men;