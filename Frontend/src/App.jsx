import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/Login" element ={<Login/>}/>
      <Route path="/Signup" element ={<Signup/>}/>
      <Route path="/Contact" element ={<Contact/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App