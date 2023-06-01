import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import { Error, GetSuccess, Loading, Sort, TotalItem,ByCategory, ByBrand } from '../redux/men/action'
import {Box, Center,Grid,GridItem, Flex, Text} from "@chakra-ui/react"
import Card from '../components/Card'
import Pagination from '../components/Pagination'
import Navbar from "../components/Navbar"
import Route from '../components/Route'
import Footer from "../components/Footer"
import {Link as RouteLink} from "react-router-dom"
import {AiOutlineHeart} from "react-icons/ai"




  const Men=()=>{

  const {loading,error,data,currentPage,sort,category,brand,like} = useSelector((store)=>{
    return{
        loading:store.menReducer.loading,
        error:store.menReducer.error,
        data:store.menReducer.data,
        currentPage:store.menReducer.currentPage,
        sort:store.menReducer.sort,
        category:store.menReducer.category,
        brand:store.menReducer.brand,
        like:store.wishListReducer.like
    
    }
  })

 
  const dispatch=useDispatch()


   React.useEffect(()=>{
       getWomenData(currentPage,sort,category,brand)
  
   },[currentPage,sort,category,brand])
  
 

   const getWomenData=(currentPage,sort,category)=>{
        Loading()
        
        fetch(`https://long-lime-crab-garb.cyclic.app/men/get?sort=price&order=${sort}&page=${currentPage}&category=${category}&brand=${brand}`)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res)
            dispatch(GetSuccess(res.msg))
            dispatch(TotalItem(res.totalItems)) 
        })
        .catch((err)=>{
            console.log(err)
            Error()
        })
   }

    const Sortbyprice=(val)=>{
       dispatch(Sort(val))
    }

    const Category=(val)=>{
         dispatch(ByCategory(val))
    }

    const Brand=(val)=>{
       dispatch(ByBrand(val))
    }

  




  // <------------------------------------------wishlis heart sym-------------------------------->
        const ref= React.useRef([])

       const hanldeclick=(i)=>{
         console.log(ref.current[i])
       }
     
   
    console.log(data)

  return (
    <Box>  
         
          <Navbar />
           <Route gender="women" color="rgb(248,247,246)" />
        
           <Box w="95%" m="auto"  >
              
                  <Pagination />
              
            
                   <Flex  justifyContent={'space-between'} >

                        <Box w={{md:"30%",lg:"27%"}} bg="rgb(248,247,246)" pr="1.5rem" pl="1.5rem" >


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
                                         Bags
                                     </Center>
                                     <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="1rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
                                       cursor={'pointer'} _hover={{bg:"white", color:"black"}} onClick={()=>Category("Casual Shirts")} >
                                        Shirts
                                     </Center>
                                     <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="1rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
                                       cursor={'pointer'} _hover={{bg:"white", color:"black"}} onClick={()=>Category("wallet")} >
                                         Wallets
                                     </Center>
                                     <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="1rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
                                       cursor={'pointer'} _hover={{bg:"white", color:"black"}} onClick={()=>Category("Jeans")} >
                                        Jeans
                                     </Center>
                                     <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="1rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
                                       cursor={'pointer'} _hover={{bg:"white", color:"black"}} onClick={()=>Category("Tshirt")} >
                                         T-shirt
                                     </Center>
                                     <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="1rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
                                       cursor={'pointer'} _hover={{bg:"white", color:"black"}} onClick={()=>Category("shoe")} >
                                         Shoes
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
                                      cursor={'pointer'}  onClick={()=>Brand("PUMA")} _hover={{bg:"white", color:"black"}} >
                                        PUMA
                                     </Center>
                                     <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="0.9rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
                                      cursor={'pointer'}  onClick={()=>Brand("BOSSINI")} _hover={{bg:"white", color:"black"}} >
                                        BOSSINI
                                     </Center>
                                     <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="0.9rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
                                      cursor={'FAME'}  onClick={()=>Brand("FAME")} _hover={{bg:"white", color:"black"}} >
                                       FAME
                                     </Center>
                                     <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="0.9rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
                                      cursor={'pointer'}  onClick={()=>Brand("TOMMY HILFIGER")} _hover={{bg:"white", color:"black"}} >
                                       TOMMY HILFIGER
                                     </Center>
                                     <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="0.9rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
                                      cursor={'pointer'}  onClick={()=>Brand("Skyper")} _hover={{bg:"white", color:"black"}} >
                                       Skyper
                                     </Center>
                                     <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="0.9rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
                                      cursor={'pointer'}  onClick={()=>Brand("DIESEL")} _hover={{bg:"white", color:"black"}} >
                                       DIESEL
                                     </Center>
                                     <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="0.9rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
                                      cursor={'pointer'}  onClick={()=>Brand("FOSSIL")} _hover={{bg:"white", color:"black"}} >
                                      FOSSIL
                                     </Center>
                                     <Center border="1px"   pt="0.4rem" pb="0.4rem" fontSize="0.9rem" fontWeight={'bold'} bg="black" color="white" borderRadius="0.5rem" 
                                      cursor={'pointer'}  onClick={()=>Brand("KAPPA")} _hover={{bg:"white", color:"black"}} >
                                        KAPPA
                                     </Center>
                                  </Grid>
                             </Box>
                         
                     
                        </Box> 
                        
{/* <----------------------------------Right side -----------------------------------------> */}

                        <Grid w={{md:"65%",lg:"72%"}} bg="rgb(248,247,246)" templateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}} >
                             { data &&
                               data.map((el,i)=>{
                                     return <GridItem key={el._id} border="1px" h="30rem" p={3} borderColor="gray.200" >

                                              <Center   pos="absolute" ml="-0.5rem" fontSize="2rem"  >
                                                  <AiOutlineHeart ref={ele=>{ref.current[i]=ele}}  onClick={()=>hanldeclick(i)}  />
                                               </Center>

                                               <RouteLink to={`/men/${el._id}`} >
                                                      <Card img={el.Image} title={el.Title} des={el.Name} price={el.price} originalprice={el.Sprice} 
                                                        arr={el.arr}   />
                                                </RouteLink>  

                                            </GridItem>
                                           
                                })
                             }	
                        </Grid>

                   </Flex>



         </Box>

         <Pagination />

         <Footer />

    </Box>
  )
}


export default Men