import * as types from "./actionTypes"

export const Address=(payload)=>{
    return{
        type:types.GET_Address,
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