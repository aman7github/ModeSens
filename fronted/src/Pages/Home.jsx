import React from 'react'
import Navbar from '../components/Navbar'
import { Box, Text, useBreakpointValue } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import VideoText from '../components/VideoText'
import Brand from '../components/Brand'
import Carousel from '../components/Carousel'
import Category from '../components/Category'
import FavouriteCategory from '../components/FavouriteCategory'
import Footer from '../components/Footer'
import { cLoading, cError,cSuccess } from '../redux/Cart/action'
import { wSuccess,wError,wLoading } from '../redux/WishList/action'
import {useDispatch, useSelector} from "react-redux"
import imgg from '../images/modeImg1.png'
import secImg from '../images/modeImg2.png'
import category1 from '../images/category1.png'
import mod3 from '../images/mod3.png'
import mod2 from '../images/mod2.png'



const Home = () => {


  const arr = [ "https://rukminim1.flixcart.com/image/832/832/l59xq4w0/jacket/q/w/y/m-no-mens-rider-jacket-benkerz-original-imagfzkwbxcygyss.jpeg?q=70","https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/13258046/2021/3/19/20e5b79f-6335-4469-ab44-f145768c844a1616145596184-Sangria-Women-Tops-3751616145595467-1.jpg",
  "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19473744/2022/9/13/5b4fc687-b93b-4141-aeb6-1bd82db75e671663054576612-Antheaa-Women-Dresses-631663054576038-1.jpg","https://www.dutchhaven.com/wp-content/uploads/2020/09/amish-straw-hat-2.jpg",
  "https://images.hellomagazine.com/horizon/square/06459019ab5e-best-dad-sandals-t.jpg","https://manubhai.in/SocialMedia/post_artworks/TT-03-24Feb2023.jpg",
  "https://storage.sg.content-cdn.io/cdn-cgi/image/width=1000,height=1500,quality=75,format=auto/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/ProductImages/Source/ftwweonspo000078ss21beg-1.jpg","https://5.imimg.com/data5/DE/KR/MY-61376355/mens-cotton-formal-pant-1000x1000.jpg" ]
   
    const name=[
        "Jackets","Tops","Dress","Hats","Bags","Jewellery","Sandles","Pants"
    ]


    const dispatch = useDispatch()

    const {token,c_error,w_error} = useSelector(store=>{
        return{
            token:store.userReducer.token,
            c_error:store.cartReducer.error,
            w_error:store.wishListReducer.error
        }
    })

  
   
    // <--------------------------------get cart data to update in navbar ---------------------------------->
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
      })
      .catch((err)=>{
          console.log(err)
          dispatch(cError())
      })
 }


 // <--------------------------------get wishlist data to update in navbar ---------------------------------->

 
 const getWishListData=()=>{
     dispatch(wLoading())
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
       dispatch(wError())
   })
 }

 React.useState(()=>{
 if(token){
  getCartData()
  getWishListData()
 }
  
},[])

const imageSrc = useBreakpointValue({ base:mod3,sm:mod2, md: imgg });

  return (
    <>
    {/* { c_error==true || w_error==true ? <Error /> : */}
   {
    <Box>
      

    <Navbar />
  {/* <-------------------------first container------------------------------------> */}

    <Box w="95%" h="37rem" border="1px" m="auto" >
      <Box textAlign={'start'}> 
        <Text pos={'absolute'} mt="2rem" left={{base:"2rem",md:"3rem",lg:"5rem"}} color="white" fontSize={{base:"2.2rem",lg:"4.3rem"}} fontWeight="400"  zIndex={10} >
           CHECK MODESENS
        </Text>  
        <Text pos={'absolute'} mt={{base:"5rem",lg:"7rem"}} left={{base:"2rem",md:"3rem",lg:"5rem"}} color="white" fontSize={{base:"2.2rem",lg:"4.3rem"}}fontWeight="400"  zIndex={10} >
           BEFORE YOU BUY
        </Text>
        <Text pos={'absolute'} mt={{base:"10rem",lg:"14rem"}} left={{base:"2rem",md:"3rem",lg:"5rem"}} color="white" fontSize={{base:"1.5rem",lg:"2rem"}} fontWeight="350"  zIndex={10} >
           We're not a store
        </Text>
        <Text pos={'absolute'} mt={{base:"12rem",lg:"17rem"}} left={{base:"2rem",md:"3rem",lg:"5rem"}} color="white" fontSize={{base:"1.5rem",lg:"2rem"}} fontWeight="350"  zIndex={10} >
           We are your fashion shopping assitant.
        </Text>
      </Box> 
       {/* <Image src={imgg} w="100%" h="100%"   /> */}

  

  {/* Separate image with different width, position it as needed */}
         <Image src={imageSrc}     w='100%' h='100%'  />




       
    </Box>

        
    
    {/* <-------------------------second container------------------------------------> */} 

       <VideoText 
         t1="Check Modesens" t2="Before You Buy" t3="Want to score the best price-on anything-in "
         t4="seconds? Just paste a product link from any" t5="partner retailer into the search bar on our app "
         t6="or website." src={secImg}
       />   

    {/* <-------------------------brand container------------------------------------> */} 

       <Brand />


       <Carousel arr={arr} name={name} slide={4} scroll={2}  />


       <VideoText 
         t1="Compare 500+ Stores " t2="In One Place " t3="ModeSens allows you to compare prices and "
         t4="availability across hundreds of stores and" t5="thousands of brands."
         src={category1}
       /> 


      <Category />

      <FavouriteCategory />

      <Footer />
      </Box>
      
    }

    </>
  )
}

export default Home