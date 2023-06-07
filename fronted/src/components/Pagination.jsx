import { Button,Center,Flex,PseudoBox } from '@chakra-ui/react'
import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import { PageQuery, woCurrentPage } from '../redux/women/action'
import { useSearchParams } from 'react-router-dom'


const Pagination = () => {
    
    const {totalItem,currentPage,pageQuery} = useSelector((store)=>{
        return{
            totalItem:store.womenReducer.totalItem,
            currentPage:store.womenReducer.currentPage,
            
            // pageQuery:store.womenReducer.pageQuery
        }
      })
      
    
      // const queryPara = new URLSearchParams(window.location.search)
      // const pagequery = queryPara.get('page')

      // const [param,setparam] = useSearchParams()
      
       
   
    
      
     const totalpages = Math.ceil(totalItem/12)
     const dispatch = useDispatch()

     const arr = new Array(totalpages).fill(0)
      
    //  React.useEffect(()=>{
    //   setparam({page:page})
    //  },[page])

      const getpage=(i)=>{
        
        dispatch(woCurrentPage(i+1)) 
      }
       
      


  return (
        <Center ml="2rem" paddingBottom="1rem" paddingTop="1rem" mt="2rem" >
         <Flex  w={{base:"40%",lg:"20%"}}>
            {
              arr.map((el,i)=>{
                 return  <Center  key={i} w="2.3rem" h="2rem" onClick={()=>getpage(i)} fontWeight={'bold'} sx={i+1==currentPage?{bg:"black",color:"white"}:{}} borderRadius={6} _hover={{bg:"black", color:"white"}} cursor={'pointer'}  >
                           { i+1}
                          </Center>   
              })    

            }
            
         </Flex>
    
        </Center>
  )
}

export default Pagination