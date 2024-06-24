import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mycomponent from './components/Mycomponent'
import ListComponent from './components/ListComponent'
import TempInput from './components/TempInput.jsx'
import TempDisplay from './components/TempDisplay.jsx'

function App() {
  let stationary = ["Pen", "Pencil", "Eraser", "Ruler"];
  
  const [temp, setTemp] = useState(0)
  const showTemp = (newTemp) => {
    setTemp(newTemp)
  }

  return (
    <>
      {/* <TempDisplay temp={temp}/> */}
      <TempInput temp={temp} fn={showTemp}/>
      <TempDisplay temp={temp}/>
    </>
  )
}

export default App
