import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import { useState, useEffect, useContext } from 'react';
import CuentaContext from './ProveedorInfo';
export default function MovimientoForm(){
    const [movimientos, setMovimientos] = useState([]);
    const {cuentaInfo} = useContext(CuentaContext)
    const [cargando ,setCargando]= useState(false);
  
    useEffect(() => {
      const obtenerMovimientos = async () => {
        setCargando(true)
        try {
          const response = await fetch(`http://localhost:8080/movimientos/${cuentaInfo.idCuenta}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
          });
          
          if (!response.ok) {
            throw new Error('Error en la solicitud');
          }
          
          const data = await response.json();
          setMovimientos(data);
        } catch (error) {
          console.error('Error al obtener movimientos:', error);
        }finally{
          setCargando(false)
        }
      };
  
      obtenerMovimientos();
    }, []);
    return(
        <section className="Main">
        <Card>
        <Card.Header>Movimientos</Card.Header>
        <Card.Body>
        {cargando ? (
              <div className="spinner-container">
                  <Spinner animation="border" size="lg" />
              </div>
          ) : (
            <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Valor movimiento</th>
                <th>Tipo movimiento</th>
                <th>Fecha </th>
              </tr>
            </thead>
            <tbody>
              {movimientos.map((movimiento, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{movimiento.valor}</td>
                  <td>{movimiento.tipoMovimiento}</td>
                  <td>{movimiento.fecha}</td>
                </tr>
              ))}
            </tbody>
          </Table>
           )}
        </Card.Body>
        </Card>
        </section>
    )
}