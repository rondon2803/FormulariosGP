import React from 'react';
import {faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {LeyendaError, LABEL,GrupoInput, Input, IconoValidacion} from '../elementos/Formularios';


const ComponenteInput = ({estado, cambiarEstado, tipo,label,placeholder,name,leyendaError,expresionRegular}) => {
    const onChange = (e) => {
        cambiarEstado({...estado, campo: e.target.value})    
        // console.log(e.target.value); esta funcion permite que puedas escribir en el campo y tomar los cambios para validar , imprime en consola
    }
    
    const Validacion = () => {
        if(expresionRegular){
            if(expresionRegular.test(estado.campo)){
                cambiarEstado({...estado, valido:"true"});

                //console.log("input correcto");
                // console.log(estado.valido)
            }
            else{
                cambiarEstado({...estado, valido:"false"});
                //console.log("campo incorrecto");
                // console.log(estado.valido)
            }
        }
    }

    return (
            <div>
                <GrupoInput>
                    <LABEL htmlFor={name} valido= {estado.valido} >{label}</LABEL>
                    <Input
                    type={tipo}
                    placeholder={placeholder}
                    id={name}
                    value={estado.campo}
                    onChange={onChange}
                    onKeyUp={Validacion}
                    onBlur={Validacion}
                    valido={estado.valido}

                    >
                    </Input>
                    <IconoValidacion
                    valido={estado.valido}
                    icon={estado.valido === "true" ? faCheckCircle : faTimesCircle}></IconoValidacion>
                    <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
                </GrupoInput>
                
                
            </div>

    );

}

export default ComponenteInput;
