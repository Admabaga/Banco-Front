import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useContext } from 'react';
import CuentaContext from './ProveedorInfo';

function CartaMainLogin({cambioEstado, estadoNav}) {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const {setSaldo, actualizarCuentaId, actualizarNumeroCuenta, actualizarEstado } = useContext(CuentaContext);

   const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/usuarios/log', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ usuario, password }),
      });
      
      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message);
      }
    
      const responseData = await response.json();
      console.log('Respuesta del servidor:', response);
      const { estado, saldo, numeroCuenta, loggIn, idCuenta} = responseData;

      if(loggIn === true){
      cambioEstado(!estadoNav)
      setSaldo(saldo)
      actualizarCuentaId(idCuenta)
      actualizarNumeroCuenta(numeroCuenta)
      actualizarEstado(estado ? "Activa":"Inactiva")
      }else{
        setMessage("Usuario y/o contraseña incorrectos.")
      }
    
      } catch (error) {
        setMessage(error.message)
      }
    
    };

  return (
    <Form className='Formulario' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electronico:</Form.Label>
        <Form.Control 
        type="email" 
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        placeholder="Ingrese su correo electronico" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña: </Form.Label>
        <Form.Control 
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Ingrese contraseña" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Iniciar sesion
      </Button>
      {message && <p className='procesoExitoso'>{message}</p>}
    </Form>
  );
}

export default CartaMainLogin;