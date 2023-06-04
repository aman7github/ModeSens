import React from 'react'
import { useNavigate } from 'react-router-dom'

const InvalidRoute = () => {
    const navigate = useNavigate

    React.useEffect(()=>{

        const id =  setTimeout(()=>{
            console.log("yous")
        },5000)

        return()=>{
            clearTimeout(id)
        }


    },[])

   


  return (
    <div>InvalidRoute</div>
  )
}

export default InvalidRoute