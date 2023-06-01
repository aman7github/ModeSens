

import * as types from "./actionTypes"


export const wLoading=()=>{
  return{
    type:types.GET_WishList_Loading
  }
}

export const wError=()=>{
    return{
        type:types.GET_WishList_Error
    }
}

export const wSuccess=(payload)=>{
    return{
        type:types.GET_WishList_Success,
        payload
    }
}

export const wDelete=()=>{
  return{
      type:types.DELETE_WishList
  }
}

export const Like=()=>{
  return{
      type:types.LIKE_WishList
      
  }
}