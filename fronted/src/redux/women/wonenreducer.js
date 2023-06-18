import * as types from "./actionType"


const intialstate={

 loading:true,
 error:false,
 data:[],
 totalItem:0,
 currentPage:1,
 sort:undefined,
 category:"",
 brand:"",
 status:false
}

const reducer=(state=intialstate,action)=>{

switch(action.type){

  case types.GET_Women_Loading:
    return{
     ...state,loading:true, error:false
  }
  case types.GET_Women_Error: return{
    ...state,loading:false, error:true
  }
  case types.GET_Women_Success:return{
    ...state,loading:false, error:false, data:action.payload
  }
  case types.GET_TotalItem:return{
    ...state, totalItem:action.payload,loading:false, error:false
  }
  
  case types.GET_Page:
    return{...state, currentPage:action.payload,loading:false, error:false  }


  case types.GET_Women_Sort:
    return {...state, sort:action.payload ,loading:false, error:false}

   case types.GET_Women_Category:
     return {...state,category:action.payload, currentPage:1,loading:false, error:false} 
    
   case types.GET_Women_Brand:
    return {...state,brand:action.payload,loading:false, error:false}

   case types.GET_Status:
    return {...state,loading:false, error:false,status:!state.status}

    default: return state;
     
}

}

export {reducer}