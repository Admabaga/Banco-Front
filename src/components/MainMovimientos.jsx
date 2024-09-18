import NavBar from './NavBar';
import CartaInformacionCuenta from './InformacionCuenta';
import MovimientoForm from './MovimientoForm';

export function CartaMainMovimiento(){
    return(  
      <>
      <NavBar></NavBar>
      <section className='mainInformation'>
      <CartaInformacionCuenta></CartaInformacionCuenta>
      <MovimientoForm></MovimientoForm>
  </section>
  </>
    )
}