
import { useState } from 'react'
import './App.css'
import BoxColor from './assets/components/BoxColor'

function App() {
  const [color,setColor] = useState(null)

  const handleColor = (e)=>{
    setColor(e.target.value)
  }
  return (
    <>
     <BoxColor handleColor={handleColor} color={color}/>
    </>
  )
}

export default App
