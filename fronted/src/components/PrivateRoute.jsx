import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'


const PrivateRoute = ({children}) => {
    const {token} = useSelector(store=>{
        return{
            token:store.userReducer.token  
        }
    })
    const navigate = useNavigate()
   
    if(token==""){
        navigate("/login", {state:{url:window.location.pathname}})   
    }

    return children


  return (
    <>

    </>
  )
}

export default PrivateRoute