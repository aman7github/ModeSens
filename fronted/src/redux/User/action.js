
import * as types from "./actionTypes"


export const doLogout=()=>{
    return{
        type:types.GET_Logout
    }
}

export const Name=(payload)=>{
    return{
        type:types.GET_Name,
        payload
    }
}

export const Token=(payload)=>{
    return{
        type:types.GET_Token,
        payload
    }
}



