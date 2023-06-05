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
            
               <Flex flexDirection={'column'} w="100%"  onClick={invoke} h="100%"   >
                  <Image src={img} w={{base:"100%",sm:"80%",md:"90%",lg:"70%"}} m="auto" h="18rem" ref={ref} onMouseOver={()=>myfun(arr)} onMouseOut={()=>leave(img)}  />
                  <Center fontSize={{base:"0.7rem",sm:"1.1rem",md:"1.3rem"}} fontWeight="500"  >{title}</Center>
                  <Center color="gray" mt="0.5rem" paddingLeft={3} paddingRight={3} fontSize={{base:"0.7rem",sm:"1rem"}} >{des}</Center>
                  <Flex mt="0.7rem" flexDirection={{base:"column",sm:"row"}} m="auto" fontSize={{base:"0.9rem",sm:"1rem"}} >  
                    <Center color="rgb(192,0,0)"  >${price} (30% OFF)  </Center> 
                    <Center  > - ${originalprice} </Center>    
                 </Flex>
                 </Flex>


    </>
  )
}





export default Card

