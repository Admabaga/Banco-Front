import TransferenciaForm from './TransferenciaForm';
import NavBar from './NavBar';
import CartaInformacionCuenta from './InformacionCuenta';

 export function CartaMainTransferencia(){
    return(
      <>
    <NavBar></NavBar>
    <section className='mainInformation'>
        <CartaInformacionCuenta></CartaInformacionCuenta>
        <TransferenciaForm></TransferenciaForm>
    </section>
    </>
    )
 }