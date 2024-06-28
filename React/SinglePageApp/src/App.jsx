import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Settings from './components/Settings'
import GetData from './components/GetData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
      <Route path='/' element={<GetData />} > </Route>
        <Route path='/home' element={<Home />} > </Route>
        <Route path='/about' element={<About />} > </Route>
        <Route path='/settings' element={<Settings />} > </Route>
      </Routes>
    </>
  )
}

export default App
