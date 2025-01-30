
import React from 'react'
import './App.css'

import Login from './Components/Login'
import {BrowserRouter, Routes, Route} from  'react-router-dom'
import Dashboard from './Components/Dashboard'
import DefaultLayout from './Components/DefaultLayout'
import Category from './Components/Category'
import Report from './Components/Report'
function App(){
  return(
   <BrowserRouter>
   <Routes>
   <Route path ='/' element ={<DefaultLayout/>}></Route>
  
     <Route path ='/adminlogin' element ={<Login/>}></Route>
     <Route path ='/dashboard' element ={<Dashboard/>}></Route>
     <Route path ='/employee' element ={<Category />}></Route>
     <Route path ='/report' element ={<Report />}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App;
