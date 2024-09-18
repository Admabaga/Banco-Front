import CartaInformacionCuenta from './InformacionCuenta';
import NavBar from './NavBar';
import RecargaForm from './RecargaForm';
 export function CartaMainConsignacion (){
    return(
      <>
      <NavBar></NavBar> 
      <section className='mainInformation'>
        <CartaInformacionCuenta></CartaInformacionCuenta>
        <RecargaForm></RecargaForm>
    </section>
    </>   
    )
 }