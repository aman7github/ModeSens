import React, { useEffect, useRef, useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { woError, GetSuccess, woLoading, woSort, woTotalItem,woByCategory, woByBrand, woCurrentPage, PageQuery} from '../redux/women/action'
import {Box, Center,Grid,GridItem, Flex, Text,Image, useToast} from "@chakra-ui/react"
import Card from '../components/Card'
import Pagination from '../components/Pagination'
import Navbar from "../components/Navbar"
import Route from '../components/Route'
import Footer from "../components/Footer"
import { useSearchParams } from 'react-router-dom'
import {Link as RouteLink} from "react-router-dom"
import {Like, wSuccess} from "../redux/WishList/action"
import {AiOutlineHeart,AiFillHeart} from "react-icons/ai"
import Loader from '../components/Loader'
import Error from '../components/Error'
import NoProduct from '../components/NoProduct'
import { ByBrand, ByCategory, CurrentPage, Sort } from '../redux/men/action'
import {BsHeart} from "react-icons/bs"
import { PayableAmount, TotalDiscount, TotalPrice } from '../redux/Cart/action'



const Women = () => {

  const {wo_loading,wo_error,data,currentPage,sort,category,brand,pageQuery,like} = useSelector((store)=>{
    return{
        wo_loading:store.womenReducer.loading,
        wo_error:store.womenReducer.error,
        data:store.womenReducer.data,
        currentPage:store.womenReducer.currentPage,
        sort:store.womenReducer.sort,
        category:store.womenReducer.category,
        brand:store.womenReducer.brand,
        like:store.wishListReducer.like
    
    }
  })

 
  const dispatch=useDispatch()


   React.useEffect(()=>{

       getWomenData(currentPage,sort,category,brand)
   },[currentPage,sort,category,brand])


   // useEffect(()=>{
   //    setsearchParmas({page:currentPage,category:category,brand:brand,sort:sort})
   // },[currentPage,sort,category,brand])

  
   // const [searchParams,setsearchParmas] = useSearchParams()

   // const [pPage,setpPage] = useState(Number(searchParams.get("page")))



  
  
 

   const getWomenData=(currentPage,sort,category)=>{
        dispatch(woLoading())
        //https://modesens1.onrender.com/women/get
        fetch(`https://modesens1.onrender.com/women/get?sort=price&order=${sort}&page=${currentPage}&category=${category}&brand=${brand}`)
        .then((res)=>res.json())
        .then((res)=>{
            dispatch(GetSuccess(res.msg))
            dispatch(woTotalItem(res.totalItems)) 
        })
        .catch((err)=>{
            console.log(err)
            dispatch(woError())
        })
   }

    const Sortbyprice=(val)=>{
       dispatch(woSort(val))
    }

    const Category=(val)=>{
         dispatch(woByCategory(val))
    }

    const Brand=(val)=>{
       dispatch(woByBrand(val))
    }

  




  // <------------------------------------------wishlis heart sym-------------------------------->
       
       const ref2 = useRef([])
      //   const [p,setp] = useState(false)
       
      //   const hanldeclick=(i)=>{
      //    setp(prev=>!p)
      //    ref2.current[i].style.color=p?"black":"red"
      //    console.log( ref2.current[i])
       
        
      //  }

   // <------------------------------------add to wishlist----------------------------------------->

      //  const toastWishlist = useToast()

      // const handleclick=(el)=>{
      //    fetch(`https://modesens1.onrender.com/wishlist/add`,{
      //       method:"POST",
      //       body:JSON.stringify(el),
      //       headers:{
      //         "Content-Type":"application/json",
      //         "authorization":`${token}`
      //       }
      //   })
      //   .then((res)=>res.json())
      //   .then((res)=>{
      //     dispatch(TotalPrice())
      //     dispatch(TotalDiscount())
      //     dispatch(PayableAmount())
      //     dispatch(wSuccess(res.data))
        
      //       toastWishlist({
      //         title:res.msg,
      //         duration:3000,
      //         isClosable:true,
      //         position:"top"
      //       })
            
      //   })
      //   .catch((err)=>{
      //       console.log(err)
     
      //   })






      // }
     
   
  

  return (
  <>
    {   wo_loading==true? <Loader /> : wo_error==true? <Error />: 
      // <-----------------------------if loading false then this box will render------------------------------------------------------------>             
       <Box>  
         
          <Navbar />
           {/* <Route gender="women" color="rgb(248,247,246)" /> */}
        
           <Box w="95%" m="auto"  >
              
                  <Pagination />
              
            
                   <Flex  justifyContent={{base:"space-between",sm:"space-around",md:"space-around"}} >

                        <Box w={{base:"50%",sm:"40%",md:"27%",lg:"27%"}} bg="rgb(248,247,246)" pr="1.5rem" pl="1.5rem" >


                             <Box textAlign="start" >
                                 <Flex justifyContent={'space-between'} flexDirection={{base:"column", lg:"row" }} >
                                     <Text fontWeight={'medium'} fontSize="1.1rem" mt="0.5rem" >
                                        Sort By Price 
                                     </Text>
                                     <Center border="1px" mt="0.7rem" pl="1rem" pr="1rem" fontWeight={'bold'} fontSize="1rem"  borderRadius="0.5rem" 
                                      cursor={'pointer'} _hover={{bg:"black", color:"white"}} onClick={()=>Sortbyprice("undefined")} >
                                         Reset
                                     </Center>
                                  </Flex>

                                  <Flex  mt="0.7rem" justifyContent="space-between" flexDirection={{base:"column", lg:"row" }} >
                                     <Center border="1px" pl="1rem" pr="1rem" pt="0.4rem" pb="0.4rem" fontWeight={'bold'} fontSize="1rem" bg="black" color="white" borderRadius="0.5rem" 
                                      cursor={'pointer'} _hover={{bg:"white", color:"black"}} onClick={()=>Sortbyprice("asc")} >
                                         Low To High
                                     </Center>
                                     <Center border="1px"  pl="1rem" pr="1rem" pt="0.4rem" pb="0.4rem" fontSize="1rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
                                      cursor={'pointer'} _hover={{bg:"white", color:"black"}} onClick={()=>Sortbyprice("desc")} >
                                         High To Low
                                     </Center>
                                  </Flex>
                             </Box>

                             <Box textAlign="start" mt="2rem" >
                                 <Flex justifyContent={'space-between'} flexDirection={{base:"column", lg:"row" }} >
                                     <Text fontWeight={'medium'} fontSize="1.1rem" mt="0.5rem" >
                                        Filter By Category 
                                     </Text>
                                     <Center border="1px" mt="0.7rem" pl="1rem" pr="1rem" fontWeight={'bold'} fontSize="1rem"  borderRadius="0.5rem" 
                                      cursor={'pointer'} _hover={{bg:"black", color:"white"}} onClick={()=>Category("")} >
                                         Reset
                                     </Center>
                                  </Flex>

                                  <Grid mt="0.7rem"  templateColumns={{base:"repeat(1,1fr)", lg:"repeat(2,1fr)" }} gap="1rem"  >
                                     <Center border="1px" pt="0.4rem" pb="0.4rem"   fontWeight={'bold'} fontSize="1rem" bg="black" color="white" borderRadius="0.5rem" 
                                       cursor={'pointer'} _hover={{bg:"white", color:"black"}} onClick={()=>Category("bag")} >
                                         Bag
                                     </Center>
                                     <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="1rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
                                       cursor={'pointer'} _hover={{bg:"white", color:"black"}} onClick={()=>Category("dress")} >
                                         Dress
                                     </Center>
                                     <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="1rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
                                       cursor={'pointer'} _hover={{bg:"white", color:"black"}} onClick={()=>Category("hats")} >
                                         Hat
                                     </Center>
                                     <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="1rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
                                       cursor={'pointer'} _hover={{bg:"white", color:"black"}} onClick={()=>Category("short")} >
                                         Short
                                     </Center>
                                     <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="1rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
                                       cursor={'pointer'} _hover={{bg:"white", color:"black"}} onClick={()=>Category("pant")} >
                                         Pant
                                     </Center>
                                     <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="1rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
                                       cursor={'pointer'} _hover={{bg:"white", color:"black"}} onClick={()=>Category("boot")} >
                                         Shoe
                                     </Center>
                                  </Grid>
                             </Box>



                             <Box textAlign="start" mt="2rem" >
                                  <Flex justifyContent={'space-between'} flexDirection={{base:"column", lg:"row" }} >
                                     <Text fontWeight={'medium'} fontSize="1.1rem" mt="0.5rem" >
                                        Filter By Top Brands 
                                     </Text>
                                     <Center border="1px" mt="0.7rem" pl="1rem" pr="1rem" fontWeight={'bold'} fontSize="1rem"  borderRadius="0.5rem" 
                                      cursor={'pointer'} _hover={{bg:"black", color:"white"}} onClick={()=>Brand("")} >
                                         Reset
                                     </Center>
                                  </Flex>

                                  <Grid mt="0.4rem"  templateColumns={{base:"repeat(1,1fr)", lg:"repeat(2,1fr)" }} gap="1rem"  >
                                     <Center border="1px" pt="0.4rem" pb="0.4rem"   fontWeight={'bold'} fontSize="0.9rem" bg="black" color="white" borderRadius="0.5rem" 
                                      cursor={'pointer'}  onClick={()=>Brand("ZIMMERMANN")} _hover={{bg:"white", color:"black"}} >
                                        ZIMMERMANN
                                     </Center>
                                     <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="0.9rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
                                      cursor={'pointer'}  onClick={()=>Brand("ISABEL MARANT")} _hover={{bg:"white", color:"black"}} >
                                        ISABEL MARANT
                                     </Center>
                                     <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="0.9rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
                                      cursor={'pointer'}  onClick={()=>Brand("JACQUEMUS")} _hover={{bg:"white", color:"black"}} >
                                       JACQUEMUS
                                     </Center>
                                     <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="0.9rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
                                      cursor={'pointer'}  onClick={()=>Brand("VERSACE")} _hover={{bg:"white", color:"black"}} >
                                       VERSACE
                                     </Center>
                                     <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="0.9rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
                                      cursor={'pointer'}  onClick={()=>Brand("BALENCIAGA")} _hover={{bg:"white", color:"black"}} >
                                       BALENCIAGA
                                     </Center>
                                     <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="0.9rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
                                      cursor={'pointer'}  onClick={()=>Brand("KHAITE")} _hover={{bg:"white", color:"black"}} >
                                       KHAITE
                                     </Center>
                                     <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="0.9rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
                                      cursor={'pointer'}  onClick={()=>Brand("DOLCE & GABBANA")} _hover={{bg:"white", color:"black"}} >
                                      DOLCE & GABBANA
                                     </Center>
                                     <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="0.9rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
                                      cursor={'pointer'}  onClick={()=>Brand("MAX MARA")} _hover={{bg:"white", color:"black"}} >
                                        MAX MARA
                                     </Center>
                                  </Grid>
                             </Box>
                         
                     
                        </Box> 
                        
{/* <----------------------------------Right side -----------------------------------------> */}
                     {  data.length===0 ? <NoProduct brand={brand} category={category} /> :
                        <Grid w={{base:"50%",sm:"50%",md:"60%",lg:"72%"}}  templateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}} gap="0.5rem" >
                             {
                                data.map((el,i)=>{
                                     return <GridItem key={i}  border="1px"  borderColor="gray.200" pb="1rem"  bg="rgb(248,247,246)" >

                                              {/* <Center   pos="absolute" ml="-0.3rem" fontSize="1.8rem" color={'red'} ref={ele=>{ref2.current[i]=ele}} onClick={()=>handleclick(el)}  >
                                                 <BsHeart  cursor={'pointer'}      />
                                               </Center> */}

                                               <RouteLink to={`/women/${el._id}`} >
                                                      <Card   img={el.Image} title={el.Title} des={el.Name} price={el.price} originalprice={el.Sprice} 
                                                        arr={el.arr}   />
                                                </RouteLink>  

                                            </GridItem>
                                           
                                })
                             }	
                        </Grid>
                     }

                   </Flex>



         </Box>

         <Pagination />

         <Footer />

       </Box>


    }
  </>     
  )
}

export default Women