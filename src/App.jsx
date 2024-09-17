import { useState } from 'react'
import { Header } from './components/Header.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import  NavBar  from './components/NavBar.jsx'
import NavHome from './components/NavHome.jsx'
import { CuentaProvider } from './components/ProveedorInfo.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CartaMainRegistro from './components/MainRegistro.jsx'
import CartaMainLogin from './components/MainLogin.jsx'
import { CartaMainConsignacion } from './components/MainConsignacion.jsx'
import CartaMainRetiro from './components/MainRetiro.jsx'
import { CartaMainTransferencia } from './components/MainTransferencia.jsx'
import { CartaMainMovimiento } from './components/MainMovimientos.jsx'
import CartaInformacionCuenta from './components/InformacionCuenta.jsx'

function App() {
  const [estadoNav, setEstadoNav] = useState(false)

  const cambiarEstadoNav = (nuevoEstado)=>{
    setEstadoNav(nuevoEstado)
  }
    return (
      <>
      <CuentaProvider>
      <Header></Header>

        <Router>
        {
        estadoNav ? 
        <NavBar 
        estadoNav = {estadoNav} 
        cambiarEstadoNav ={cambiarEstadoNav} ></NavBar>:
        <NavHome  
        estadoNav = {estadoNav} 
        cambiarEstadoNav ={cambiarEstadoNav}></NavHome>
      }
          <Routes>
              <Route path={`/${estadoNav}/recargas`} element={
                    <section className='mainInformation'>
                    <CartaInformacionCuenta/>
                    <CartaMainConsignacion/>
                    </section>}></Route>
              <Route path={`/${estadoNav}/retiros`} element={
                    <section className='mainInformation'>
                    <CartaInformacionCuenta/>
                    <CartaMainRetiro/>
                    </section>}></Route>
              <Route path={`/${estadoNav}/transferencias`} element={
                    <section className='mainInformation'>
                    <CartaInformacionCuenta/>
                    <CartaMainTransferencia/>
                    </section>}></Route>
              <Route path={`/${estadoNav}/movimientos`} element={
                    <section className='mainInformation'>
                    <CartaInformacionCuenta/>
                    <CartaMainMovimiento/>
                    </section>}></Route>
              <Route path='/usuarios' element={<CartaMainRegistro/>}></Route>
              <Route path='/usuarios/log' element={
                <CartaMainLogin 
                cambioEstado ={cambiarEstadoNav} 
                estadoNav={estadoNav}/>}></Route>
          </Routes>
        </Router>
      </CuentaProvider>
      <Footer/>
      </>
  )
}

export default App
