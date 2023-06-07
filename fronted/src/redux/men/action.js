
import * as types from "./actionType"


export const mError = ()=>{
    return{
        type:types.GET_MEN_Error
    }
}

export const mLoading=()=>{
    return{
        type:types.GET_MEN_Loading
    }
}

export const GetSuccess=(payload)=>{
    return{
        type:types.GET_MEN_Success,
        payload
    }
}

export const TotalItem=(payload)=>{
    return{
        type:types.GET_TotalItem,
        payload
    }
}


export const CurrentPage=(payload)=>{
    return{
        type:types.GET_Page,
        payload
    }
}

export const Sort=(payload)=>{
    return{
        type:types.GET_Sort,
        payload
    }
}
export const ByCategory=(payload)=>{
    return{
        type:types.GET_Category,
        payload
    }
}
export const ByBrand=(payload)=>{
    return{
        type:types.GET_Brand,
        payload
    }
}

// export const PageQuery=(payload)=>{
//     return{
//         type:types.GET_PageQuery,
//         payload
//     }
// }