import NavBar from './NavBar';
import CartaInformacionCuenta from './InformacionCuenta';
import RetiroForm from './RetiroForm';

function CartaMainRetiro() {
  return(
    <>
    <NavBar></NavBar>
  <section className='mainInformation'>
    <CartaInformacionCuenta></CartaInformacionCuenta>
    <RetiroForm></RetiroForm>
  </section>
  </>
          
  )
}

export default CartaMainRetiro;