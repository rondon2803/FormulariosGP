import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import imagenCentral from '../images/Shiptour.jpg'
import '../App.css';
import '../estilos.css';
import gp from '../images/greenpeace-green.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import ComponenteInput from '../componentes/ComponenteInput';
import Dropdown from '../componentes/ComponenteDropdown';
import { MensajeError } from '../elementos/Formularios';
import { tiposDocumentosCL, regiones } from '../datos/data';

export const FormPageCL = () => {

    const[nombre, cambiarNombre] =useState({campo:"", valido: null});
    const[apellido, cambiarApellido] =useState({campo:"", valido: null});
    const[dni, cambiarDNI] =useState({campo:"", valido: null});
    const[telefono, cambiarTelefono] =useState({campo:"", valido: null});
    const[ciudad,cambiarCiudad] = useState({campo:"", valido: null});
    const[email, cambiarEmail] =useState({campo:"", valido: null});
    const[region, cambiarRegion] = useState({campo: '', valido: null, descriptivo: 'region' });
    const[tipoDocumento, cambiarTipoDocumento] = useState({campo:"RUN", valido: null, descriptivo: 'tipoDocumento'});
    // const[terminos, cambiarTerminos] = useState(true);
    const[terminos, cambiarTerminos] = useState(true);
    const[formularioValido, cambiarFormularioValido] = useState(null);

    const expresiones = {
        usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{2,20}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{5,14}$/, // 7 a 14 numeros.
        caracteristicaTelefono: /^\d{2,6}$/, // 7 a 14 numeros.
        dni: /^\d{6,10}$/, // 7 a 8 numeros.
        email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/,
        direccion: /^[a-zA-ZÀ-ÿ\s0-9_-]{4,40}$/,
        cp: /^[a-zA-ZÀ-ÿ\s0-9_-]{3,12}$/,
        tarjetaCredito: /^\d{12,16}$/, 
        titularTarjeta: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
        telefonoChile:  /^\+\d{5,14}$/, // 7 a 14 numeros.
        
    }


    const onChangeTerminos = (e) => {
        cambiarTerminos(e.target.checked);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        //console.log(evt);

        if (
        nombre.valido === 'true' &&
        apellido.valido === 'true' &&
        tipoDocumento.valido === 'true' &&
        dni.valido === 'true' &&
        email.valido === 'true' &&
        telefono.valido === 'true' &&
        region.valido === 'true' &&
        ciudad.valido === 'true'

        )
        {


        axios.post('https://backoffice.voluntariosgreenpeace.cl/api/forms/save', {
          firstName: nombre.campo, //si el campo se llama igual que la clave basta con poner nombre
          lastName: apellido.campo,
          docType: tipoDocumento.campo,
          docNumber: dni.campo,
          email: email.campo,
          phoneNumber: telefono.campo,
          region: region.campo,
          city: ciudad.campo,
          form_id : 14
        })
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        })
        
        cambiarNombre({campo: '', valido: null});
        cambiarApellido({campo: '', valido: null});
        cambiarTipoDocumento({campo: 'RUN', valido: null, descriptivo: 'tipoDocumento' });
        cambiarDNI({campo: '', valido: null});
        cambiarEmail({campo: '', valido: null});
        cambiarTelefono({campo: '', valido: null});
        cambiarRegion({campo: '', valido: null});
        cambiarCiudad({campo: '', valido: null});
        cambiarTerminos({campo: '', valido: null});
        //cambiarTerminos(true)

        cambiarFormularioValido(true);
        navigate('/thanks');
        }

        else{
        cambiarFormularioValido(false);
        }

    }

    const navigate = useNavigate();

    return(

        <>
        
      <nav className="navbar "> 

          <div className="navbar-header">
            <div className="caja">
            <img alt="GREENPEACE" className="greenpeace" src={gp}/>
            </div>

          </div>
      </nav>

      <body className="bg-gray-50">
          <div className="container mx-auto px-4 py-8">
              <div className="text-center mb-6">
              <h1 className="text-5xl font-bold text-green-500 mb-2">GREENPEACE</h1>
              <p className="text-3xl text-red-600 font-semibold">¡SÚMATE AHORA, CONTIGO SOMOS MÁS!</p>
              
              </div>

              <img src={imagenCentral} alt='Greenpeace' className='imagenPrincipalCL'></img>
              <div className="mb-4"></div>
              
          <div className="mb-4">
          
              {/* aca le hago el marco */}
              <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              
                  <form action='' onSubmit={onSubmit}>
                  
                      <div className="mb-4 md:flex md:items-center">
                          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                              <ComponenteInput
                              estado={nombre}
                              cambiarEstado={cambiarNombre}
                              tipo="texto"
                              label="Nombre" 
                              placeholder="Ej. Daniela"
                              name="nombre"
                              leyendaError="Campo Incorrecto"
                              expresionRegular={expresiones.nombre}
                              
                              >
                              </ComponenteInput>
                          </div>
                          <div className="md:w-1/2 px-3">
                              <ComponenteInput
                              estado={apellido}
                              cambiarEstado={cambiarApellido}
                              tipo="texto"
                              label="Apellido" 
                              placeholder="Ej. Rondon"
                              name="apellido"
                              leyendaError="Campo Incorrecto"
                              expresionRegular={expresiones.nombre}
                              
                              >
                              </ComponenteInput>
                          </div>
                      </div>

                      <div className="mb-4 md:flex md:items-center">
                          <div className="md:w-1/2 px-3 mb-6 md:mb-0">

                              <Dropdown
                              label="Tipo de documento"
                              data={tiposDocumentosCL}
                              estado={tipoDocumento}
                              descriptivo="tipoDocumento"
                              cambiarEstado={cambiarTipoDocumento}
                              leyendaError="Campo Obligatorio"
                              name="tipoDocumento"
                              id="tipoDocumento"
                              ></Dropdown>

                          </div>
                          <div className="md:w-1/2 px-3">
                              <ComponenteInput
                              estado={dni}
                              cambiarEstado={cambiarDNI}
                              tipo="texto"
                              label="Número de Documento" 
                              placeholder="Ej. 21516010"
                              name="dni"
                              leyendaError="El documento solo pueden ser numeros"
                              expresionRegular={expresiones.dni}
                              
                              >
                              </ComponenteInput>
                          </div>
                      </div>


                      <div className="mb-4 md:flex md:items-center">
                          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <ComponenteInput 
                            estado={email}
                            cambiarEstado={cambiarEmail}
                            tipo="email"
                            label="Correo electrónico" 
                            placeholder="Ej. daniela.rondon@email.com"
                            name="mail"
                            leyendaError="Campo incorrecto"
                            expresionRegular={expresiones.correo}
                            > 
                            </ComponenteInput>
                          </div>
                          <div className="md:w-1/2 px-3">
                                <ComponenteInput 
                                estado={telefono}
                                cambiarEstado={cambiarTelefono}
                                tipo="text"
                                label="Número telefónico" 
                                placeholder="Ej. +56987547853"
                                name="celular"
                                leyendaError="Campo incorrecto"
                                expresionRegular={expresiones.telefonoChile}
                                > 
                                </ComponenteInput>
                          </div>
                      </div>



                      <div className="mb-4 md:flex md:items-center">
                          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <Dropdown
                                    label="Region"
                                    data={regiones}
                                    estado={region}
                                    descriptivo="region"
                                    cambiarEstado={cambiarRegion}
                                    leyendaError="Campo Obligatorio"
                                    name="region"
                                    id="region"
                                ></Dropdown>
                          </div>
                          <div className="md:w-1/2 px-3">
                                <ComponenteInput 
                                    estado={ciudad}
                                    cambiarEstado={cambiarCiudad}
                                    tipo="text"
                                    label="Ciudad / Comuna" 
                                    placeholder="Ej. Santiago Centro"
                                    name="ciudad"
                                    leyendaError="Campo incorrecto"
                                    expresionRegular={expresiones.nombre}
                                    > 
                                </ComponenteInput>
                          </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                          <div className="flex items-center">
                              <input className="checkbox mr-2 leading-tight" type="checkbox" id="terms" checked ={terminos} onChange={onChangeTerminos}></input>
                              <label className="text-sm checkbox-label" htmlFor="terms">
                                  Al presionar Enviar estaría aceptando nuestros Términos y Condiciones.
                              </label>
                              {formularioValido === false && <MensajeError>
                              <p className='fondoError'>
                              <FontAwesomeIcon icon={faExclamationTriangle}></FontAwesomeIcon>
                              <b>Error: </b>
                              Por favor rellena el formulario correctamente.
                              </p>
                              </MensajeError>
                              }
                          </div>
                          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                              Enviar
                          </button>
                      </div>


                              
             


              </form>
              </div>
          </div>
          </div>


      </body>


      <footer>
        <div className='FooterBar'>
          <p>Greenpeace Argentina 2023 | A menos que se indique lo contrario, la copia del sitio web está autorizada bajo una licencia internacional CC-BY</p>
        </div>
      
      </footer>

      </>

    );
}