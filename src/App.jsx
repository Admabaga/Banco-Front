import { useState } from 'react'
import { Header } from './components/Header.jsx'
import { Navbar, NavHome } from './components/Nav.jsx'
import { Usuario } from './Entidades/Usuario'
import './App.css'
function App() {

  const [log, setlog]= useState(false)
  let usuario = new Usuario

    return (
      <div className='App'>
            <Header/>
            {log ? <NavHome></NavHome>:<Navbar></Navbar>}
     </div>
  )
}

export default App
