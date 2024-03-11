import styled, {css} from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const colores = {
    borde: "#0075FF",
    error: "#bb2929",
    exito: "#1ed12d"

}

const GrupoInput = styled.div`
    width:100%;
    padding-left: 0.75rem;
    margin-bottom: 1.5rem;
    position: relative;

    @media (max-width: 880px){
        width: 100%;
    }
`;

const LeyendaError = styled.p`
    font-size: 18px;
    margin-bottom: 20px;
    color: ${colores.error};
    display: none;

    ${props => props.valido === "false" && css`
    display: inline;
    `}
    


`

const IconoValidacion = styled(FontAwesomeIcon)`
    position: absolute;
    left: 80%;
    bottom: 38%;
    z-index: 100;
    font-size: 22px; 
    opacity: 0; 

    ${props => props.valido === "true" && css`
    opacity: 1;
    left: 80%;
    bottom: 17%;
    color: ${colores.exito}
    
`}

    ${props => props.valido === "false" && css`
    opacity: 1;
    color: ${colores.error}
`}
`

const LABEL = styled.label`
    display: block;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75rem;
    letter-spacing: 0.05em;
    color: #4A5568;
    margin-bottom: mb-2;

    ${props => props.valido === "false" && css`
    color: ${colores.error};
`}

`

const Input = styled.input`
    width: 98%;
    padding-left: 0.75rem;
    padding-top: 0.6rem;
    background: white;
    border-radius: 5px;
    line-height: 25px;
    transition: .3s ease all;
    border-style: solid;
    border: 0.2px solid transparent;;
    border-color: #CCCCCC;
    padding-bottom: 0.6rem;
    margin-top:6px;

    // ACA aplicamos la logica y el cambio de estilos sobre el input

    &:focus{
        border: 3px solid ${colores.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163,0.4);
    }

    // Y validamos el estilo del input cuando es verdadero o cuando es falso
    ${props => props.valido === "true" && css`
    border-color: #CCCCCC;
    
    `}

    ${props => props.valido === "false" && css`
    border-color: red;
    

`}

`;


const MensajeError = styled.div`
    height: 45px;
    line-height: 45px;
    background: #F66060;
    padding: 0px 15px;
    border-radius: 3px;
    grid-column: span 2;


    p {
        margin: 0;
    }
    
    b{
        margin-left: 10px;
    }

    @media (max-width: 880px){
        grid-column: span 1;
        background: #F66060;
        padding: 0px 0px;
        height: 85px;
        line-height: 35px;
        
    }

    
`;

const IconoValidacionSelect = styled(FontAwesomeIcon)`
    position: absolute;
    left: 80%;
    bottom: 38%;
    z-index: 100;
    font-size: 22px; 
    opacity: 0; 

    ${props => props.valido === "true" && css`
    opacity: 1;
    left: 80%;
    bottom: 17%;
    color: ${colores.exito}
    
`}

    ${props => props.valido === "false" && css`
    opacity: 1;
    bottom: 17%;
    color: ${colores.error}
`}
`


const Select = styled.select`
    width: 100%;
    background: #f4f4f4;
    border-radius: 8px;
    height: 45px;
    line-height: 27px;
    padding: 0 50px 40px 0px;
    transition: .3s ease all;
    border: 3px groove;
    border-styled: groove;
    border-width: 6px;
    border-color: #f4f4f4;
    text-align: left;
    


    margin: 0;
    padding: 0 20px;
    vertical-align: middle;
    background: #f8f8f8;
    border: 3px solid #ddd;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 300;
    color: #888;
    -moz-border-radius: 4px; -webkit-border-radius: 4px; border-radius: 4px;
    -moz-box-shadow: none; -webkit-box-shadow: none; box-shadow: none;
    -o-transition: all .3s; -moz-transition: all .3s; -webkit-transition: all .3s; -ms-transition: all .3s; transition: all .3s;
    
    &:focus{
        border: 3px solid ${colores.borde}
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163,0.4);
    }

    ${props => props.valido === 'true' && css`
    border: 3px solid ${colores.success};
    `}

    ${props => props.valido === 'false' && css`
    border: 3px solid ${colores.error} !important;
    
    `}
`

const CajaImagen = styled.img`
    max-width: auto;
    max-height: auto;
    background: cover;
`


export {
    LeyendaError,
    LABEL,
    GrupoInput,
    Input,
    IconoValidacion,
    MensajeError,
    IconoValidacionSelect,
    Select,
    CajaImagen

};