import { Center,Image, VStack,Flex, Box } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineHeart} from "react-icons/ai"
import {useDispatch,useSelector} from "react-redux"




const Card = ({img,title ,des,price,originalprice,arr,handleclick}) => {

  const {like} = useSelector((store)=>{
    return{
        like:store.wishListReducer.like
    }
  })
  
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
  


  return (
    <>
            
               <Box w="100%" h="100%" onClick={invoke}  >
       
                  <Image src={img} w="80%" m="auto" h="60%" ref={ref} onMouseOver={()=>myfun(arr)} onMouseOut={()=>leave(img)}  />
                  <Center fontSize="1.3rem" fontWeight="500"  >{title}</Center>
                  <Center color="gray" mt="0.5rem" paddingLeft={3} paddingRight={3} >{des}</Center>
                  <Center mt="0.7rem" >  
                    <Center color="rgb(192,0,0)"  >${price} (30% OFF) </Center> 
                    <Center  > - ${originalprice} </Center>    
                 </Center>
                 </Box>


    </>
  )
}





export default Card

