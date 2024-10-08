import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import NavHome from './NavHome';

function CartaMainRegistro() {
  const [validated, setValidated] = useState(false);
  const [nombre, setUsername] = useState('');
  const [correo, setEmail] = useState('');
  const [apellido, setApellidos] = useState('');
  const [cedula, setId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [cargando, setCargando] = useState(false);


  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const form = evento.currentTarget;
    if (form.checkValidity() === false) {
      evento.preventDefault();
      evento.stopPropagation();
    }
    setValidated(true);
setCargando(true)
try {
  const response = await fetch('https://banco-backend-znok.onrender.com/usuarios', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors',
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

}finally{
  setCargando(false)
}

};

  return (
    <>
    <NavHome></NavHome>
    <section className='mainFormularios'>
    <Form className='Formulario' noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="validationCustom01" className='formulario'>
        <Form.Label>Nombres:</Form.Label>
        <Form.Control
         value={nombre}
         onChange={(nombreUsuario) => setUsername(nombreUsuario.target.value)}
         required type="text" placeholder="Ingrese sus nombres" />
        <Form.Control.Feedback>Dato valido!</Form.Control.Feedback>
        <Form.Label>Apellidos:</Form.Label>
        <Form.Control 
         value={apellido}
         onChange={(apellidoUsuario) => setApellidos(apellidoUsuario.target.value)}
         required type="text" placeholder="Ingrese sus apellidos" />
        <Form.Control.Feedback>Dato valido!</Form.Control.Feedback>
        <Form.Label>Correo electronico:</Form.Label>
        <Form.Control 
         value={correo}
         onChange={(emailUsuario) => setEmail(emailUsuario.target.value)}
         required type="email" placeholder="Ingrese un correo electronico" />
        <Form.Control.Feedback>Dato valido!</Form.Control.Feedback>
        <Form.Label>Documento identificacion:</Form.Label>
        <Form.Control 
         value={cedula}
         onChange={(cedulaUsuario) => setId(cedulaUsuario.target.value)}
         required type="number" placeholder="Ingrese su cedula" />
        <Form.Control.Feedback>Dato valido!</Form.Control.Feedback>
        <Form.Label>Contraseña:</Form.Label>
        <Form.Control 
         value={password}
         onChange={(passwordUsuario) => setPassword(passwordUsuario.target.value)}
         required type="password" placeholder="Ingrese una contraseña" />
        <Form.Control.Feedback>Dato valido!</Form.Control.Feedback>
      </Form.Group>
      <Button type="submit">Registrarse</Button>
        {cargando ? (
              <div className="spinner-container">
                 <Spinner animation="border" size="lg" />
             </div>
             ) : (
             <>
            {message && <p className='procesoExitoso'>{message}</p>}
            </>
        )}
    </Form>
    </section>
    </>
  );
}

export default CartaMainRegistro;
