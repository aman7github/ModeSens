

import * as types from "./actionTypes"

const intialstate={
    like:false,
    loading:true,
    error:false,
    WishListData:[],
    totalWishListItem:0
   
  
}


const reducer =(state=intialstate,action)=>{

switch(action.type){

      case types.GET_WishList_Loading:
        return {...state,loading:true,error:false}
     
     case types.GET_WishList_Error:
        return {...state,loading:false,error:true}
     
      case types.GET_WishList_Success:
        return {...state,loading:false,error:false, WishListData:action.payload,totalWishListItem:action.payload.length}  
  
      case types.DELETE_WishList:
        return {...state,loading:false,error:false,totalWishListItem:action.payload.length}
      
      case types.LIKE_WishList:
        return {...state,like:!state.like,loading:false,error:false}  

     default: return state
}



}

export {reducer}