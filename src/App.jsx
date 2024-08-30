import { useState } from 'react'
import { Header } from './components/Header.jsx'
import { NavbarMain, NavHome } from './components/Nav.jsx'
import './App.css'


function App() {
  const [log, setlog]= useState(false)

    return (
      <>
            <Header/>
            {log ? <NavHome></NavHome>:<NavbarMain></NavbarMain>}
     </>
  )
}

export default App
