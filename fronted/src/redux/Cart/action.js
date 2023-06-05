


import * as types from "./actionTypes"


export const cLoading=()=>{
  return{
    type:types.GET_Cart_Loading
  }
}

export const cError=()=>{
    return{
        type:types.GET_Cart_Error
    }
}

export const cSuccess=(payload)=>{
    return{
        type:types.GET_Cart_Success,
        payload
    }
}

export const cDelete=(payload)=>{
  return{
    type:types.DELETE_Cart_Success,
    payload
  }
}


export const Pincode=(payload)=>{
  return{
    type:types.GET_Pincode,
    payload
  }
}

export const TotalPrice=()=>{
  return{
    type:types.GET_TotalPrice
  }
}

export const TotalDiscount=()=>{
  return{
    type:types.GET_TotalDiscount
  }
}

export const ApplyCoupon=()=>{
  return{
    type:types.GET_Coupon
  }
}


export const PayableAmount=()=>{
  return{
    type:types.GET_PayableAmount
  }
}

export const PostCart=(payload)=>{
  return{
    type:types.Post_Cart_Success,
    payload
  }
}
