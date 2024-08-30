import { Usuario } from "../Entidades/Usuario";
import { useState } from "react";

export function Registro(){
    const [nombre, setUsername] = useState('');
    const [correo, setEmail] = useState('');
    const [apellido, setApellidos] = useState('');
    const [cedula, setId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
try {
      console.log('Datos antes de enviar:', { nombre, apellido, cedula, correo, password });
      
      const response = await fetch('http://localhost:8080/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, apellido, cedula, correo, password }),
      });

      if (!response.ok) {
        throw new Error('Error al registrar el usuario');
      }

      const result = await response.json();
      console.log('Respuesta del servidor:', result);
      setMessage(result.message || 'Usuario registrado con éxito');

    } catch (error) {
      console.error('Error:', error);
      setMessage('Error al registrar el usuario');
    }
  };
    
    return(
        <div className="formulario">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Ingresa tus nombres completos"
                />
                <input
                    type="text"
                    value={apellido}
                    onChange={(e) => setApellidos(e.target.value)}
                    placeholder="Ingresa tus apellidos completos"
                />
                <input
                    type="number"
                    value={cedula}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Ingresa tu numero de identificacion"
                />
                <input
                    type="email"
                    value={correo}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ingresa tu correo"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Ingresa tu contraseña"
                />
                <button type="submit">Registrarse</button>
                {message && <p>{message}</p>}
            </form>
        </div>
    )
}

