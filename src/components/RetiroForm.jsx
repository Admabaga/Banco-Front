import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { useContext, useState } from 'react';
import CuentaContext from './ProveedorInfo';
export default function RetiroForm() {
    const [valor, setvalor] = useState('');
    const [message, setMessage] = useState('');
    const [cargando, setCargando] = useState(false);
    const {actualizarSaldo, cuentaInfo}= useContext(CuentaContext)
  
    const handleSubmit = async (evento) => {
        evento.preventDefault();
        setCargando(true)
        try {
          const response = await fetch(`https://banco-backend-znok.onrender.com/retiros/${cuentaInfo.idCuenta}`, {
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
        }finally{
          setCargando(false)
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
            onChange={(valor) => setvalor(valor.target.value)} >
            <Form.Control />
            </Form.Group>
            <Button type="submit">Retirar</Button>   
            </fieldset>
            </Form>
            {cargando ? (
              <div className="spinner-container">
                 <Spinner animation="border" size="lg" />
             </div>
             ) : (
             <>
            {message && <p className='procesoExitoso'>{message}</p>}
            </>
                  )}
        </Card.Body>
        </Card>
        </section>
    )
}