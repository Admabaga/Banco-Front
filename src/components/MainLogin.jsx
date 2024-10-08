import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useContext } from 'react';
import CuentaContext from './ProveedorInfo';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import NavHome from './NavHome';

function CartaMainLogin() {
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [cargando, setCargando] = useState(false)
  const { setSaldo, actualizarCuentaId, actualizarNumeroCuenta, actualizarEstado, setCuentaInfo} = useContext(CuentaContext)
  const navigate = useNavigate();

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    setCargando(true)
    try {
      const response = await fetch('http://localhost:8080/usuarios/log', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({ usuario, password }),
      });
      
      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message);
      }
    
      const responseData = await response.json()
      console.log('Respuesta del servidor:', response)
      const { estado, saldo, numeroCuenta, loggIn, idCuenta } = responseData

      if (loggIn === true) {
        setCuentaInfo(responseData)
        setSaldo(saldo)
        actualizarCuentaId(idCuenta)
        actualizarNumeroCuenta(numeroCuenta)
        actualizarEstado(estado ? "Activa" : "Inactiva")
        navigate('/home')

      } else {
        setMessage("Usuario y/o contraseña incorrectos.")
      }
      
    } catch (error) {
      setMessage(error.message)
    }finally{
      setCargando(false)
    }
  }

  return (
    <>
      <NavHome />
      <section className='mainFormularios'>
        <Form className='Formulario' onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo electronico:</Form.Label>
            <Form.Control 
              type="email" 
              value={usuario}
              onChange={(usuarioNombre) => setUsuario(usuarioNombre.target.value)}
              placeholder="Ingrese su correo electronico" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña: </Form.Label>
            <Form.Control 
              type="password" 
              value={password}
              onChange={(password) => setPassword(password.target.value)}
              placeholder="Ingrese contraseña" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Iniciar sesion
          </Button>
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

export default CartaMainLogin
