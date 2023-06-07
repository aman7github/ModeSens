
import * as types from "./actionTypes"

const intialstate={
    loading:true,
    error:false,
    data:[],
    quantity:1,
    directBuyData:[],
    singleShippingPrice:0,
    finalorder:[]
    
}


const reducer =(state=intialstate,action)=>{

switch(action.type){

      case types.GET_SinglePage_Loading:
        return {...state,loading:true,error:false}
     
     case types.GET_SinglePage_Error:
        return {...state,loading:false,error:true}
     
      case types.GET_SinglePage_Success:
        return {...state,loading:false,error:false,data:action.payload}  
      
      case types.GET_Quantity_Inc:
        return {...state,quantity:~~(state.quantity)+1,loading:false,error:false}  

      case types.GET_Quantity_Dec:
        return {...state,quantity:~~(state.quantity)-1,loading:false,error:false}   

      case types.GET_DirectBuy:
        return {...state,directBuyData:action.payload,singleShippingPrice:action.payload.price,loading:false,error:false}  

      case types.GET_SingleDiscount:
        const p = Math.floor(state.singleShippingPrice-state.singleShippingPrice*0.20)
        return {...state,singleShippingPrice:p,loading:false,error:false}

      case types.Final_Order1:
              let arr=[action.payload]
            
        return {...state,finalorder:arr,loading:false,error:false}  

      case types.Final_Order2:
        return {...state,finalorder:action.payload,loading:false,error:false}  

      case types.Remove_FinalOrder:
        return {...state,finalorder:[]}
     default: return state
}



}

export {reducer}