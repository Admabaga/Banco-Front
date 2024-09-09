import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CuentaContext from './ProveedorInfo';
import { useContext } from 'react';

function CartaInformacionCuenta() {
  const { cuentaInfo } = useContext(CuentaContext);

  return (
    <article className='cartaInformacion'> 
    <Card>
      <Card.Body>
        <Card.Title>Estado de cuenta</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Saldo: {cuentaInfo.saldo}</ListGroup.Item>
        <ListGroup.Item>Estado: {cuentaInfo.estado}</ListGroup.Item>
        <ListGroup.Item>Numero de cuenta: {cuentaInfo.numeroCuenta}</ListGroup.Item>
      </ListGroup>
    </Card>
    </article>
  );
}

export default CartaInformacionCuenta;