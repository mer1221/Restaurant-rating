

import React from 'react'
import {Routes , Route, Navigate} from 'react-router-dom'
import Home from "../pages/Home"
import Login from '../pages/Login'
import Register from '../pages/Register'
import Restaurant from '../pages/Restaurant'
import RestaurantDetails from '../pages/RestaurantDetails'
import SearchResultList from '../pages/SearchResultList'
const Routers = () => {
  return (
    <Routes>
      <Route path ='/' element ={<Navigate to='/home'/>} />
      <Route path='/home' element={<Home/>}/>
      <Route path='/restaurants' element={<Restaurant/>}/>
      <Route path='/restaurants/:id' element={<RestaurantDetails/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/restaurants/search' element={<SearchResultList/>}/>
      
    </Routes>
  )
}

export default Routers