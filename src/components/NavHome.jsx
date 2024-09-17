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
              <Nav.Link as={Link}  to='/usuarios' className="navtTexto" >Registro</Nav.Link>
              <Nav.Link as={Link}  to='/usuarios/log' className="navtTexto" >Inicio sesión</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavHome;
