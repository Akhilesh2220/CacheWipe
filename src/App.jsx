import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Components/Sidebar'
import Clean from './Components/Clean'

function App() {

  return (
    <>
    <div className="app-container" style={{ display: 'flex' }}>
      <Sidebar/>
      <Clean/>
      </div>
    </>
  )
}

export default App
