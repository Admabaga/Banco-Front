import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useContext, useState } from 'react';
import CuentaContext from './ProveedorInfo';

function CartaMainRetiro() {
  const [valor, setvalor] = useState('');
  const [message, setMessage] = useState('');
  const {actualizarSaldo, cuentaInfo}= useContext(CuentaContext)

  const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await fetch(`http://localhost:8080/retiros/${cuentaInfo.idCuenta}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ valor }),
        });
        
        if (!response.ok) {
          const result = await response.json();
          throw new Error(result.message);
        }
      
        const responseData = await response.json();
        console.log('Respuesta del servidor:', response);
        setMessage(responseData.message || 'Retiro exitoso!');
        const {saldo}= responseData
        actualizarSaldo(saldo)
   
      } catch (error) {
        setMessage(error.message)
      }
      
      };
  return(
  <section className='Main'>
      <Card>
      <Card.Header>Retiros</Card.Header>
      <Card.Body>
      <Form onSubmit={handleSubmit}>
          <fieldset >
          <Form.Label className='tituloMain'>Ingresa tu valor a retirar:</Form.Label>
          <Form.Group className="mb-3"
          value={valor}
          onChange={(e) => setvalor(e.target.value)} >
          <Form.Control />
          </Form.Group>
          <Button type="submit">Retirar</Button>   
          </fieldset>
          </Form>
          {message && <p className='procesoExitoso'>{message}</p>}
      </Card.Body>
      </Card>
  </section>
          
  )
}

export default CartaMainRetiro;