import React from 'react'
import { Box,Flex, Image,Center } from '@chakra-ui/react'
import { woGetSuccess } from '../redux/women/action'
import { GetSuccess } from '../redux/men/action'
import {useDispatch,useSelector} from "react-redux"


const CartItem = ({img,title,name,price,Sprice,size,quantity,remove,id,el,addDataWishList,btn1,btn2,bg}) => {
   
     

      const dispatch=useDispatch()


// <----------------------update status on add or remove to wishlist-------------------------------------------->

      const updateStatusOnData=(el)=>{

        console.log(el)
          let updatedData = {...el,status:!el.status}
          delete updatedData._id
          console.log(el.status)
         fetch(`https://modesens1.onrender.com/${el.gender}/update/${el._id}`,{
             method:"PATCH",
             body:JSON.stringify(updatedData),
             headers:{
               "Content-Type":"application/json"
             }
         })
         .then((res)=>res.json())
         .then((res)=>{
           if(el.gender=="women"){ 
          
             dispatch(woGetSuccess(res.data))
           }else if(el.gender=="men"){
             dispatch(GetSuccess(res.data))
           }
           
           console.log("chang",res.data)
           
         })
         .catch((err)=>{
             console.log(err)
      
         })
 
     
    }





    const addAndDelete=(el,id)=>{
    //  updateStatusOnData(el)
      addDataWishList(el)
      remove(id)
     

   }

   const removeFromWishList=(el,id)=>{
     // updateStatusOnData(el)
      remove(id)
   
   }






  return (
      <>
    <Flex   w="100%"  borderBottom="1px" borderColor={'gray.300'} flexDirection={{base:"column",lg:"row"}} bg={bg}  >

     {/* <------------------- container's Image part----------------------> */}

       <Box w={{base:"100%",sm:"70%",md:"50%",lg:"25%"}} m="auto"  h="20rem" >
          <Image w="90%" h="90%" src={img}  />
        </Box>
 
     {/* <------------------- container's content part---------------------->  */}

      <Box w={{base:"100%",md:"80%",lg:"72%"}} m="auto"  h="100%" pb="1.5rem" >
         <Box ml="1rem" mt="0.5rem" textAlign={'start'}  fontSize="1.4rem" fontWeight="500" >
            {title}
         </Box>

         <Box ml="1rem"  mt="0.5rem" color="gray" textAlign={'start'} >
            {name}
         </Box>

         <Flex ml="1rem" mt="0.5rem"  textAlign={'start'} fontSize="1.1rem" fontWeight="500" >  
          <Center color="rgb(192,0,0)"  >${Sprice} (30% OFF) </Center> 
          <Center  > - ${price} </Center>    
         </Flex>

         <Box ml="1rem" mt="0.5rem"  textAlign={'start'} >
           Size:  {size}
         </Box>

         <Box ml="1rem" mt="0.5rem"  textAlign={'start'} >
           Quantity:  {quantity}
         </Box>

         <Box ml="1rem" mt="0.5rem"  textAlign={'start'} >
           Total Price:  {~~quantity*~~price}
         </Box>




         <Flex ml="1rem" flexDirection={{base:"column",lg:"row"}} mt="1rem"  gap="1rem"  w={{base:"90%",md:"70%",lg:"100%"}} >
          <Center border="1px" w={{base:"100%",md:"60%",lg:"40%"}} h="3rem" bg="white" color="black" fontSize="1rem"
             fontWeight="bold" cursor="pointer" onClick={()=>addAndDelete(el,id)}  >
              {btn1}
          </Center>

          <Center border="1px"  w={{base:"100%",md:"60%",lg:"40%"}} h="3rem" bg="black" color="white" fontSize="1rem"
             fontWeight="bold" cursor="pointer" onClick={()=>removeFromWishList(el,id)} >
             {btn2}
          </Center>
         </Flex>
          
      </Box>

   </Flex>
     
    
    
    
    
      </>
  )
}

export default CartItem