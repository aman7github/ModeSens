import React from 'react'
import { useParams } from 'react-router-dom'
import { Error, Loading, QuantityDec, QuantityInc, Success } from '../redux/SingleProduct/action'
import {useDispatch, useSelector} from "react-redux"
import Navbar from '../components/Navbar'
import { Flex,Box, Text,Center, SimpleGrid,Image, VStack, useToast, Button   } from '@chakra-ui/react'
import {AiOutlineHeart} from "react-icons/ai"
import S from '../components/S'
import Route from "../components/Route"
import Footer from '../components/Footer'
import {cSuccess} from "../redux/Cart/action"
import { wSuccess } from '../redux/WishList/action'
import {Link as RouterLink} from "react-router-dom"


const SingleProductPage = () => {
  // <--------------------------------Catch dynamically men or women data for singledata----------------->
   let a=[]
   a.push(window.location.pathname)
   a=a.toString().split("/")
   console.log(a[1])
  
  // <-----------------------------------------------------------------------------------------------> 
    
    const {id} = useParams()
    const dispatch = useDispatch()

    const {loading,error,data,quantity,token} = useSelector(store=>{
        return{
            loading:store.singlePageReducer.loading,
            error:store.singlePageReducer.error,
            data:store.singlePageReducer.data,
            quantity:store.singlePageReducer.quantity,
            token:store.userReducer.token
        }
    })

  
  const [imgdata,setimgdata] = React.useState([])

    React.useEffect(()=>{
        getWomenData()
       
    },[])


    const getWomenData=()=>{
         Loading()
        fetch(`https://long-lime-crab-garb.cyclic.app/${a[1]}/get/${id}`)
        .then((res)=>res.json())
        .then((res)=>{
             dispatch(Success(res.msg))
             setimgdata(res.msg.arr)
             console.log("a",res)
          
        })
        .catch((err)=>{
            console.log(err)
            Error()
        })

    }
      
   

// <---------------------------------------select size-------------------------------------------->

       let arr = ["S","M","L","XL","XXL"]

     const ref=React.useRef([])
 
     let selectedItem="";
     const [selectbtn,setselectbtn] = React.useState("")

     const Size=(i)=>{

        if(selectbtn!="" || selectbtn=="0"){
            ref.current[selectbtn].style.color = 'white'
            ref.current[selectbtn].style.backgroundColor = 'black'

        }

        ref.current[i].style.color = 'black'
        ref.current[i].style.backgroundColor = 'white'
        ref.current[i].style.border = '1px solid black'
        selectedItem=arr[i]
        setselectbtn(i)
    
     }
       
  

     // <----------------------------------------Add Quantity------------------------------------------> 

           

           const IncQua=()=>{
              dispatch(QuantityInc())
           }

           const DecQua=()=>{
             if(quantity>1){
            dispatch(QuantityDec())
             }
         }



  
    // <----------------------------------------Add to cart------------------------------------------> 
         
     let addData = data
     const toast = useToast()
    
    const addToCart=()=>{
        if(selectedItem!=""){
        data.Size = selectedItem
        data.Quantity = quantity
       fetch(`https://long-lime-crab-garb.cyclic.app/cart/add`,{
           method:"POST",
           body:JSON.stringify(addData),
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

    }else{
        toast({
            title:"Select Your Size",
            duration:5000,
            isClosable:true,
            position:"top"
          })
    }
   }
    
   
 

// <----------------------------------------Add to wishlist------------------------------------------> 
     
 let addwishlistData = data
 const toastWishlist = useToast()


const addToWishList=()=>{
    if(selectedItem!=""){
    addwishlistData.Size = selectedItem
    addwishlistData.Quantity = quantity
   fetch(`https://long-lime-crab-garb.cyclic.app/wishlist/add`,{
       method:"POST",
       body:JSON.stringify(addwishlistData),
       headers:{
         "Content-Type":"application/json",
         "authorization":`${token}`
       }
   })
   .then((res)=>res.json())
   .then((res)=>{
       console.log(res)
       dispatch(wSuccess(res.data))
      
       toastWishlist({
         title:res.msg,
         duration:5000,
         isClosable:true,
         position:"top"
       })
       
   })
   .catch((err)=>{
       console.log(err)

   })

}else{
  toastWishlist({
        title:"Select Your Size",
        duration:5000,
        isClosable:true,
        position:"top"
      })
}
}







const gender=window.location.pathname.toString().split("/")
console.log(gender[1],id)

  return (
    <>
       <Navbar />

       <Route gender="women" color="white"  />
         
       {/* <--------------------------------------------first container------------------------------> */}
       
            <Flex w="95%" m="auto" mt="2rem"  h="30rem" justifyContent={'space-between'} flexDirection={{base:'column',lg:'row'}} >
                 
                 <Flex  w={{base:"80%",md:"60%",lg:"30%"}} h="100%" m="auto"   >
                     <S  card={imgdata}  />
                     <AiOutlineHeart cursor={'pointer'} fontSize="2.2rem" onClick={addToWishList}  />
                 </Flex>


                 <Box  w={{base:"100%",lg:"60%"}} h="100%"  >

                         <Box  mt="1rem" textAlign={'start'}  fontSize="1.6rem" fontWeight="600" >
                             {data.Title}
                         </Box>

                         <Box  mt="1rem" color="gray" textAlign={'start'} >
                             {data.Name}
                         </Box>

                         <Flex mt="0.7rem" textAlign={'start'} fontSize="1.3rem" fontWeight="600" >  
                            <Center color="rgb(192,0,0)"  >${data.price} (30% OFF) </Center> 
                            <Center  > - ${data.Sprice} </Center>    
                         </Flex>

                          <Box textAlign={'start'} mt="1rem" fontSize="1.2rem" fontWeight="500" >
                             Select Your Size
                          </Box>


                          <Flex justifyContent={'start'} mt="1rem" gap={"0.5rem"}    >
                            {
                                arr.map((el,i)=>{
                                    return  <Center key={i} cursor="pointer" h="3rem" w="3rem" fontSize="1.2rem"
                                     bg="black" color="white" fontWeight="400" ref={ ele=>{ref.current[i]=ele}} onClick={()=>Size(i)} >{el}</Center>
                                })
                            }
                          </Flex>

        {/* <-----------------------------------------quantity---------------------------------------------> */}

                          <Flex  mt="3rem" justifyContent={'start'}    >
                                <Center w="3rem" h="3rem" border="1px" onClick={DecQua} fontSize="1.8rem" bg="black" color="white"  fontWeight="bold" cursor={'pointer'}  > - </Center>

                                <Center w="8rem" h="3rem" border="1px" fontSize="1.2rem" fontWeight="500"  >Quantity: {quantity}</Center >

                                <Center w="3rem" h="3rem" border="1px" onClick={IncQua} fontSize="1.5rem" bg="black" color="white" cursor={'pointer'} fontWeight="bold"  > + </Center>
                            </Flex>
         {/* <-----------------------------------------Buttons---------------------------------------------> */}   

                          <Flex  flexDirection={{base:"column",lg:"row"}}   gap="1rem" mt="3rem" w={{base:"80%",md:"70%",lg:"100%"}} >
                            <Center border="1px" w={{base:"100%",md:"60%",lg:"40%"}} h="3rem" bg="white" color="black" fontSize="1rem" fontWeight="bold" cursor="pointer" onClick={addToCart} >
                                ADD TO CART
                            </Center>

                            <Button border="1px"  w={{base:"100%",md:"60%",lg:"40%"}} h="3rem" bg="black" color="white" fontSize="1rem" 
                             fontWeight="bold" cursor="pointer" borderRadius={0} isDisabled={selectbtn==""?true:false}  _hover={{bg:"black",color:"white"}}  >
                              <RouterLink to={`/shipping/${id}`} state={{gender:gender[1]}} >
                                BUY NOW
                              </RouterLink>
                            </Button>
                          </Flex>

                 </Box>

             </Flex>

           

    {/* <--------------------------------------------second container------------------------------> */}

    <Box w="95%" h="15rem"  m="auto" mt={{base:"31rem",lg:"2rem"}} >
      <Box textAlign={'start'} > 
        <Text pos={'absolute'} mt="5rem" left={{base:"2rem",md:"3rem",lg:"5rem"}} color="white" fontSize={{base:"1.5rem",lg:"2rem"}} fontWeight="400"  >
           Sale Starts Now
        </Text>  
        <Text pos={'absolute'} mt={{base:"7.5rem",lg:"8rem"}} left={{base:"2rem",md:"3rem",lg:"5rem"}} color="white" fontSize={{base:"1.2rem",lg:"1.3rem"}}fontWeight="400"  >
           UP to 50% OFF
        </Text>
       
      </Box> 
       <Image src="https://modesens.com/banner/16375/getimg/?img=%2Fbanner%2F20230526-modesens-Tessabit-1440x250.jpg?w=1140" w="100%" h="100%"/>
    </Box>



  
       
       





  {/* <-----------------------------------------Footer---------------------------------------------> */}

      <Footer />








    </>
  )
}

export default SingleProductPage