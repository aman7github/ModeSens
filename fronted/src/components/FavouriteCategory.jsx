import { Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
import {Link as RouteLink} from "react-router-dom"
import fvrt1 from '../images/favourite/fvrt1.jpg'
import fvrt2 from '../images/favourite/fvrt2.jpg'
import fvrt3 from '../images/favourite/fvrt3.jpg'
import fvrt4 from '../images/favourite/fvrt4.jpg'


const FavouriteCategory = () => {


//  let arr= ["https://cdn.modesens.com/banner/20220916Category-women-modesens.jpg","https://cdn.modesens.com/banner/20220916Category-men-modesens.jpg",
//              "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cb919e124321033.61017d216b12f.jpg","https://cdn.shopify.com/s/files/1/1743/7443/files/Artboard_4_4e2893c5-2df6-491f-ba51-1317f5c4d5b3.jpg?v=1680788654"]

  let imgarr = [
    fvrt1,fvrt2,fvrt3,fvrt4
  ]

             let name=["WOMEN","MEN","KIDS","BEAUTY"]
             let link=["/women","/men","/","/"]

  return (
    <>
    
    <Grid templateColumns={{base:"repeat(1,1fr)",lg:"repeat(2,1fr)"}} w="95%" m="auto" gap={2} mt="3rem" >
          {
             imgarr.map((el,i)=>{
                return    <RouteLink to={`${link[i]}`} >
                          <GridItem key={i} h="18rem"     >
                            <Text fontSize="1.5rem" fontWeight="700" color="white" pos="absolute"   ml="4rem" >{name[i]}</Text>
                            <Image src={el} w="100%" h="100%"  />
                       </GridItem>
                       </RouteLink>
             })

          }


    </Grid>
    
    
    
    
    
    </>
  )
}

export default FavouriteCategory