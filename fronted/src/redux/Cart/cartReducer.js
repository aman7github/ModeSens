
import * as types from "./actionTypes"

const intialstate={
    loading:true,
    error:false,
    data:[],
    pincode:"",
    totalPrice:0,
    discount:0,
    payableAmount:0,
    totalCartItem:0
  
}


const reducer =(state=intialstate,action)=>{

switch(action.type){

      case types.GET_Cart_Loading:
        return {...state,loading:true,error:false}
     
     case types.GET_Cart_Error:
        return {...state,loading:false,error:true}
     
      case types.GET_Cart_Success:
        return {...state,loading:false,error:false,data:action.payload,totalCartItem:action.payload.length}  
  
      case types.DELETE_Cart_Success:
        return {...state,loading:false,error:false,data:action.payload}

      case types.Post_Cart_Success:
         return {...state,data:action.payload,totalCartItem:action.payload.length,loading:false,error:false} 

      case types.GET_Pincode:
        return {...state,pincode:action.payload,loading:false,error:false}  

        case types.GET_TotalPrice:
          let count=0
          for(let i=0;i<state.data.length;i++){
             count+= Number(state.data[i].Sprice)*Number(state.data[i].Quantity)
          }
          return {...state,totalPrice:count,loading:false,error:false}

        case types.GET_TotalDiscount:
          let count2=0
          for(let i=0;i<state.data.length;i++){
            count2+= (Number(state.data[i].Sprice*Number(state.data[i].Quantity)))-(Number(state.data[i].price*Number(state.data[i].Quantity)))
      
          }
          return {...state,discount:count2,loading:false,error:false}  

       
        
        case types.GET_PayableAmount:
            return {...state,payableAmount:(state.totalPrice-state.discount)}   

        case types.GET_Coupon:
              let count3=state.totalPrice-state.discount
               count3=count3-Math.floor(count3*0.20)
    
            return {...state,payableAmount:count3,loading:false,error:false}    

     default: return state
}



}

export {reducer}