
import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import Men from '../Pages/Men'
import Women from '../Pages/Women'



const AllRoutes = () => {
  return (
    <Routes>

       <Route path="/" element={<Home />} />
       <Route path="/men" element={<Men />} />
       <Route path="/women" element={<Women />} />

    </Routes>
  )
}

export default AllRoutes