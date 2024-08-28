import { Usuario } from "../Entidades/Usuario";

export function Registro(){
    let usuario = new Usuario
    const handleChange = (event) => {
        const { name, value } = event.target;
        usuario[name] = value;
      };
    
      const handleSubmit = (event) => {
        event.preventDefault(); // Prevenir la recarga de la página
        console.log(usuario); // Aquí puedes manejar los datos del formulario
      };
    return(
        <div className="formulario">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={usuario.nombre} placeholder="Ingresa tus nombres completos:" />
                <input type="text" onChange={handleChange} placeholder="Ingresa tus apellidos completos:" />
                <input type="number" onChange={handleChange} placeholder="Ingresa tu numero de identificacion:" />
                <input type="email" onChange={handleChange} placeholder="Ingresa tu correo:" />
                <input type="password" onChange={handleChange} placeholder="Ingresa tu contraseña:" />
                <button type="submit" value="Registrar"  onClick={Registrar()}/>          
            </form>     
            <p>Holis este es el Registro</p>
        </div>
   
    )
}

function Registrar(){

}