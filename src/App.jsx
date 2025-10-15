import { useState } from 'react'
import Register from './components/register'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login'

import Home from './components/home'
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Register/>}/>
          <Route path="/login" element ={<Login/>}/>
          <Route  path = "/home" element={ <Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
