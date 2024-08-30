
import { useState } from "react"
import { Registro } from "./Registro"
import { Login } from "./Login"
import { Historial } from "./Historial"
import { Consignacion } from "./Consignacion"
import { Retiro } from "./Retiro"
import { Transferencia } from "./Transferencia"


const opcionesNavInit = [
    { label: "Registro", value: "registro", component: <Registro /> },
    { label: "Inicio Sesión", value: "login", component: <Login /> }
  ];
  
  const opcionesNavHome = [
    { titulo: "Transferencias", valor: "transferencia", componenteRender: <Transferencia /> },
    { titulo: "Retiros", valor: "retiro", componenteRender: <Retiro /> },
    { titulo: "Consignaciones", valor: "consignacion", componenteRender: <Consignacion /> },
    { titulo: "Movimientos", valor: "historial", componenteRender: <Historial /> }
  ];
  
  const Navbar = ({ options }) => {
    const [opcionSelecta, setOpcionSelecta] = useState("");
  
    const renderizarComponenteMain = () => {
      const selected = options.find(option => option.valor === opcionSelecta);
      return selected ? selected.componenteRender : null;
    };
  
    return (
      <>
        <nav>
          <ul>
            {options.map(({ titulo, valor }) => (
              <li key={valor} onClick={() => setOpcionSelecta(valor)}>
                {titulo} 
              </li>
            ))}
          </ul>
        </nav>
        <div id="main">{renderizarComponenteMain()}</div>
      </>
    );
  };
  
  export const NavbarMain = () => <Navbar options={opcionesNavInit} />;
  export const NavHome = () => <Navbar options={opcionesNavHome} />;