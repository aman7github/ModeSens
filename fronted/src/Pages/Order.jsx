import React from 'react'
import {useDispatch, useSelector} from "react-redux"

import { Box ,Button,Flex, Image} from '@chakra-ui/react'
import { getOrder } from '../redux/Address/action'
import Navbar from '../components/Navbar'

const Order = () => {

  const dispatch = useDispatch()

  const {token} = useSelector(store=>{
      return{
          address:store.addressReducer.address, 
          token:store.addressReducer.token,
          order:store.addressReducer.order
      
        
      }
  })
   
  React.useEffect(()=>{
   getOrderData()
  },[])
   const [or,setor]= React.useState([])

  const getOrderData=()=>{
   
    fetch(`https://modesens1.onrender.com/order/get`,{
      headers:{
        "Content-Type":"application/json",
        "authorization":`${token}`
      }
    })
    .then((res)=>res.json())
    .then((res)=>{
      console.log(res.msg)
       
      dispatch(getOrder(res.msg))
      setor(res.msg)
    })
    .catch((err)=>{
        console.log(err)
       
    })
}
 
   console.log("o",or)
 
 

  //  <-------------------------------posting order----------------------------------------->


  return (

    <>       

                 <Navbar />
                 
            <Box w="80%" m="auto"  pb="4rem" >

             

              <Box w="100%" textAlign={'start'} mt="2rem" fontSize={'2.3rem'} fontWeight={'500'} >
                 Your Orders
              </Box>
              {

              or.map((el)=>{

                           return <Box w="100%" textAlign={'start'} fontSize={'1rem'} mt="2rem" border="1px" borderTopRadius={"1rem"} borderColor={'gray'}  >
                            <Flex p="0.5rem" pl="1rem" borderTopRadius={"1rem"} justifyContent={'start'} gap={{base:"1rem",md:"2rem"}}  border="1px" bg="gray" color="white" fontWeight={'500'} >
                                <Box  >
                                   ORDER PLACED
                                   <Box>{el.Date?el.Date:""}</Box>
                                 </Box>
         
                                 <Box   >
                                   TOTAL
                                   <Box>{el.price?el.price:""}</Box>
                                 </Box>
         
                                 <Box   >
                                   SHIP TO
                                   <Box> {el.Address.name?el.Address.name:""} </Box>
                                 </Box>
                               
                            </Flex>
         
         
         
                            <Flex pr="1rem" pl="1rem"  flexDirection={{base:"column",md:"row"}} >
                               <Box  w={{base:"40%",md:"18%"}} h="12rem" m="auto" >
                                  <Image src={el.Image?el.Image:""} w="100%" h="100%"  />
                               </Box>
         
                               <Box pr="1rem" pl="1rem" mt="0.5rem"  w="80%" m={{base:"auto",md:"0rem"}} >
                                   <Box fontSize={'1.5rem'} fontWeight={'bold'} >Delivered</Box>
                                   <Box fontSize={'1.2rem'} fontWeight={'500'} >{el.Title?el.Title:""} </Box>
                                   <Box fontSize={'1.2rem'} fontWeight={'500'} >{el.Name?el.Name:""}</Box>
                                   <Box fontSize={'1.2rem'} fontWeight={'500'} > You can return product within 7days </Box>
                                   <Flex  m="1rem" flexDirection={{base:"column",md:"row"}} gap="1rem" >
                                       <Button  bg="gray" color="white" >RETURN</Button>
                                       <Button bg="gray" color="white"  >BUY AGAIN</Button>
                                   </Flex>
                               </Box>
                             
                            </Flex>
         
                       </Box>

                   









                 })



              }

            

            </Box>

            </>
  )
}

export default Order