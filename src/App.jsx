import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Team from './Team'
import User from './User'
import Friends from './Friends'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Friends></Friends>
      <Team></Team>
      <User></User>
    </>
  )
}

export default App
