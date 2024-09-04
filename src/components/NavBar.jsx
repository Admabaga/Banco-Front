import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartaMainMovimiento } from './MainMovimientos';
import { CartaMainConsignacion } from './MainConsignacion';
import CartaMainRetiro from './MainRetiro';
import { CartaMainTransferencia } from './MainTransferencia';
import { useState } from 'react';
import CartaInformacionCuenta from './InformacionCuenta';

function NavBar({estadoNav, cambiarEstadoNav}) {

    const [mostrarComponente, setMostrarComponente] = useState('');

    const cambioAConsignacion = () => {
    setMostrarComponente('consignacion');
    };
    const cambioARetiro = () => {
    setMostrarComponente('retiro');
    };
    const cambioATransferencia = () => {
    setMostrarComponente('transferencia');
    };
    const cambioAMovimientos = () => {
    setMostrarComponente('movimientos');
    };
    const  cambiarestado = ()=> {
        cambiarEstadoNav(!estadoNav)
    }

  return (
    <>
    <Navbar expand="lg" className='navBar'>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav">
            <Nav.Link onClick={cambioAConsignacion} className="navtTexto" >Consignaciones</Nav.Link>
            <Nav.Link onClick={cambioATransferencia} className="navtTexto" >Transferencias</Nav.Link>
            <Nav.Link onClick={cambioARetiro} className="navtTexto" >Retiros</Nav.Link>
            <Nav.Link onClick={cambioAMovimientos} className="navtTexto" >Movimientos</Nav.Link>
            <NavDropdown title="Opciones" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  onClick={cambiarestado}>
                Cerrar sesion
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    {mostrarComponente === 'consignacion' &&
    <section className='mainInformation'>
     <CartaInformacionCuenta/>
     <CartaMainConsignacion />
     </section>
     }
    {mostrarComponente === 'retiro' &&
    <section className='mainInformation'>
     <CartaInformacionCuenta/>
     <CartaMainRetiro />
     </section>
     }
    {mostrarComponente === 'transferencia' &&
     <section className='mainInformation'>
     <CartaInformacionCuenta estado={"Activo"} saldo={100000} numeroCuenta={1017896354}/>
     <CartaMainTransferencia />
     </section>
     }
    {mostrarComponente === 'movimientos' &&
     <section className='mainInformation'>
     <CartaInformacionCuenta />
     <CartaMainMovimiento/>
     </section>
     }
   
    </>
  );
}

export default NavBar;