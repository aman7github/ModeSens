import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { wLoading,wSuccess,wError,wDelete } from '../redux/WishList/action'
import Navbar from '../components/Navbar'
import { Box, Flex,Grid, GridItem ,useToast} from '@chakra-ui/react'
import CartItem from '../components/CartItem'
import Footer from '../components/Footer'
import { cSuccess } from '../redux/Cart/action'


const WishList = () => {

  const dispatch = useDispatch()

  const {loading,error,WishListData,token} = useSelector(store=>{
      return{
          loading:store.wishListReducer.loading,
          error:store.wishListReducer.error,
          WishListData:store.wishListReducer.WishListData,
          token:store.userReducer.token
      }
  })
  


  React.useEffect(()=>{
    getWishListData()
   },[])


  const getWishListData=()=>{
   wLoading()
    fetch(`https://long-lime-crab-garb.cyclic.app/wishlist/get`,{
      headers:{
        "Content-Type":"application/json",
        "authorization":`${token}`
      }
    })
    .then((res)=>res.json())
    .then((res)=>{
        dispatch(wSuccess(res.msg))
    })
    .catch((err)=>{
        console.log(err)
       wError()
    })
  }

  //   <------------------------------delete item from cart-------------------------->


  const remove=(id)=>{   
    fetch(`https://long-lime-crab-garb.cyclic.app/wishlist/delete/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
            "authorization":`${token}`
          }
    })
    .then((res)=>res.json())
    .then((res)=>{
      console.log(res)
      dispatch(wSuccess(res.data))
    })
    .catch((err)=>{
        console.log(err)
    })
   }

  // <-----------------------------------------Add to Cart------------------------------------>
  const toast = useToast()
  const addToCart=(el)=>{
  
   fetch(`https://long-lime-crab-garb.cyclic.app/cart/add`,{
       method:"POST",
       body:JSON.stringify(el),
       headers:{
         "Content-Type":"application/json",
         "authorization":`${token}`
       }
   })
   .then((res)=>res.json())
   .then((res)=>{
    dispatch(cSuccess(res.data))
       console.log(res)
       toast({
         title:res.msg,
         duration:5000,
         isClosable:true,
         position:"top"
       })
       
   })
   .catch((err)=>{
       console.log(err)

   })
  }






  console.log("t",token)





  return (
    <>
            <Navbar />
            
            <Box textAlign={'start'} bg="rgb(248,247,246)" p="0.5rem" fontSize={'1.4rem'} fontWeight={'500'} w="90%" m="auto"  mt="2rem"  >
                CHECK YOUR WISHLIST
            </Box>
        
              <Grid templateColumns={{base:"repeat(1,1fr)",sm:"repeat(2,1fr)",md:"repeat(2,1fr)",lg:"repeat(2,1fr)",}} w="90%" m="auto"  mt="2rem" gap="1rem" >

             {
                WishListData && WishListData.map((el,i)=>{

                    return <GridItem key={i}  border="1px" borderColor={'gray.300'}  >
                             <CartItem  img={el.Image} title={el.Title} name={el.Name} price={el.price} Sprice={el.Sprice} size={el.Size} 
                               quantity={el.Quantity} btn1={"ADD TO CART"} btn2={"REMOVE"} id={el._id} data={el} remove={remove} addDataWishList={addToCart}  />
                           </GridItem>
                })

             }
            
               
         </Grid>


         <Footer />
    
    
    
    
    
    
    </>
  )
}

export default WishList