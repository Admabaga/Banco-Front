import LogoBanco from '../assets/LogoBanco.png'
export function Header(){
    return(
        <header className="header">
            <div className='contenedorHeader'>
                <img src={LogoBanco} alt="" />
                <h1>BANANTIOQUIA</h1>
            </div>
        </header>
    )
}