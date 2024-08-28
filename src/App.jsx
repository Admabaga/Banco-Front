import { useState } from 'react'
import './App.css'
import { Navbar, NavHome } from './components/Nav.jsx'
import { Usuario } from './Entidades/Usuario'
function App() {

  const [log, setlog]= useState(false)
  let usuario = new Usuario

    return (
    <div className='navBar'>
      {log ? <NavHome></NavHome>:<Navbar></Navbar>}
    </div>   

  )
}

export default App
