import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar({estadoNav, cambiarEstadoNav}) {
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
            <Nav.Link href={`/recargas`} className="navtTexto" >Recargas</Nav.Link>
            <Nav.Link href={`/transferencias`} className="navtTexto" >Transferencias</Nav.Link>
            <Nav.Link href={`/retiros`} className="navtTexto" >Retiros</Nav.Link>
            <Nav.Link href={`/movimientos`} className="navtTexto" >Movimientos</Nav.Link>
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
    </>
  );
}

export default NavBar;