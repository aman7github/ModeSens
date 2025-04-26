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

export const woGetSuccess=(payload)=>{
    return{
        type:types.GET_Women_Success,
        payload
    }
}

export const woTotalItem=(payload)=>{
    return{
        type:types.GET_TotalItem,
        payload
    }
}





export const woCurrentPage=(payload)=>{
    return{
        type:types.GET_Page,
        payload
    }
}




 export const woSort=(payload)=>{
    return{
        type:types.GET_Women_Sort,
        payload
    }
}



export const woByCategory=(payload)=>{
    return{
        type:types.GET_Women_Category,
        payload
    }
}


export const woByBrand=(payload)=>{
    return{
        type:types.GET_Women_Brand,
        payload
    }
}

export const woStatus=()=>{
    return{
        type:types.GET_Status,
    }
}



// export const PageQuery=(payload)=>{
//     return{
//         type:types.GET_PageQuery,
//         payload
//     }
// }