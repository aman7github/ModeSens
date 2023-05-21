import { Box, Grid, GridItem,Center } from '@chakra-ui/react'
import React from 'react'

const Category = () => {

 let arr = [ "BAGS","PRE-OWNED","PANTS","SHORTS","JEANS","BOOTS","KNITWEAR","HATS","SUNGLASSES","BEACHWEAR"  ]

  return (
    <>
      <Grid  templateColumns={{base:"repeat(2,1fr)",lg:"repeat(5,1fr)"}} w="95%" m="auto" gap={5} mt="3rem" >
             {
               arr.map((el,i)=>{
                 return <Center key={i}  h="4rem" border="1px" fontSize="1.2rem" fontWeight="400"  >
                            {el}
                        </Center>
               })

             }

      </Grid>
       
    
    
    </>
  )
}

export default Category