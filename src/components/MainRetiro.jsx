import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CartaMainRetiro() {
  return (
    <section className='Main'>
        <Card>
        <Card.Header>Retiros</Card.Header>
        <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
            <h1>Estas en Retiros</h1>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    </section>
  );
}

export default CartaMainRetiro;