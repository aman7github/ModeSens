import { Box, Button, Center, Flex, Input,FormControl, Select, FormLabel, PinInput, PinInputField, useToast } from '@chakra-ui/react'
import React from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    useDisclosure,HStack
  } from '@chakra-ui/react'
  import {useDispatch, useSelector} from "react-redux"
import { FinalOrder1 ,FinalOrder2, RemoveFinalOrder} from '../redux/SingleProduct/action'
import {Link as RouterLink,useLocation, useNavigate} from "react-router-dom"
import { getOrder } from '../redux/Address/action'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { PayableAmount, Pincode, TotalDiscount, TotalPrice, cDelete, cSuccess } from '../redux/Cart/action'


const Payment = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

    const dispatch = useDispatch()

    const {token,data,totalPrice,discount,payableAmount,directBuyData,singleShippingPrice,address,finalorder} = useSelector(store=>{
      return{
      
          totalPrice:store.cartReducer.totalPrice,
          discount:store.cartReducer.discount,
          payableAmount:store.cartReducer.payableAmount,
          data:store.cartReducer.data,
          directBuyData:store.singlePageReducer.directBuyData,
          singleShippingPrice:store.singlePageReducer.singleShippingPrice,
          address:store.addressReducer.address,
          finalorder:store.singlePageReducer.finalorder,
          token:store.userReducer.token,
          
      }
  })
 // <--------------------------------Catching card details----------------------------------->
 let cardobj={
  cardNum:"",
  name:"",
  month:"",
  year:"",
  cvv:""
}

const [detail,setdetail] = React.useState(cardobj)

// const handlechange=(e)=>{
//   setdetail({...detail,[e.target.name]:e.target.value})

// }

const handlechange = (e) => {
  let { name, value } = e.target;

  if (name === "name") {
    // Allow only letters and spaces
    value = value.replace(/[^a-zA-Z\s]/g, '');
  }

  if (name === "cardNumber") {
    // Allow only numbers, and max 12 digits
    value = value.replace(/[^0-9]/g, '');
    if (value.length > 12) {
      value = value.slice(0, 12);
    }
  }

  if (name === "cvv") {
    // Allow only numbers, and max 3 digits
    value = value.replace(/[^0-9]/g, '');
    if (value.length > 3) {
      value = value.slice(0, 3);
    }
  }

  setdetail({ ...detail, [name]: value });
};

















const {cardNum,name,month,year,cvv} = detail
console.log(detail)
 
