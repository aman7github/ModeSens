
import * as types from "./actionTypes"


export const Loading=()=>{
  return{
    type:types.GET_SinglePage_Loading
  }
}

export const Error=()=>{
    return{
        type:types.GET_SinglePage_Error
    }
}

export const Success=(payload)=>{
    return{
        type:types.GET_SinglePage_Success,
        payload
    }
}

export const QuantityInc=()=>{
  return{
      type:types.GET_Quantity_Inc,
  }
}

export const QuantityDec=()=>{
  return{
      type:types.GET_Quantity_Dec,
  }
}

export const DirectBuy=(payload)=>{
  return{
      type:types.GET_DirectBuy,
      payload
  }
}

export const SingleDiscount=()=>{
  return{
      type:types.GET_SingleDiscount,
  }
}