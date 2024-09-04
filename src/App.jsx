import { useState } from 'react'
import { Header } from './components/Header.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import  NavBar  from './components/NavBar.jsx'
import NavHome from './components/NavHome.jsx'

function App() {
  const [estadoNav, setEstadoNav] = useState(false)

  const cambiarEstadoNav = (nuevoEstado)=>{
    setEstadoNav(nuevoEstado)
  }
    return (
      <>
      <Header></Header>
      {
        estadoNav ? 
        <NavBar estadoNav = {estadoNav} cambiarEstadoNav ={cambiarEstadoNav} ></NavBar>:
        <NavHome  estadoNav = {estadoNav} cambiarEstadoNav ={cambiarEstadoNav}></NavHome>
      }
      
     

      </>
  )
}



export default App
