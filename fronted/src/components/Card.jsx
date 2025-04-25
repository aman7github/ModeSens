import { Center,Image, VStack,Flex, Box, useToast } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import {FaHeart} from "react-icons/fa"
import {useDispatch,useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'
import {AiOutlineHeart} from "react-icons/ai"
import { woGetSuccess, woStatus } from '../redux/women/action'
import { wSuccess } from '../redux/WishList/action'
import {FcLike} from "react-icons/fc"
import { GetSuccess } from '../redux/men/action'
import { PayableAmount, TotalDiscount, TotalPrice } from '../redux/Cart/action'




const Card = ({img,title ,des,price,originalprice,arr,el,gender,i}) => {

  const {like,data,token} = useSelector((store)=>{
    return{
        like:store.wishListReducer.like,
        data:store.womenReducer.data,
        token:store.userReducer.token,
    }
  })
  const dispatch=useDispatch()





 
  
  // <----------------------------------for changing image in card--------------------------------->

  let ref = React.useRef()

  let id;

 const myfun=(pic)=>{
      let i = 0
       ref.current.src=pic[0]
          id = setInterval(()=>{
          if(i==pic.length){
           i=0
          }
           ref.current.src=pic[i]
           i++
         
        },700)
        } 
    

 const leave=()=>{
  clearInterval(id)
   ref.current.src=img
 }
 
   const invoke=()=>{
    clearInterval(id)
    ref.current.src=img
   }

  //  <--------------------navigate to single product page----------------------------->

   const navigate = useNavigate()
     
   const go=(el,gender)=>{
       navigate(`/${gender}/${el._id}`)
   }
   const all=(el)=>{
        invoke()
        go(el,gender)
        
   }
   const updateStatusOnData=(el,gender)=>{
        console.log(el.status)
         let updatedData = {...el,status:!el.status}     
          delete updatedData._id
        fetch(`https://modesens1.onrender.com/${gender}/update/${el._id}`,{
            method:"PATCH",
            body:JSON.stringify(updatedData),
            headers:{
              "Content-Type":"application/json"
            }
        })
        .then((res)=>res.json())
        .then((res)=>{
          if(gender=="women"){
         
            dispatch(woGetSuccess(res.data))
          }else if(gender=="men"){
    
            dispatch(GetSuccess(res.data))
          }
          
          console.log(res.data)
          
        })
        .catch((err)=>{
            console.log(err)
     
        })
   }



   // <----------------------------------------------add item to wishlist------------------------------->

   const toastWishlist = useToast()

   const addDataWishList=(el)=>{
        el.Quantity = 1
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



 //   <------------------------------delete item from wishlist-------------------------->


 const remove=(el)=>{   
  fetch(`https://modesens1.onrender.com/wishlist/delete/${el._id}`,{
      method:"DELETE",
      headers:{
          "Content-Type":"application/json",
          "authorization":`${token}`
        }
  })
  .then((res)=>res.json())
  .then((res)=>{
    dispatch(wSuccess(res.data))
    toastWishlist({
      title:"Item Deleted From WishList",
      duration:3000,
      isClosable:true,
      position:"top"
    })
  })
  .catch((err)=>{
      console.log(err)
  })
 }
   

    
      
  const toggleAndPost=(i,el,gender)=>{
    if(token!==""){
      if(el.status===false){  
        updateStatusOnData(el,gender)
        addDataWishList(el)
      }else{
        updateStatusOnData(el,gender)
        remove(el)

      }
  }else{
    toastWishlist({
      title:"Please First Login To Add In WishList",
      duration:3000,
      isClosable:true,
      position:"top"
    })
  }
}
   



  return (
    <>
            
               <Flex flexDirection={'column'} w="100%"   h="100%"   >

                 <Center   pos="absolute" ml="0rem" fontSize="2rem" cursor={'pointer'}  >
                   {

                    token!==""? el.status===true? <FcLike fontSize="1.9rem" onClick={()=>toggleAndPost(i,el,gender)}  /> :
                        <AiOutlineHeart  cursor={'pointer'} onClick={()=>toggleAndPost(i,el,gender)}     />
                     : <AiOutlineHeart  cursor={'pointer'} onClick={()=>toggleAndPost(i,el,gender)}     />

                  }
                 </Center>
                  
                  <Box onClick={()=>all(el,gender)} >
                  <Image src={img} w={{base:"100%",sm:"80%",md:"90%",lg:"70%"}} m="auto" h="18rem" ref={ref} onMouseOver={()=>myfun(arr)} onMouseOut={()=>leave(img)}  />
                  <Center fontSize={{base:"0.7rem",sm:"1.1rem",md:"1.3rem"}} fontWeight="500"  >{title}</Center>
                  <Center color="gray" mt="0.5rem" paddingLeft={3} paddingRight={3} fontSize={{base:"0.7rem",sm:"1rem"}} >{des}</Center>
                  <Flex mt="0.7rem" flexDirection={{base:"column",sm:"row"}} m="auto" justifyContent={'center'} fontSize={{base:"0.9rem",sm:"1rem"}} >  
                    <Center color="rgb(192,0,0)"  >${price} (30% OFF)  </Center> 
                    <Center  > - ${originalprice} </Center>    
                 </Flex>
                 </Box>

                 </Flex>


    </>
  )
}





export default Card


