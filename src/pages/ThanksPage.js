import botes from '../images/botes.jpg';
import gp from '../images/greenpeace-green.svg'
import 'bootstrap/dist/css/bootstrap.css';
import { CajaImagen } from '../elementos/Formularios.js';


export const ThanksPage = () => {
    return (
        <>
        
        <nav className="navbar "> 

            <div className="navbar-header">
            <div className="caja">
            <img alt="GREENPEACE" className="greenpeace" src={gp}/>
            </div>

            </div>
        </nav>
            
        <body>

            

            <div className='Cajathanks'>  
                <CajaImagen alt='Background' src={botes}/>
            </div>
            
            <h1>Muchas gracias por sumarte!</h1>
            <h2>Todos nuestros recursos provienen de donaciones particulares de personas como vos, que deciden apoyar campañas para seguir defendiendo el planeta.</h2>
            <p>¡Sumate ahora, con vos somos más!</p>
        
        </body>

        <footer>
            <div className='FooterBar'>
            <p>Greenpeace Argentina 2023 | A menos que se indique lo contrario, la copia del sitio web está autorizada bajo una licencia internacional CC-BY</p>
            </div>
      
        </footer>
        
       
        </>
            

    )
}