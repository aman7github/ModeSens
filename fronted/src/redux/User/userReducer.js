

import * as types from "./actionTypes"

const initialstate={
    loading:false,
    error:false,
    name:"",
    token:""

}


const reducer =(state=initialstate,action)=>{

switch(action.type){

      case types.GET_Logout:
        return {...state,token:""}
     
    
     
      case types.GET_Name:
        return {...state,loading:false,error:false,name:action.payload}  
 
      
      case types.GET_Token:
        return {...state,loading:false,error:false,token:action.payload}  

     
    
        
  

     default: return state
}



}

export {reducer}