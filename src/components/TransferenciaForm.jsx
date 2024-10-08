import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useState, useContext } from 'react';
import CuentaContext from './ProveedorInfo';
import Spinner from 'react-bootstrap/Spinner';

export default function TransferenciaForm(){
    const [valor, setvalor] = useState('');
    const [message, setMessage] = useState('');
    const [cuentaReceptora, setCuentaReceptora] = useState('')
    const [cargando, setCargando] = useState(false)
    const {actualizarSaldo, cuentaInfo}= useContext(CuentaContext)
  
    const handleSubmit = async (evento) => {
        evento.preventDefault();
        setCargando(true)
        try {
          const response = await fetch(`http://localhost:8080/transferencias/${cuentaInfo.idCuenta}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ valor, cuentaReceptora}),
          });
          
          if (!response.ok) {
            const result = await response.json();
            throw new Error(result.message);
          }
        
          const responseData = await response.json();
          console.log('Respuesta del servidor:', response);
          setMessage(responseData.message || 'Transferencia exitosa!');
          const {saldo}= responseData
          actualizarSaldo(saldo)
     
        } catch (error) {
          setMessage(error.message)
        }finally {
          setCargando(false)
          
        }
        
        };

    return(
        <section className='Main'>
        <Card>
        <Card.Header>Transferencias</Card.Header>
        <Card.Body>
        <Form onSubmit={handleSubmit}>
            <fieldset >
            <Form.Label className='tituloMain'>Ingresa el numero de cuenta a transferir:</Form.Label>
            <Form.Group className="mb-3"
             value={cuentaReceptora}
             onChange={(cuentaReceptora) => setCuentaReceptora(cuentaReceptora.target.value)} >
            <Form.Control />
            </Form.Group>
            <Form.Label className='tituloMain'>Ingresa el valor a transferir:</Form.Label>
            <Form.Group className="mb-3"
             value={valor}
             onChange={(valor) => setvalor(valor.target.value)} >
            <Form.Control />
            </Form.Group>
            <Button type="submit">Transferir</Button>   
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