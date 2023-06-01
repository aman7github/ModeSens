
import * as types from "./actionTypes"

const intialstate={
    address:[],
    token:""
}


const reducer =(state=intialstate,action)=>{

switch(action.type){

      case types.GET_Address:
        return {...state,address:action.payload}

      case types.GET_Token:
        return {...state,token:action.payload}  

      case types.Post_Address:
        return {...state,address:[...state.address,action.payload]}  
 
     default: return state
}

}

export {reducer}