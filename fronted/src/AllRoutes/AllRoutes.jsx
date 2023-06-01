
import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import Men from '../Pages/Men'
import Women from '../Pages/Women'
import SingleProductPage from '../Pages/SingleProductPage'
import Cart from '../Pages/Cart'
import WishList from '../Pages/WishList'
import Shiping from '../Pages/Shiping'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import PrivateRoute from '../components/PrivateRoute'
import Order from '../Pages/Order'



const AllRoutes = () => {
  return (
    <Routes>

       <Route path="/" element={<Home />} />
       <Route path="/men" element={<Men />} />
       <Route path="/women" element={<Women />} />
       <Route path="/women/:id" element={<SingleProductPage />} />
       <Route path="/men/:id" element={<SingleProductPage />} />
       <Route path="/cart" element={ <PrivateRoute>  <Cart /> </PrivateRoute>    } />
       <Route path="/wishlist" element={ <PrivateRoute> <WishList />  </PrivateRoute>   } />
       <Route path="/shipping" element={<Shiping />} />
       <Route path="/shipping/:id" element={<Shiping />} />
       <Route path="/signup" element={<Signup />} />
       <Route path="/login" element={<Login />} />
       <Route path="/order" element={<Order />} />
       
       

    </Routes>
  )
}

export default AllRoutes