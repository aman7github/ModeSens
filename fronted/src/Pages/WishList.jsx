import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { wLoading,wSuccess,wError,wDelete } from '../redux/WishList/action'
import Navbar from '../components/Navbar'
import { Box, Flex,Grid, GridItem ,useToast,Image,Text} from '@chakra-ui/react'
import CartItem from '../components/CartItem'
import Footer from '../components/Footer'
import { cSuccess } from '../redux/Cart/action'
import Loader from '../components/Loader'
import Error from '../components/Error'


const WishList = () => {

  const dispatch = useDispatch()

  const {w_loading,w_error,WishListData,token,totalWishListItem,totalCartItem} = useSelector(store=>{
      return{
          w_loading:store.wishListReducer.loading,
          w_error:store.wishListReducer.error,
          WishListData:store.wishListReducer.WishListData,
          token:store.userReducer.token,
          totalCartItem:store.cartReducer.totalCartItem,
          totalWishListItem:store.wishListReducer.totalWishListItem
      }
  })
  


  React.useEffect(()=>{
    getWishListData()
   },[])


  const getWishListData=()=>{
   wLoading()
    fetch(`https://modesens1.onrender.com/wishlist/get`,{
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
    fetch(`https://modesens1.onrender.com/wishlist/delete/${id}`,{
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
    let addedData = {...el,status:!el.status}
    console.log("wi",el.status)
   fetch(`https://modesens1.onrender.com/cart/add`,{
       method:"POST",
       body:JSON.stringify(addedData),
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




 console.log(WishListData)



  return (
    <>
       {  w_loading==true? <Loader /> :   
      // <-----------------------------if loading false then this box will render------------------------------------------------------------>             
        <Box>
            <Navbar />
            
            <Box textAlign={'start'} bg="rgb(248,247,246)" p="0.5rem" fontSize={'1.3rem'} fontWeight={'500'} w="90%" m="auto"  mt="2rem"  >
                CHECK YOUR WISHLIST
            </Box>
        
              <Grid templateColumns={{base:"repeat(1,1fr)",sm:"repeat(2,1fr)",md:"repeat(2,1fr)",lg:"repeat(2,1fr)",}} w="90%" m="auto"  mt="3rem" gap="1rem" >

             {
                 WishListData.map((el,i)=>{

                    return <GridItem key={i}  border="1px" borderColor={'gray.300'}  >
                             <CartItem  img={el.Image} title={el.Title} name={el.Name} price={el.price} Sprice={el.Sprice} size={el.Size} 
                               quantity={el.Quantity} btn1={"ADD TO CART"} btn2={"REMOVE"} id={el._id} el={el} remove={remove} addDataWishList={addToCart}  />
                           </GridItem>
                }) 

             }
            
               
             </Grid>

            <Footer />
    
         </Box>
      }
    
    </>
  )
}

export default WishList