import { Radio,Box } from '@chakra-ui/react'
import React from 'react'


const AddressBlock = ({value,name,building,city,state,pincode,landmark,mobile,street}) => {


  return (
    <>
     
          <Radio value={value} border="1px" mb="1rem" >
            
            <Box textAlign={'start'} >
                {name }
            </Box>

            <Box textAlign={'start'} >
                {building} {street}  {pincode}
            </Box>

            <Box textAlign={'start'} >
             {city} { state} {landmark}
            </Box>

            <Box textAlign={'start'} >
                Mobile Number: {mobile}
            </Box>


         </Radio>
         
     
    
    
    
    
    </>
  )
}

export default AddressBlock