//  <----------------------------useEffect-------------------------------------------------->

          // console.log("d",directBuyData,"c",data)

          React.useEffect(()=>{
            whichdata()
          },[])

         const whichdata=()=>{
         
           if(directBuyData.hasOwnProperty('price')){
               dispatch(FinalOrder1(directBuyData))
           }else{
              dispatch(FinalOrder2(data))
           }
         
         }
            console.log("DD",directBuyData)
  // <----------------------------------------------------------------------->
   const location = useLocation()
   const selectedAddress = address[location.state.num]
 
   const toast = useToast()

 
  //  <--------------adding address in every order and remove id of address for duplicate id problem------------------>

   for(let i=0;i<finalorder.length;i++){ 
    let date = new Date().toLocaleDateString();
    finalorder[i].Date = date
    finalorder[i].Address = selectedAddress
    delete finalorder[i].Address._id
    delete finalorder[i].Address._userID
    delete finalorder[i]._id
   }

   console.log("final",finalorder)

    const addOrder=()=>{
     
    
    
       fetch(`https://modesens1.onrender.com/order/add`,{
         method:"POST",
         body:JSON.stringify(finalorder),
         headers:{
          "Content-Type":"application/json",
          "authorization":`${token}`
         }

       }).then(res=>res.json())
         .then((res)=>{
           console.log(res.msg)
           dispatch(getOrder(res.data))
           dispatch(Pincode(""))
           dispatch(RemoveFinalOrder())
           
         })
          .catch((err)=>{
            console.log(err)
          })

       
 
      
     }



  // <--------------------------post order on basis of it comes from card or directBuy------------------------------------------------------>
       const detailtoast = useToast()

     const handleclick=()=>{
    
       
      let count=0
      for(let k in detail){
         if(detail[k]!=""){
            count++
         }
      }
    
      
      if(count==5){
         if(Number(year)>Number(new Date().getFullYear())){   
       addOrder()
       if(directBuyData.hasOwnProperty('price')==false){
        removeFromCartAfterBuy()
       }
       onOpen()

      }
      else if(Number(year)<Number(new Date().getFullYear())){
        detailtoast({
          title:"Year should be greater or equal to current year",
          duration:3000,
          isClosable:true,
          position:"top"
        })

      }else if(Number(year)==Number(new Date().getFullYear())){
        if( month>=(new Date().getMonth()+1) ){
          addOrder()
          if(directBuyData.hasOwnProperty('price')==false){
           removeFromCartAfterBuy()
          }
          onOpen()
        }else{
          detailtoast({
            title:"Month should be greater or equal to current Year's month",
            duration:3000,
            isClosable:true,
            position:"top"
          })

        }

      }
      }else{

        detailtoast({
          title:"Please fill all card details",
          duration:3000,
          isClosable:true,
          position:"top"
        })
      }
     }

  // <-----------------------------match pin code and toast after placed order--------------------------------------------------->

       
            let pinobj={
              a:"",
              b:"",
              c:"",
              d:""
            }
            const [v,setv] = React.useState(pinobj)

            const handlepin=(e)=>{
               setv({...v,[e.target.name]:e.target.value})
            }
            const {a,b,c,d} = v

            const navigate=useNavigate()



     const infoOfOderPlaced=()=>{
      let pin = ""
      for(let k in v){
        pin+= v[k]
      }
       
      if(pin=="1234"){

      toast({
        title:"your order is placed ..Now you are in your order section",
        duration:5000,
        isClosable:true,
        position:"top"
      })
      onClose()
      navigate("/order")
    }else{
      toast({
        title:"Entered Pin is wrong",
        duration:5000,
        isClosable:true,
        position:"top"
      })
      setv(pinobj)
      onClose()

    }

     }
  
    // <-----------------------------------data deleted from cart if you order from cart--------------------------------------------------->
    const removeFromCartAfterBuy=()=>{
        
      fetch(`https://modesens1.onrender.com/cart/delete`,{
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
          //console.log(res)
      })
      .catch((err)=>{
          console.log(err)
      })
     }

   

   
  


  return (
    <>        
               <Navbar />
              
              <Box  w={{base:"100%",sm:"80%",md:"70%",lg:"50%"}} m="auto" h="30rem" border="1px" mt="5rem"  borderColor={'gray'}   >

                <Box fontSize="1.5rem" fontWeight={'500'} mt="1rem" ml="3rem" textAlign={'start'} onChange={handlechange} >
                    Process Your Payment ...
                </Box>

                <Flex w={{base:"100%",sm:"90%"}} m="auto" mt="2rem" justifyContent={'center'}  >
                    <Box w="30%" textAlign={'start'} >
                        Card Number
                    </Box>

                     <Input ml="1rem"  w="55%" type='number' name="cardNum" value={cardNum} onChange={handlechange} />
                </Flex>

                <Flex w={{base:"100%",sm:"90%"}} m="auto" mt="1rem" justifyContent={'center'}  >
                    <Box w="30%" textAlign={'start'} >
                        Card Holder Name
                    </Box>

                     <Input ml="1rem"  w="55%" type="text" name="name" value={name} onChange={handlechange} />
                </Flex>

                <Flex w={{base:"100%",sm:"90%"}} m="auto" mt="1rem" justifyContent={'center'}  >
                    <Box w="30%" textAlign={'start'} >
                        Exp Date
                    </Box>

                    <Flex w="58%" >
                    <FormControl w="5.4rem" ml="1rem"  >
                         <Select placeholder='Mon' name="month" value={month} onChange={handlechange}  >
                             <option value="1" >1</option>
                             <option value="2" >2</option>
                             <option value="3" >3</option>
                             <option value="4" >4</option>
                             <option value="5" >5</option>
                             <option value="6" >6</option>
                             <option value="7" >7</option>
                             <option value="8" >8</option>
                             <option value="9" >9</option>
                             <option value="10" >10</option>
                             <option value="11" >11</option>
                             <option value="12" >12</option>
                         </Select>
                    </FormControl>

                    <FormControl w="5.4rem" ml="0.5rem"  >
                         <Select placeholder='Year' name="year"value={year} onChange={handlechange} >
                             <option value="2022" >2022</option>
                             <option value="2023" >2023</option>
                             <option value="2024" >2024</option>
                             <option value="2025" >2025</option>
                             <option value="2026" >2026</option>
                             <option value="2027" >2027</option>
                             <option value="2028" >2028</option>
                             <option value="2029" >2029</option>
                             <option value="2030" >2030</option>
                         </Select>
                    </FormControl>

                    </Flex>

                     
                </Flex>

                <Flex w={{base:"100%",sm:"90%"}} m="auto" mt="1rem" justifyContent={'center'}  >
                    <Box w="30%" textAlign={'start'} >
                        CVV 
                    </Box>

                     <Input ml="1rem"  w="55%" type="text" name="cvv" value={cvv} onChange={handlechange} />
                </Flex>

                <Flex w={{base:"100%",sm:"90%"}} m="auto" mt="1rem" justifyContent={'center'}  >
                    <Box w="30%" textAlign={'start'} >
                       Amount
                    </Box>

                    <Input ml="1rem"  w="55%" type="text" value={ directBuyData.length!=0?  singleShippingPrice :  payableAmount} isReadOnly="true" />
               

                   
                </Flex>


                {/* <Button  w="50%" m="auto" mt="3rem" bg="black" color="white" borderRadius={0}  >
                       PAY
                </Button> */}

                <Box  mt="3rem" >

                  <Button bg='black' w="40%" color="white"  _hover={{bg:"black",color:"white"}} onClick={handleclick}>
                    PAY
                 </Button>

                 <AlertDialog
                    isOpen={isOpen}
                   leastDestructiveRef={cancelRef}
                    onClose={onClose}
                 >
                 <AlertDialogOverlay>
                 <AlertDialogContent>
                 <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                    Enter OTP
                 </AlertDialogHeader>

                <AlertDialogBody>
                   <HStack>
                     <PinInput>
                       <PinInputField name="a"  value={a} onChange={handlepin} />
                       <PinInputField name="b"  value={b} onChange={handlepin} />
                       <PinInputField name="c"  value={c} onChange={handlepin} />
                       <PinInputField name="d"  value={d} onChange={handlepin} />
                       </PinInput>
                    </HStack>
               </AlertDialogBody>
               <AlertDialogFooter>
                {/* <RouterLink to="/order" > */}
              <Button ref={cancelRef}  bg="black"  color='white'  _hover={{bg:"black",color:"white"}} onClick={infoOfOderPlaced} >

                Done
              </Button>
              {/* </RouterLink> */}
            </AlertDialogFooter>

           
              </AlertDialogContent>
            </AlertDialogOverlay>
           </AlertDialog>




                </Box>

              </Box>

              <Footer />
    
    
    </>
  )
}

export default Payment