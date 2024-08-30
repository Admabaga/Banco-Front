import { useState } from 'react'
import { Header } from './components/Header.jsx'
import { NavbarMain, NavHome } from './components/Nav.jsx'
import { Usuario } from './Entidades/Usuario'
import './App.css'
function App() {

  const [log, setlog]= useState(true)
  let usuario = new Usuario

    return (
      <>
            <Header/>
            {log ? <NavHome></NavHome>:<NavbarMain></NavbarMain>}
     </>
  )
}

export default App
