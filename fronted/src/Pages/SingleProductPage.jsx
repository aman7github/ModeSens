import React from 'react'
import { useParams } from 'react-router-dom'
import { sError, sLoading, QuantityDec, QuantityInc, sSuccess } from '../redux/SingleProduct/action'
import {useDispatch, useSelector} from "react-redux"
import Navbar from '../components/Navbar'
import { Flex,Box, Text,Center, SimpleGrid,Image, VStack, useToast, Button,useBreakpointValue   } from '@chakra-ui/react'
import {AiOutlineHeart} from "react-icons/ai"
import S from '../components/S'
import Route from "../components/Route"
import Footer from '../components/Footer'
import {PostCart, cSuccess} from "../redux/Cart/action"
import { wSuccess } from '../redux/WishList/action'
import {Link as RouterLink} from "react-router-dom"
import Loader from '../components/Loader'
import modpic88 from '../images/modpic88.png'
import modpic89 from '../images/modpic89.png'

const SingleProductPage = () => {
  // <--------------------------------Catch dynamically men or women data for singledata----------------->
   let a=[]
   a.push(window.location.pathname)
   a=a.toString().split("/")
   console.log(a[1])
  
  // <-----------------------------------------------------------------------------------------------> 
    
    const {id} = useParams()
    const dispatch = useDispatch()

    const {s_loading,s_error,data,quantity,token} = useSelector(store=>{
        return{
            s_loading:store.singlePageReducer.loading,
            s_error:store.singlePageReducer.error,
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
         dispatch(sLoading())

        fetch(`https://modesens1.onrender.com/${a[1]}/get/${id}`)
        .then((res)=>res.json())
        .then((res)=>{
             dispatch(sSuccess(res.msg))
             setimgdata(res.msg.arr)
        
          
        })
        .catch((err)=>{
            console.log(err)
            dispatch(sError())
          
        })

    }
      
   

// <---------------------------------------select size-------------------------------------------->

       let arr = ["S","M","L","XL","XXL"]

     const ref=React.useRef([])
 
     let selectedItem="";
     const [selectbtn,setselectbtn] = React.useState("")

     const Size=(i)=>{

        if(selectbtn!="" || selectbtn=="0" ){
            ref.current[selectbtn].style.color = 'white'
            ref.current[selectbtn].style.backgroundColor = 'black'

        }

        ref.current[i].style.color = 'black'
        ref.current[i].style.backgroundColor = 'white'
        ref.current[i].style.border = '1px solid black'
        selectedItem=i
        setselectbtn(prev=>i)
    
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
 
        if(selectbtn!==""){
          if(token.length!=0){
         data.Size = selectbtn
         data.Quantity = quantity
       fetch(`https://modesens1.onrender.com/cart/add`,{
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
        dispatch(PostCart(res.data))

     
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
          title:"Login first",
          duration:5000,
          isClosable:true,
          position:"top",
          color:"red"
        })

      }

    }else{
        toast({
            title:"Select Your Size",
            duration:4000,
            isClosable:true,
            position:"top",
            color:"red"
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
   fetch(`https://modesens1.onrender.com/wishlist/add`,{
       method:"POST",
       body:JSON.stringify(addwishlistData),
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


const imageSrc = useBreakpointValue({base:modpic89, md: modpic88 });




const gender=window.location.pathname.toString().split("/")


  return (
    <>
    {  s_loading==true? <Loader /> :   
      // <-----------------------------if loading false then this box will render------------------------------------------------------------>             

      <Box>
       <Navbar />

       <Route gender={`${a[1]}`+" / " +"singleproduct page"} color="white"  />
         
       {/* <--------------------------------------------first container------------------------------> */}
       
            <Flex w="95%"  m="auto" mt="2rem"  justifyContent={'space-between'} flexDirection={{base:'column',lg:'row'}} >
                 
                 <Flex  w={{base:"80%",sm:"60%",md:"45%",lg:"30%"}} h="100%" m="auto" border="1px" mt="1.4rem"   >
                     <S  card={imgdata}  />
                     {/* <AiOutlineHeart cursor={'pointer'} fontSize="2.2rem" onClick={addToWishList}  /> */}
                 </Flex>


                 <Flex  w={{base:"100%",lg:"60%"}} h="100%"  justifyContent={{base:"center",lg:"start"}} flexDirection={'column'} >

                         <Box  mt="1rem" textAlign={{base:"center",lg:"start"}}  fontSize="1.6rem" fontWeight="600" >
                             {data.Title}
                         </Box>

                         <Box  mt="1rem" color="gray" textAlign={{base:"center",lg:"start"}} >
                             {data.Name}
                         </Box>

                         <Flex mt="0.7rem" textAlign={{base:"center",lg:"start"}} fontSize="1.3rem" fontWeight="600" justifyContent={{base:"center",lg:"start"}}>  
                            <Center color="rgb(192,0,0)"  >${data.price} (30% OFF) </Center> 
                            <Center  > - ${data.Sprice} </Center>    
                         </Flex>

                          <Box textAlign={{base:"center",lg:"start"}} mt="1rem" fontSize="1.2rem" fontWeight="500" >
                             Select Your Size
                          </Box>


                          <Flex justifyContent={{base:"center",lg:"start"}} mt="1rem" gap={"0.5rem"}    >
                            {  
                              
                                arr.map((el,i)=>{
                                    return  <Center key={i} cursor="pointer" h="3rem" w="3rem" fontSize="1.2rem"
                                     bg="black" color="white" fontWeight="400" ref={ ele=>{ref.current[i]=ele}} onClick={()=>Size(i)} >{el}</Center>
                                })
                            }
                          </Flex>

        {/* <-----------------------------------------quantity---------------------------------------------> */}

                          <Flex  mt="3rem" justifyContent={{base:"center",lg:"start"}}    >
                                <Center w="3rem" h="3rem" border="1px" onClick={DecQua} fontSize="1.8rem" bg="black" color="white"  fontWeight="bold" cursor={'pointer'}  > - </Center>

                                <Center w="8rem" h="3rem" border="1px" fontSize="1.2rem" fontWeight="500"  >Quantity: {quantity}</Center >

                                <Center w="3rem" h="3rem" border="1px" onClick={IncQua} fontSize="1.5rem" bg="black" color="white" cursor={'pointer'} fontWeight="bold"  > + </Center>
                            </Flex>
         {/* <-----------------------------------------Buttons---------------------------------------------> */}   

                          <Flex  flexDirection={{base:"column",lg:"row"}} justifyContent={{base:"center",lg:"space-between"}}  gap="1rem" mt="3rem" w={{lg:"80%"}}  >
                            <Center border="1px" w={{base:"100%",sm:"70%",md:"60%",lg:"50%"}} h="3rem" bg="white" color="black" fontSize="1rem" fontWeight="bold" cursor="pointer" m={{base:"auto",lg:"0rem"}} onClick={addToCart} >
                                ADD TO CART
                            </Center>

                            <Box   w={{base:"100%",sm:"70%",md:"60%",lg:"50%"}}  fontSize="1rem"   textAlign={{base:"center",lg:"start"}}  m={{base:"auto",lg:"0rem"}} >
                             <RouterLink to={`/shipping/${id}`} state={{gender:gender[1]}} >
                              <Button w="100%"  bg="black" color="white" _hover={{bg:"black",color:"white"}} h="3rem"   cursor="pointer" fontWeight="bold" isDisabled={selectbtn===""?true:false} borderRadius={0}>
                                BUY NOW
                              </Button>
                             </RouterLink>
                            </Box>
                          </Flex>

                 </Flex>

             </Flex>

           

    {/* <--------------------------------------------second container------------------------------> */}

    <Box w="95%" h="15rem"  m="auto" mt="1rem" >
      <Box textAlign={'start'} > 
        <Text pos={'absolute'} mt="5rem" left={{base:"2rem",md:"3rem",lg:"5rem"}} color="white" fontSize={{base:"1.5rem",lg:"2rem"}} fontWeight="400"  >
           Sale Starts Now
        </Text>  
        <Text pos={'absolute'} mt={{base:"7.5rem",lg:"8rem"}} left={{base:"2rem",md:"3rem",lg:"5rem"}} color="white" fontSize={{base:"1.2rem",lg:"1.3rem"}}fontWeight="400"  >
           UP to 50% OFF
        </Text>
       
      </Box> 
       <Image src={imageSrc} w="100%" h="100%"/>
    </Box>



  {/* <-----------------------------------------Footer---------------------------------------------> */}

      <Footer />


    </Box>

      }
    </>
  )
}

export default SingleProductPage