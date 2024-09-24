import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useState, useContext } from 'react';
import CuentaContext from './ProveedorInfo';
export default function RecargaForm(){
    const [valor, setvalor] = useState(0);
    const [message, setMessage] = useState('');
    const {actualizarSaldo, cuentaInfo} = useContext(CuentaContext);

    const handleSubmit = async (evento) => {
        evento.preventDefault();
        try {
          const response = await fetch(`https://banco-backend-znok.onrender.com/consignaciones/${cuentaInfo.idCuenta}`, {
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
          setMessage(responseData.message || 'Recarga exitosa!');
          const {saldo}= responseData
          actualizarSaldo(saldo)
     
        } catch (error) {
          setMessage(error.message)
        }

        };
    return(
        <section className="Main">
        <Card>
        <Card.Header>Recargas</Card.Header>
        <Card.Body>
        <Form onSubmit={handleSubmit}>
            <fieldset >
            <Form.Label className='tituloMain'>Ingresa tu valor a recargar:</Form.Label>
            <Form.Group className="mb-3"
            value={valor}
            onChange={(valor) => setvalor(valor.target.value)} >
            <Form.Control />
            </Form.Group>
            <Button type="submit">Recargar</Button>   
            </fieldset>
            </Form>
            {message && <p className='procesoExitoso'>{message}</p>}
        </Card.Body>
        </Card>
        </section>
    )
}