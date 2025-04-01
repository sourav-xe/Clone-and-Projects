import { useState } from 'react'
import navbar from './Component/Navbar'
import './App.css'
import Home from './Component/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Home/>
    </>
  )
}

export default App
