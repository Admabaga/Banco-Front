import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import CartaMainRegistro from './MainRegistro';
import CartaMainLogin from './MainLogin';

function NavHome({estadoNav, cambiarEstadoNav}) {
  const [mostrarComponente, setMostrarComponente] = useState('');

  const cambioAlogin = () => {
    setMostrarComponente('login');
  };
  const cambioARegistro = () => {
    setMostrarComponente('registro');
  };

  const cambiarestadoNavbar = () => {
    cambiarEstadoNav(!estadoNav);
  };

  return (
    <>
      <Navbar expand="lg" className='navBar'>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav">
              <Nav.Link onClick={cambioARegistro} className="navtTexto">Registro</Nav.Link>
              <Nav.Link onClick={cambioAlogin} className="navtTexto">Inicio sesión</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {mostrarComponente === 'registro' && <CartaMainRegistro />}
      {mostrarComponente === 'login' && 
      <CartaMainLogin 
      cambioEstado ={cambiarestadoNavbar} 
      estadoNav={estadoNav}
       />}
    </>
  );
}

export default NavHome;
