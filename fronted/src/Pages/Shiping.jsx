import React from 'react'
import Navbar from "../components/Navbar"
import { Box, Flex,Text, Input,Button,RadioGroup,Stack,Divider,Radio,FormControl,Switch,VStack, Center } from '@chakra-ui/react'
import {useDispatch, useSelector} from "react-redux"
import { Address } from '../redux/Address/action'
import AddressBlock from '../components/AddressBlock'
import {Link as RouterLink, useParams} from "react-router-dom"
import { useLocation } from 'react-router-dom'
import { DirectBuy, SingleDiscount } from '../redux/SingleProduct/action'
import { ApplyCoupon } from '../redux/Cart/action'

const Shiping = () => {
 
  const dispatch = useDispatch()

  const {token,data,totalPrice,discount,payableAmount,directBuyData,singleShippingPrice,address} = useSelector(store=>{
      return{
          address:store.addressReducer.address, 
          token:store.addressReducer.token,
          // pincode:store.cartReducer.pincode,
          totalPrice:store.cartReducer.totalPrice,
          discount:store.cartReducer.discount,
          payableAmount:store.cartReducer.payableAmount,
          data:store.cartReducer.data,
          directBuyData:store.singlePageReducer.directBuyData,
          singleShippingPrice:store.singlePageReducer.singleShippingPrice,
          address:store.addressReducer.address
      }
  })
  
    React.useEffect(()=>{
     // getAddress()
    },[])

    // <-----------------------------set coupon--------------------------------------->
    const [coupon,setCoupon] = React.useState("")
    const getCoupon=()=>{
      if(directBuyData.length!=0){
        if(coupon=="Modesens20"){
          dispatch(SingleDiscount())
        }
      }else{
      if(coupon=="Modesens20"){
       dispatch(ApplyCoupon())
      }
    }
      setCoupon("")
   }

  //  <-----------------------------------------Catch input value---------------------------> 
   const obj={
     name:"",
     mobile:"",
     pincode:"",
     city:"",
     state:"",
     building:"",
     street:"",
     landmark:""
   }

   const [val,setval] = React.useState(obj)

   const handlechange=(e)=>{
      setval({...val,[e.target.name]:e.target.value})
   }

   const {name,mobile,pincode,city,state,building,street,landmark} = val

  
  //  <--------------------------------post address----------------------------------------->
   const handleclick=()=>{
      
      fetch(`https://long-lime-crab-garb.cyclic.app/address/add`,{
        method:"POST",
        body:JSON.stringify(val),
        headers:{
          "Content-Type":"application/json",
          "authorization":`${token}`
        }
      }).then(res=>res.json())
        .then(res=>{
          dispatch(Address(res.data))
          console.log(res)
        })
        .catch((err)=>console.log(err))

   }
  // <--------------fetch data dynamically if user direct buy from singleproductpage then this logic works--------->

   const location = useLocation()
   const {id} = useParams()
 
          React.useEffect(()=>{
             if(id!=undefined){
              getBuyData(location.state.gender,id)
             }

          },[])

         

                    const getBuyData=(gender,id)=>{
                     
                     fetch(`https://long-lime-crab-garb.cyclic.app/${gender}/get/${id}`)
                     .then((res)=>res.json())
                     .then((res)=>{
                          dispatch(DirectBuy(res.msg))

                     })
                     .catch((err)=>{
                         console.log(err)
                        
                     })
             
                 }

          



    
     //  <--------------------------------Get address----------------------------------------->
       React.useEffect(()=>{
        if(token!=""){
        getAddress()
        }
       },[]) 


     const getAddress=()=>{
      fetch(`https://long-lime-crab-garb.cyclic.app/address/get`,{
        headers:{
          "Content-Type":"application/json",
          "authorization":`${token}`
        }
      })
        .then(res=>res.json())
        .then(res=>{
          //console.log(res.msg)
          dispatch(Address(res.msg))
        })
        .catch((err)=>console.log(err))
   }
   //  <--------------------------------delete address----------------------------------------->

 



    //  <--------------------------------update address----------------------------------------->


  //<--------------------------select address------------------------------------>

                    const ref=React.useRef([])
 
                    const [selectbtn,setselectbtn] = React.useState("")
               
                    const Size=(i)=>{
                         console.log(i)
                       if(selectbtn!="" || selectbtn=="0"){
                           ref.current[selectbtn].style.color = 'black'
                           ref.current[selectbtn].style.backgroundColor = 'white'
               
                       }
                       setselectbtn(i)
                       ref.current[i].style.color = 'white'
                       ref.current[i].style.backgroundColor = 'black'
                       ref.current[i].style.border = '1px solid black'
             
                     
                      
                    }

                    console.log("Ie",selectbtn)




    console.log("ddd",address)


   

  return (
       <>
            <Navbar />

            <Box w="80%" m="auto" mt="2rem" borderBottom="1px" pb="0.9rem" borderColor="gray.400" fontSize="1.5rem" textAlign="start" >
               Shipping & Payment
            </Box>


            <Flex justifyContent={'space-between'} flexDirection={{base:"column", lg:"row"}} w="90%" m="auto" mt="2rem"   h="40rem"  >
              {/* <------------------------------Left side ------------------------------------------------------->      */}
                   <Box   w={{base:"100%",lg:"60%"}} m="auto" textAlign={'start'} pl="1rem" pr="1rem" border="1px" borderColor="gray.200" h="100%rem" >

                       <Text  fontSize={'1.3rem'} mt="1rem"  >
                          Shipping Address
                       </Text>
                      {/* <------------------------------Left side block1------------------------------------------------------->      */}
                       <Flex justifyContent={'space-between'}   mt="2rem"   h="6rem" >
                          <Box w="48%" h="100%"  textAlign={'start'} >
                              <Text fontSize={{base:"0.8rem",sm:"1rem"}} > Full Name </Text>

                               <Input type="text" name="name"  border={'1px'} borderColor="gray.300" h="3.5rem" placeholder='Enter Your Name' value={name} onChange={handlechange} />
                          </Box>
                          <Box w="48%" h="100%"   textAlign={'start'} >
                              <Text fontSize={{base:"0.8rem",sm:"1rem"}}  > Mobile Number </Text>

                               <Input type="number" name="mobile"  border={'1px'} borderColor="gray.300" h="3.5rem" placeholder='Enter Your Mobile Number' value={mobile} onChange={handlechange} />
                          </Box>
                       </Flex> 
                        {/* <------------------------------Left side block2------------------------------------------------------->      */}
                        <Flex justifyContent={'space-between'}   mt="0.4rem"   h="6rem" >
                          <Box w="48%" h="100%"  textAlign={'start'} >
                              <Text fontSize={{base:"0.8rem",sm:"1rem"}}  > Pincode </Text>

                               <Input type="number" name="pincode"  border={'1px'} borderColor="gray.300" h="3.5rem" placeholder='Enter Your Pincode' value={pincode} onChange={handlechange} />
                          </Box>
                          <Box w="48%" h="100%"   textAlign={'start'} >
                              <Text fontSize={{base:"0.8rem",sm:"1rem"}}  > City </Text>

                               <Input type="text" name="city"  border={'1px'} borderColor="gray.300" h="3.5rem" placeholder='Enter Your City' value={city} onChange={handlechange} />
                          </Box>
                       </Flex> 
                        {/* <------------------------------Left side block3------------------------------------------------------->      */}
                        <Flex justifyContent={'space-between'}   mt="0.4rem"   h="6rem" >
                          <Box w="48%" h="100%"  textAlign={'start'} >
                              <Text fontSize={{base:"0.8rem",sm:"1rem"}}  > State </Text>

                               <Input type="text" name="state"  border={'1px'} borderColor="gray.300" h="3.5rem" placeholder='Enter Your State' value={state} onChange={handlechange} />
                          </Box>
                          <Box w="48%" h="100%"   textAlign={'start'} >
                              <Text fontSize={{base:"0.8rem",sm:"1rem"}}  > Building Number </Text>

                               <Input type="text" name="building"  border={'1px'} borderColor="gray.300" h="3.5rem" placeholder='Enter Your Building Number' value={building} onChange={handlechange} />
                          </Box>
                       </Flex> 
                        {/* <------------------------------Left side block4------------------------------------------------------->      */}
                        <Flex justifyContent={'space-between'}   mt="0.4rem"   h="6rem" >
                          <Box w="48%" h="100%"  textAlign={'start'} >
                              <Text fontSize={{base:"0.8rem",sm:"1rem"}}  > Street Name </Text>

                               <Input type="text" name="street"  border={'1px'} borderColor="gray.300" h="3.5rem" placeholder='Enter Your Street Name' value={street} onChange={handlechange} />
                          </Box>
                          <Box w="48%" h="100%"   textAlign={'start'} >
                              <Text fontSize={{base:"0.8rem",sm:"1rem"}}  > Landmark </Text>

                               <Input type="text" name="landmark"  border={'1px'} borderColor="gray.300" h="3.5rem" placeholder='Enter Your Landmark' value={landmark} onChange={handlechange} />
                          </Box>
                       </Flex> 

                       <Button mt="3rem"  w="100%" bg="black" h="3rem" color="white" fontSize="1.1rem"_hover={{bg:"black",color:"white",border:"1px"}} onClick={handleclick} >
                          Add Your Address
                       </Button>

                  {/* <---------------------------All address block-------------------------------------------->            */}

                       <Box textAlign={'start'} mt="2rem" >
                           <Text fontSize={'1.4rem'} fontWeight={'500'}   >Select Your Shipping Address</Text>

                                {
                                  
                                   address && address.map((el,i)=>{
                                     
                                       return <Flex key={i}  border="1px" borderColor={'gray'} mt="0.5rem" pl="1rem" pb="1rem"
                                                  onClick={()=>Size(i)}  > 

                                                  <Center w="1.5rem" h="1.5rem" mt="1rem" border="1px" borderRadius="50%"  ref={ele=>{ref.current[i]=ele}}  >
                                                     <Center w="0.7rem" bg="white" h="0.7rem"  border="1px" borderRadius="50%"  >


                                                     </Center>


                                                  </Center>

                                           <Flex ml="1rem" flexDirection={'column'} >

                                          <Box  textAlign={'start'} fontSize={"1.2rem"}  >
                                              {el.name }
                                           </Box>
                         
                                            <Box textAlign={'start'} fontSize={"1.2rem"} >
                                             {el.building} {el.street}  {el.pincode}
                                            </Box>
                         
                                            <Box textAlign={'start'} fontSize={"1.2rem"}  >
                                              {el.city} { el.state} {el.landmark}
                                            </Box>
                         
                                            <Box textAlign={'start'} fontSize={"1.2rem"} >
                                               Mobile Number: {el.mobile}
                                             </Box>
                                             </Flex> 


                                          </Flex>
                 
                                     })


                                }
 
                         
                       </Box>
        
                   </Box>


      {/* <--------------------------------------------left part------------------------------------------------------------------> */}

                <Box   w={{base:"100%",lg:"38%"}} m="auto" pl="1rem" pr="1rem" mt={{base:"1rem",lg:"0rem"}}  border="1px" borderColor="gray.300" h="100%rem" >

                            <Flex mt="1rem" justifyContent={'space-between'} >  
                              <Input w="70%" type="text" placeholder='Enter Coupon Code' value={coupon} onChange={(e)=>setCoupon(e.target.value)}  />
                              <Button w="25%" bg="black" color="white" fontSize="1.1rem" onClick={getCoupon} _hover={{bg:"white",color:"black",border:"1px"}}  >Apply</Button>
                            </Flex>

                            <Flex mt="1rem" justifyContent={'space-between'} > 
                                <Box textAlign={'start'} fontSize="1.1rem" fontWeight="500" >
                                  Total Item 
                               </Box>
                               <Box textAlign={'start'} fontSize="1.1rem" fontWeight="500" >
                                 { directBuyData.length!=0? 1 : data.length}
                               </Box>
                            </Flex>

                            <Flex mt="1rem" justifyContent={'space-between'} > 
                                 <Box textAlign={'start'} fontSize="1.1rem" fontWeight="500" >
                                   Total Price 
                                 </Box>
                                 <Box textAlign={'start'} fontSize="1.1rem" fontWeight="500" >
                                   ₹{ directBuyData.length!=0? directBuyData.Sprice : totalPrice}
                                 </Box>
                            </Flex>

                             <Flex mt="1rem" justifyContent={'space-between'} > 
                               <Box textAlign={'start'} fontSize="1.1rem" fontWeight="500" >
                                 Discount
                               </Box>
                               <Box textAlign={'start'} fontSize="1.1rem" fontWeight="500" >
                                ₹{ directBuyData.length!=0? (~~directBuyData.Sprice-~~directBuyData.price ): discount}
                               </Box>
                             </Flex>

                             <Divider mt="1rem" color="gray.300" orientation='horizontal' />

                             <Flex mt="1rem" justifyContent={'space-between'} > 
                                <Box textAlign={'start'} fontSize="1.1rem" fontWeight="500" >
                                     Payable Amount 
                               </Box>
                               <Box textAlign={'start'} fontSize="1.1rem" color="rgb(192,0,0)" fontWeight="500" >
                                 ₹{ directBuyData.length!=0?  singleShippingPrice :  payableAmount}
                               </Box>
                             </Flex>
                
                             {/* <RouterLink to="/shipping" > */}
                                <Button mt="3rem"  w="100%" bg="black" h="3rem" color="white" fontSize="1.1rem"_hover={{bg:"black",color:"white",border:"1px"}} >
                                  Proceed To Pay
                                </Button>
                             {/* </RouterLink> */}

               </Box>



            </Flex>
    
    
       </>
  )
}

export default Shiping