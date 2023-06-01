
import * as types from "./actionTypes"

const intialstate={
    loading:false,
    error:false,
    data:[],
    quantity:1,
    directBuyData:[],
    singleShippingPrice:0
}


const reducer =(state=intialstate,action)=>{

switch(action.type){

      case types.GET_SinglePage_Loading:
        return {...state,loading:true}
     
     case types.GET_SinglePage_Error:
        return {...state,loading:false,error:true}
     
      case types.GET_SinglePage_Success:
        return {...state,loading:false,error:false,data:action.payload}  
      
      case types.GET_Quantity_Inc:
        return {...state,quantity:~~(state.quantity)+1}  

      case types.GET_Quantity_Dec:
        return {...state,quantity:~~(state.quantity)-1}   

      case types.GET_DirectBuy:
        return {...state,directBuyData:action.payload,singleShippingPrice:action.payload.price}  

      case types.GET_SingleDiscount:
        const p = Math.floor(state.singleShippingPrice-state.singleShippingPrice*0.20)
        return {...state,singleShippingPrice:p}

     default: return state
}



}

export {reducer}