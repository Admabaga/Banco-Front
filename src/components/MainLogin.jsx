import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CartaMainLogin() {
  return (
    <Form className='Formulario'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electronico:</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su correo electronico" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña: </Form.Label>
        <Form.Control type="password" placeholder="Ingrese contraseña" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Iniciar sesion
      </Button>
    </Form>
  );
}

export default CartaMainLogin;