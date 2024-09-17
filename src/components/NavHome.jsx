import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function NavHome() {
  return (
    <>
      <Navbar expand="lg" className='navBar'>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav">
              <Nav.Link href='/usuarios' className="navtTexto" >Registro</Nav.Link>
              <Nav.Link href='/usuarios/log' className="navtTexto" >Inicio sesión</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavHome;
