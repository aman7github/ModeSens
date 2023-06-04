
import * as types from "./actionTypes"

const intialstate={
    loading:true,
    error:false,
    address:[],
    token:"",
    chooseaddress:{},
    order:[]

}


const reducer =(state=intialstate,action)=>{

switch(action.type){

      case types.loading_address:
        return {...state,loading:true,error:false}

      case types.loading_address:
        return {...state,loading:false,error:true}

      case types.GET_Address:
        return {...state,address:action.payload,loading:false,error:false}

      case types.GET_Token:
        return {...state,token:action.payload,loading:false,error:false}  

      // case types.Post_Address:
      //   return {...state,address:[...state.address,action.payload],loading:false,error:false}  

      case types.Choose_Address:
        return {...state, chooseaddress:action.payload,loading:false,error:false } 
        
      case types.GET_Order:
        return {...state,loading:false,error:false,order:action.payload}    
  
 
     default: return state
}

}

export {reducer}