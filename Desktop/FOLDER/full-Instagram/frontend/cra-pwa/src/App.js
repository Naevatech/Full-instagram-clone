import React from 'react'
import { Routes, Route, } from 'react-router-dom'
import Explore from './components/Explore'
import Home from './components/Home'
import Login from './components/Login'
import Post from './components/Post'
import Signup from './components/Signup'
// import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup  />} />
        <Route path="/home" element={<Home  /> } />
        <Route path='/post' element={<Post />} />
        <Route path='/explore' element={<Explore />} />

      </Routes>
    
    </>
  )
}

export default App