export function Login(){
    return(
        <div className="formulario">
        <form >
            <input type="text"  placeholder="Ingresa tu usuario" />
            <input type="password"  placeholder="Ingresa tu contraseña" />
            <button type="submit" value="Registrar"  >Ingresar</button>         
        </form>     
    </div>
    )
}