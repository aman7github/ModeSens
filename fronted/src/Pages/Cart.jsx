import { Box,Flex, Image,Center,useToast, Input, Button,Divider,Text } from '@chakra-ui/react'
import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import Navbar from '../components/Navbar'
import CartItem from '../components/CartItem'
import {cLoading,cSuccess,cError,Pincode,TotalPrice,TotalDiscount,PayableAmount,ApplyCoupon, PostCart, cDelete} from "../redux/Cart/action"
import {wLoading,wSuccess,wError} from "../redux/WishList/action"

import Footer from "../components/Footer"
import {Link as RouterLink} from "react-router-dom"
import { DirectBuy } from '../redux/SingleProduct/action'
import Loader from '../components/Loader'

const Cart = () => {

    const [val,setval] = React.useState("")
    // const [coupon,setCoupon] = React.useState("")

    const dispatch = useDispatch()

    const {c_loading,c_error,data,pincode,payableAmount,discount,totalPrice,token,directBuyData,totalCartItem} = useSelector(store=>{
        return{
            c_loading:store.cartReducer.loading,
            c_error:store.cartReducer.error,
            data:store.cartReducer.data,
            pincode:store.cartReducer.pincode,
            totalPrice:store.cartReducer.totalPrice,
            discount:store.cartReducer.discount,
            payableAmount:store.cartReducer.payableAmount,
            token:store.userReducer.token,
            directBuyData:store.singlePageReducer.directBuyData,
            totalCartItem:store.cartReducer.totalCartItem,
           
        }
    })
        
    
  
    React.useEffect(()=>{
      
        getCartData()     
    },[])

    
    const getCartData=()=>{
        dispatch(cLoading())
        fetch(`https://modesens1.onrender.com/cart/get`,{
          headers:{
            "Content-Type":"application/json",
            "authorization":`${token}`
          }
        })
        .then((res)=>res.json())
        .then((res)=>{
            dispatch(cSuccess(res.msg))
            dispatch(TotalPrice())
            dispatch(TotalDiscount())
            dispatch(PayableAmount())

        })
        .catch((err)=>{
            console.log(err)
            dispatch(cError())
        })
   }
   
// <----------------------------------------------add item to wishlist------------------------------->

   const toastWishlist = useToast()

   const addDataWishList=(el)=>{
    let addedData = {...el,status:!el.status}
    fetch(`https://modesens1.onrender.com/wishlist/add`,{
        method:"POST",
        body:JSON.stringify(el),
        headers:{
          "Content-Type":"application/json",
          "authorization":`${token}`
        }
    })
    .then((res)=>res.json())
    .then((res)=>{
      dispatch(TotalPrice())
      dispatch(TotalDiscount())
      dispatch(PayableAmount())
      dispatch(wSuccess(res.data))
    
        toastWishlist({
          title:res.msg,
          duration:3000,
          isClosable:true,
          position:"top"
        })
        
    })
    .catch((err)=>{
        console.log(err)
 
    })
   }
  
//   <------------------------------delete item from cart-------------------------->


   const remove=(id)=>{
   
    fetch(`https://modesens1.onrender.com/cart/delete/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
            "authorization":`${token}`
        }
    })
    .then((res)=>res.json())
    .then((res)=>{
        dispatch(cDelete(res.data))
        dispatch(TotalPrice())
        dispatch(TotalDiscount())
        dispatch(PayableAmount())
        dispatch(cSuccess(res.data))
        console.log(res.data)
        //console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
   }

//   <-------------------------------------------pincode------------------------------------->

     const savePincode=()=>{
        dispatch(Pincode(val))
        setval("")
     }

     //   <-------------------------------------------Apply coupon------------------------------------->
         
      // const getCoupon=()=>{
      //    if(coupon=="Modesens20"){
      //     dispatch(ApplyCoupon())
      //    }
      //    setCoupon("")
      // }
      
      // <---------------------if you navigate from cart to shipping to singleproduct data should be []---------->
          
           const setDataForShipping=()=>{
            dispatch(DirectBuy([]))
           }

    console.log(data)

   
   
  return (
    <>  
    {  c_loading==true? <Loader /> :   
      // <-----------------------------if loading false then this box will render------------------------------------------------------------>             

      
       <Box>

        <Navbar />

        <Box textAlign={'start'} bg="rgb(248,247,246)" p="0.5rem" fontSize={'1.3rem'} fontWeight={'500'} w="95%" m="auto"  mt="2rem"  >
                CHECK YOUR CART
            </Box>
        {/* // <-----------------------------Cart box------------------------------------------------------------>              */}

        <Box w="95%" m="auto" mt="3rem"   >
     
        <Flex flexDirection={{base:"column",lg:"row"}} m="auto" justifyContent={'space-between'}   >
           
            <Box w={{base:"100%",md:"90%",lg:"65%"}} m="auto" borderColor={'green'} >

                {
                    data.map((el,i)=>{
                       return <CartItem key={i} img={el.Image} title={el.Title} name={el.Name} price={el.price} Sprice={el.Sprice} size={el.Size} 
                                quantity={el.Quantity}  id={el._id} el={el} btn1={"ADD TO WISHLIST"} btn2={"REMOVE FROM CART"} remove={remove} addDataWishList={addDataWishList} />
                   })
                } 
               
                  
            </Box>

{/* <------------------------------right  side container--------------------------------->  */}
           
            <Box w={{base:"100%",md:"90%",lg:"35%"}} borderLeft="1px" borderColor="gray.300" pl="1rem"  >

               <Flex  justifyContent={'space-between'} >  
                  <Input w="70%" type="text" placeholder='Enter Your PinCode' value={val} onChange={(e)=>setval(e.target.value)} />
                  <Button w="25%" bg="black" color="white" fontSize="1.1rem" onClick={savePincode} _hover={{bg:"white",color:"black",border:"1px"}} >Check</Button>
               </Flex>
                  
       

                <Flex mt="1rem" justifyContent={'space-between'} > 
                   <Box textAlign={'start'} fontSize="1.1rem" fontWeight="500" >
                     Deliver to 
                   </Box>
                   <Box textAlign={'start'} fontSize="1.1rem" fontWeight="500" >
                      {pincode}
                   </Box>
                </Flex>
                

                <Flex mt="1rem" justifyContent={'space-between'} > 
                   <Box textAlign={'start'} fontSize="1.1rem" fontWeight="500" >
                     Total Item 
                   </Box>
                   <Box textAlign={'start'} fontSize="1.1rem" fontWeight="500" >
                     {totalCartItem}
                   </Box>
                </Flex>

                <Flex mt="1rem" justifyContent={'space-between'} > 
                   <Box textAlign={'start'} fontSize="1.1rem" fontWeight="500" >
                     Total Price 
                   </Box>
                   <Box textAlign={'start'} fontSize="1.1rem" fontWeight="500" >
                     ₹{totalPrice}
                   </Box>
                </Flex>

                <Flex mt="1rem" justifyContent={'space-between'} > 
                   <Box textAlign={'start'} fontSize="1.1rem" fontWeight="500" >
                     Discount
                   </Box>
                   <Box textAlign={'start'} fontSize="1.1rem" fontWeight="500" >
                      ₹{discount}
                   </Box>
                </Flex>

                <Divider mt="1rem" color="gray.300" orientation='horizontal' />

                <Flex mt="1rem" justifyContent={'space-between'} > 
                   <Box textAlign={'start'} fontSize="1.1rem" fontWeight="500" >
                     Payable Amount 
                   </Box>
                   <Box textAlign={'start'} fontSize="1.1rem" color="rgb(192,0,0)" fontWeight="500" >
                     ₹{payableAmount}
                   </Box>
                </Flex>
                
                <RouterLink to="/shipping" >
                 <Button mt="3rem"  w="100%" bg="black" h="3rem" color="white" fontSize="1.1rem"_hover={{bg:"black",color:"white",border:"1px"}} onClick={setDataForShipping} >
                   Proceed To Pay
                 </Button>
                </RouterLink>

              
              
            </Box>

        </Flex>
  
        </Box>
       
        {/* // <-----------------------------footer------------------------------------------------------------>              */}
        <Footer />

      </Box> 
    }
    </>
  )
}

export default Cart