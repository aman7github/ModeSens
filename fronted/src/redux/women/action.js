import * as types from "./actionType"


export const woError = ()=>{
    return{
        type:types.GET_Women_Error
    }
}

export const woLoading=()=>{
    return{
        type:types.GET_Women_Loading
    }
}

export const GetSuccess=(payload)=>{
    return{
        type:types.GET_Women_Success,
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