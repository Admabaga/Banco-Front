import { Header } from './components/Header.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CuentaProvider } from './components/ProveedorInfo.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CartaMainRegistro from './components/MainRegistro.jsx'
import CartaMainLogin from './components/MainLogin.jsx'
import { CartaMainConsignacion } from './components/MainConsignacion.jsx'
import CartaMainRetiro from './components/MainRetiro.jsx'
import { CartaMainTransferencia } from './components/MainTransferencia.jsx'
import { CartaMainMovimiento } from './components/MainMovimientos.jsx'
import Lobby from './components/Lobby.jsx'
import Home from './components/Home.jsx'

function App() {

    return (
      <>
      <CuentaProvider>
      <Header></Header>
        <Router>
          <Routes>
              <Route path='/' element={<Lobby/>}></Route>
              <Route path='/home' element={<Home/>}></Route>
              <Route path={`/home/recargas`} element={<CartaMainConsignacion/>}></Route>
              <Route path={`/home/retiros`} element={<CartaMainRetiro/>}></Route>
              <Route path={`/home/transferencias`} element={<CartaMainTransferencia/>}></Route>
              <Route path={`/home/movimientos`} element={<CartaMainMovimiento/>}></Route>
              <Route path='/usuarios' element={<CartaMainRegistro/>}></Route>
              <Route path='/usuarios/log' element={<CartaMainLogin/>}></Route>
          </Routes>
        </Router>
      </CuentaProvider>
      <Footer/>
      </>
  )
}

export default App
