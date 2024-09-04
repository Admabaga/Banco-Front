import Card from 'react-bootstrap/Card';

export function CartaMainMovimiento(){
  /*  const [movimientos, setMovimientos] = useState([])
    
    const obtencionDatos = async () => {
        try{

        }catch{
            const respuesta = await fetch('http://localhost:8080/movimientos/', {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                }
              });
        }
    }*/
    return(  
      <section className='Main'>
      <Card>
      <Card.Header>Movimientos</Card.Header>
      <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
          <h1>Estas en Movimientos</h1>
          </Card.Text>
      </Card.Body>
      </Card>
      
  </section>
    )
}