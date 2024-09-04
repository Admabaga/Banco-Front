import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function CartaInformacionCuenta({saldo, estado, numeroCuenta}) {
  return (
    <article className='cartaInformacion'> 
    <Card>
      <Card.Body>
        <Card.Title>Estado de cuenta</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Saldo: {saldo}</ListGroup.Item>
        <ListGroup.Item>Estado: {estado}</ListGroup.Item>
        <ListGroup.Item>Numero de cuenta: {numeroCuenta}</ListGroup.Item>
      </ListGroup>
    </Card>
    </article>
  );
}

export default CartaInformacionCuenta;