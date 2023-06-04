import * as types from "./actionTypes"

export const Address=(payload)=>{
    return{
        type:types.GET_Address,
        payload
    }
}

export const chooseAddress=(payload)=>{
    return{
        type:types.Choose_Address,
        payload
    }
}

export const postAddress=(payload)=>{
    return{
        type:types.Post_Address,
        payload
    }
}

export const Token=(payload)=>{
    return{
        type:types.GET_Token,
        payload
    }
}

export const adLoading=()=>{
    return{
        type:types.loading_address
      
    }
}

export const adError=()=>{
    return{
        type:types.error_address
      
    }
}

export const getOrder=(paylaod)=>{
    return{
        type:types.GET_Order,
        paylaod
    }
}