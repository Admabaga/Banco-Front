import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CartaMainRegistro() {
  const [validated, setValidated] = useState(false);
  const [nombre, setUsername] = useState('');
  const [correo, setEmail] = useState('');
  const [apellido, setApellidos] = useState('');
  const [cedula, setId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
if (form.checkValidity() === false) {
  event.preventDefault();
  event.stopPropagation();
}
setValidated(true);

try {
  const response = await fetch('http://localhost:8080/usuarios', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nombre, apellido, cedula, correo, password }),
  });
  
  if (!response.ok) {
    const result = await response.json();
    throw new Error(result.message);
  }

  const responseData = await response.json();
  console.log('Respuesta del servidor:', response);
  setMessage(responseData.message || 'Usuario registrado con éxito!');

} catch (error) {
  setMessage(error.message);

}

};


  return (
    <Form className='Formulario' noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="validationCustom01" className='formulario'>
        <Form.Label>Nombres:</Form.Label>
        <Form.Control
         value={nombre}
         onChange={(e) => setUsername(e.target.value)}
         required type="text" placeholder="Ingrese sus nombres" />
        <Form.Control.Feedback>Dato valido!</Form.Control.Feedback>
        <Form.Label>Apellidos:</Form.Label>
        <Form.Control 
         value={apellido}
         onChange={(e) => setApellidos(e.target.value)}
         required type="text" placeholder="Ingrese sus apellidos" />
        <Form.Control.Feedback>Dato valido!</Form.Control.Feedback>
        <Form.Label>Correo electronico:</Form.Label>
        <Form.Control 
         value={correo}
         onChange={(e) => setEmail(e.target.value)}
         required type="email" placeholder="Ingrese un correo electronico" />
        <Form.Control.Feedback>Dato valido!</Form.Control.Feedback>
        <Form.Label>Documento identificacion:</Form.Label>
        <Form.Control 
         value={cedula}
         onChange={(e) => setId(e.target.value)}
         required type="number" placeholder="Ingrese su cedula" />
        <Form.Control.Feedback>Dato valido!</Form.Control.Feedback>
        <Form.Label>Contraseña:</Form.Label>
        <Form.Control 
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         required type="password" placeholder="Ingrese una contraseña" />
        <Form.Control.Feedback>Dato valido!</Form.Control.Feedback>
      </Form.Group>
      <Button type="submit">Registrarse</Button>
      <Form.Control.Feedback>{message}</Form.Control.Feedback>
    </Form>
  );
}

export default CartaMainRegistro;
