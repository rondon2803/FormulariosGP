import forbiden from "../images/404images.jpg";
import gp from '../images/greenpeace-green.svg';
import '../css/estilosforbiden.css';

export const NotFoundPage = () => {
    return (
            <main>
                <div>NOT FOUND
                    <div className="contenedor-404">
                        <img src={gp} alt="Logo" className="logo"></img>
                        <img src={forbiden} alt="Página no encontrada" className="imagen-404"></img>
                        <p>Lo sentimos, la página que buscas no existe.</p>
                        <a href="/">Volver al inicio</a>
                    </div>

                    
                </div>
            </main>

    )
}