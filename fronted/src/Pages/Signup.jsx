import React from 'react'
import {Box, Center,Grid,GridItem, Flex, Text, Input,InputGroup,InputRightElement,Button,useToast} from "@chakra-ui/react"
import {GiShoppingBag} from "react-icons/gi"
import {BsFillBellFill,BsBagDashFill,BsFillTrophyFill} from "react-icons/bs"
import {AiFillHeart,AiOutlineEye,AiOutlineEyeInvisible,AiFillHome} from "react-icons/ai"
import {Link as RouterLink} from "react-router-dom"


const Signup = () => {

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)



   // <----------------------------------------cathcing the input value------------------------------>  

     let obj={
       name:"",
       email:"",
       password:""

     }
     
     const [val,setval] = React.useState(obj)

     const handlechange=(e)=>{
      setval({...val, [e.target.name]:e.target.value})
     }
     const {name,email,password} = val
  

    // <---------------------------------post user data for signup---------------------------------------------> 
                const toast = useToast()

                const addUser=()=>{
                     fetch(`https://modesens1.onrender.com/user/register`,{
                        method:"POST",
                        body:JSON.stringify(val),
                        headers:{
                           "Content-Type":"application/json"
                        }
                     }).then(res=>res.json())
                       .then((res)=>{
                           console.log(res.msg)
                           toast({
                              title:res.msg,
                              duration:4000,
                              isClosable:true,
                              position:"top"
                            })
                           setval(obj)

                       }
                       ).catch((err)=>{
                          console.log(err)
                          toast({
                           title:err,
                           duration:3000,
                           isClosable:true,
                           position:"top"
                         })
                       })
                }  
            




  return (
       <>    
           
            <Flex w="95%"  flexDirection={{base:"column",lg:"row"}}   m="auto" border="1px" justifyContent={'space-between'} >

              {/* <----------------------------Left side------------------------------------------------> */}
                <Box w={{sm:"100%",md:"100%",lg:"50%"}} h="100%" pl={{base:"1.2rem",sm:"4rem"}} pb="2rem" bg={'black'} color="white"  >

                   <RouterLink to="/" >
                      <Flex    w="100%" h="3.2rem" fontWeight={'500'} justifyContent={'space-around'} alignItems={'center'} mt="0.7rem" >
                         <Box w="80%" ></Box>
                         <Center w="3.2rem" h="3.2rem" borderRadius={'50%'} cursor={'pointer'}  bg="white"  >
                           <AiFillHome color='black' fontSize={'1.5rem'}   />
                         </Center>   
                      </Flex>
                   </RouterLink>
                    
                       <Box textAlign={'start'} mt="1rem" fontSize={{base:"2rem",sm:"4rem"}}  fontWeight={'400'} >
                           MODESENSE
                       </Box>
                       <Box mt={{base:"0.3rem",sm:"-1rem"}}  textAlign={'start'} fontSize={{base:"1rem",sm:"1.3rem"}} letterSpacing={'0.2rem'} fontWeight={'400'} >
                           BY SHOPPERS FOR SHOPPERS
                       </Box>

                       <Box mt={{base:"3rem",sm:"5rem"}} textAlign={'start'} fontSize={{base:"1.5rem",sm:"2.3rem"}} fontWeight={'300'}  >
                           We're Your
                       </Box>
                       <Box mt="-0.3rem" textAlign={'start'} fontSize={{base:"1.8rem",sm:"2.5rem"}}  fontWeight={'400'} >
                           Shopping Assistant
                       </Box>


                       <Box mt="3rem" textAlign={'start'} fontSize={'1.2rem'} >
                          WITH US YOU CAN :
                       </Box>

                       <Flex gap={'0.6rem'} mt="1.5rem" textAlign={'start'}  fontSize={{base:"1.1rem",sm:"1.3rem"}} fontWeight={'500'} >
                          <GiShoppingBag mt="0.3rem" fontSize={'1.7rem'}  />  COMPARE PRICES ACROSS 500+ STORES
                       </Flex>

                       <Flex gap={'0.6rem'} mt="1rem" textAlign={'start'}  fontSize={{base:"1.1rem",sm:"1.3rem"}} fontWeight={'500'} >
                          <BsFillBellFill mt="0.3rem" fontSize={'1.7rem'}  /> GET PRICE DROP & SALE ALERT
                       </Flex>

                       <Flex gap={'0.6rem'} mt="1rem" textAlign={'start'}  fontSize={{base:"1.1rem",sm:"1.3rem"}} fontWeight={'500'} >
                          <BsBagDashFill mt="0.3rem" fontSize={'1.7rem'}  /> DISCOVER MODESENS CONCIERGE
                       </Flex>

                       <Flex gap={'0.6rem'} mt="1rem" textAlign={'start'}  fontSize={{base:"1.1rem",sm:"1.3rem"}} fontWeight={'500'} >
                          <AiFillHeart mt="0.3rem" fontSize={'1.7rem'}  /> MANAGE YOUR SHOPPING LIST
                       </Flex>

                       <Flex gap={'0.6rem'} mt="1rem" textAlign={'start'}  fontSize={{base:"1.1rem",sm:"1.3rem"}} fontWeight={'500'} >
                          <BsFillTrophyFill mt="0.3rem" fontSize={'1.7rem'}  /> EARN POINTS TOWARDS PURCHASE
                       </Flex>

                </Box>






               {/* <-----------------------------------Right side------------------------------------------------> */}

                <Box  w={{sm:"100%",md:"100%",lg:"50%"}} h="100%" bg={'white'} color="black"  >
                     
                     <RouterLink to="/" >
                      <Center  border="1px" w="3.2rem" h="3.2rem" fontWeight={'500'} pos={'absolute'} right={'3rem'} mt="0.7rem" borderRadius={'50%'} cursor={'pointer'} >
                        <AiFillHome fontSize={'1.5rem'}   />
                      </Center>
                     </RouterLink>

                      <Center   mt="6rem"  fontSize={'1.4rem'} fontWeight={'500'} >
                         Create An Account
                      </Center>

                      <Center  mt="1rem" fontSize={'1.1rem'} >
                         Unleash your shopping power.
                      </Center>

                      <Center fontSize={'1.1rem'} >
                          Check ModeSens before you buy.
                      </Center>
                       

                      <Input  w="55%" m="auto" mt="2rem" border="1px" borderRadius={'0'} placeholder=' Enter Your Name' h="3.3rem" focusBorderColor='black' name="name" value={name} onChange={handlechange} />

                       <Input  w="55%" m="auto" mt="1rem" border="1px" borderRadius={'0'} placeholder=' Enter Your Email' h="3.3rem" focusBorderColor='black' name="email" value={email} onChange={handlechange} />
 
                       <InputGroup w="55%" m="auto" mt="1rem"    >
                            <Input
                                pr='4.5rem'
                                
                                type={show ? 'text' : 'password'}
                                placeholder=' Create Your Password'
                                border="1px" focusBorderColor='black'
                                h="3.3rem" borderRadius={'0'} 
                                bg={'white'}
                                name="password"
                                value={password}
                                onChange={handlechange}
                             />
                             <InputRightElement width='4.5rem'>
                                 <Button bg="white"  mt="0.7rem" _hover={{bg:"white"}}  onClick={handleClick}>
                                   {show ? <AiOutlineEye bg="white" fontSize={'1.6rem'}    /> : <AiOutlineEyeInvisible bg="white" fontSize={'1.6rem'} /> }
                                 </Button>
                             </InputRightElement>
                        </InputGroup>


                       <Button   w="55%" m="auto" mt="2rem" bg="black" h="3.3rem" color="white" borderRadius={'0'} fontSize="1.1rem"_hover={{bg:"black",color:"white",border:"1px"}} onClick={addUser} >
                          SIGN UP
                      </Button>


                      <RouterLink to="/login"  state={window.location.pathname} >
                       <Center fontSize={'1.1rem'} mt="4rem" color="gray" textDecoration={'underline'} >
                         Already have an account? for sign in <Box color="rgb(192,0,0)" ml="0.3rem" > click here</Box>
                       </Center>
                      </RouterLink>

                     






                </Box>

            </Flex>
       
       </>
  )
}

export default Signup