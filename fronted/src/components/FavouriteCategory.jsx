import { Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'

const FavouriteCategory = () => {


 let arr= ["https://cdn.modesens.com/banner/20220916Category-women-modesens.jpg","https://cdn.modesens.com/banner/20220916Category-men-modesens.jpg",
             "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cb919e124321033.61017d216b12f.jpg","https://cdn.shopify.com/s/files/1/1743/7443/files/Artboard_4_4e2893c5-2df6-491f-ba51-1317f5c4d5b3.jpg?v=1680788654"]

             let name=["WOMEN","MEN","KIDS","BEAUTY"]

  return (
    <>
    
    <Grid templateColumns={{base:"repeat(1,1fr)",lg:"repeat(2,1fr)"}} w="95%" m="auto" gap={2} mt="3rem" >
          {
             arr.map((el,i)=>{
                return <GridItem key={i} h="18rem"     >
                            <Text fontSize="1.5rem" fontWeight="700" color="white" pos="absolute"   ml="4rem" >{name[i]}</Text>
                            <Image src={el} w="100%" h="100%"  />
                       </GridItem>
             })

          }


    </Grid>
    
    
    
    
    
    </>
  )
}

export default FavouriteCategory