import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart' // or './pages/Cart' if you rename the file
import About from './pages/About'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App
