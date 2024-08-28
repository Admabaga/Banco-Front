
import { useState } from "react"
import { Registro } from "./Registro"
import { Login } from "./Login"
import { Historial } from "./Historial"
import { Consignacion } from "./Consignacion"
import { Retiro } from "./Retiro"
import { Transferencia } from "./Transferencia"


 export function Navbar(){
    const [eleccion, setEleccion] = useState('')
    let selector = () =>{
        switch (eleccion){
            case'registro':
                return(<div><Registro></Registro></div>)
            case'login':
                return(<div><Login></Login></div>)
            default:
                return null
        }
        
    }
    return(
        <div>
        <nav>
            <ul>
                <li onClick={()=>setEleccion("registro")}>Registro</li>
                <li onClick={()=>setEleccion("login")}>Inicio Sesion</li>
            </ul>
        </nav>
        <div id="main">{selector()}</div>
        </div>
    )

}

export function NavHome(){
    const [eleccion, setEleccion] = useState('')
    let option = () =>{
        switch (eleccion){
            case'transferencia':
                return(<div><Transferencia></Transferencia></div>)
            case'retiro':
                return(<div><Retiro></Retiro></div>)
            case'consignacion':
                return(<div><Consignacion></Consignacion></div>)
            case'historial':
                return(<div><Historial></Historial></div>)
            default:
                return null
        }
    }
    return(
        <div>
            <nav>
                <ul>
                    <li onClick={()=>setEleccion("transferencia")}>Transferencias</li>
                    <li onClick={()=>setEleccion("retiro")}>Retiros</li>
                    <li onClick={()=>setEleccion("consignacion")}>Consignaciones</li>
                    <li onClick={()=>setEleccion("historial")}>Movimientos</li>
                </ul>
            </nav>
            <div id="main">{option()}</div>
        </div>
    )
}
