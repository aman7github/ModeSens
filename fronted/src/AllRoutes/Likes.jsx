import React, { memo } from 'react'
import {AiOutlineHeart} from "react-icons/ai"

const Likes = ({y}) => {
    console.log("child")
  return (
    <>
    <AiOutlineHeart onClick={y} fontSize="10rem"  />
    
    
    </>
  )
}

export default memo(Likes)