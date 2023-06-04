
import * as types from "./actionTypes"


export const sLoading=()=>{
  return{
    type:types.GET_SinglePage_Loading
  }
}

export const sError=()=>{
    return{
        type:types.GET_SinglePage_Error
    }
}

export const sSuccess=(payload)=>{
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

export const FinalOrder1=(payload)=>{
  return{
      type:types.Final_Order1,
      payload
      
  }
}

export const FinalOrder2=(payload)=>{
  return{
      type:types.Final_Order2,
      payload
      
  }
}

export const RemoveFinalOrder=()=>{
  return{
      type:types.Remove_FinalOrder
  }
}

