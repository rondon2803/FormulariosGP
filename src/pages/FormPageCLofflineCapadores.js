import React, {useState} from 'react';
import axios from 'axios';
import imagenCentral from '../images/esperanza.jpg'
import '../App.css';
import '../estilos.css';
import gp from '../images/greenpeace-green.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import ComponenteInput from '../componentes/ComponenteInput';
import Dropdown from '../componentes/ComponenteDropdown';
import { MensajeError } from '../elementos/Formularios';
import { tiposDocumentos, captadores, paisData, departamentoColombiaData, tarjetasColombiaData, montoDonacionesColombia } from '../datos/data';

export const FormPageCOofflineCaptadores = () => {



    const[nombre, cambiarNombre] =useState({campo:"", valido: null});
    const[apellido, cambiarApellido] =useState({campo:"", valido: null});
    const[dni, cambiarDNI] =useState({campo:"", valido: null});
    const[telefono, cambiarTelefono] =useState({campo:"", valido: null});
    const[codigoArea, cambiarCodigoArea] = useState({campo:"", valido: null});
    const[ciudad,cambiarCiudad] = useState({campo:"", valido: null});
    const[direccion,cambiarDireccion] = useState({campo:"", valido: null});
    const[email, cambiarEmail] =useState({campo:"", valido: null});
    const[fechaNacimiento, cambiarFechaNacimiento] =useState({campo:"", valido: null});
    const[pais, cambiarPais] = useState({campo: 'Colombia', valido: null, descriptivo: 'pais' });
    const[departamento, cambiarDepartamento] = useState({campo: '', valido: null, descriptivo: 'departamento' });
    const[tipoDocumento, cambiarTipoDocumento] = useState({campo:"Cedula", valido: null, descriptivo: 'tipoDocumento'});
    const[tipoDocumentoTarjeta, cambiarTipoDocumentoTarjeta] = useState({campo:"Cedula", valido: null, descriptivo: 'tipoDocumento'});
    const[tipoTarjeta, cambiarTipoTarjeta] = useState({campo:'', valido: null, descriptivo: 'tipoTarjeta'});
    const[tarjeta, cambiarTarjeta] =useState({campo:"", valido: null});
    const[numeroDocumentoTarjeta, cambiarNumeroDocumentoTarjeta] =useState({campo:'', valido: null});
    const[fechaExpiracion, cambiarFechaExpiracion] =useState({campo:'', valido: null});
    const[titularTarjeta, cambiarTitularTarjeta] =useState({campo:'', valido: null});
    const[monto, cambiarMonto] = useState({campo:'', valido: null});
    const[montoPersonalizado, cambiarMontoPersonalizado] = useState({campo:'', valido: null});
    const[captador, cambiarCaptador] = useState({campo: '', valido: null, descriptivo: 'captador' });
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
        tarjetaCredito: /^\d{13,19}$/, 
        titularTarjeta: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
        fechaNacimiento: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
        fechaExpiracion: /^(0[1-9]|1[0-2])\/\d{2}$/,
        monto: /^.{3,12}$/, // 4 a 12 digitos.
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
        codigoArea.valido === 'true' &&
        telefono.valido === 'true' &&
        ciudad.valido === 'true' &&
        email.valido === 'true' &&
        pais.valido === 'true' &&
        tarjeta.valido === 'true' &&
        tipoTarjeta.valido === 'true' &&
        titularTarjeta.valido === 'true' &&
        numeroDocumentoTarjeta.valido === 'true' &&
        fechaExpiracion.valido === 'true' &&
        captador.valido === 'true'

        )
        {
            saveData();    
            cambiarMonto({campo: '30000', valido: null});
            cambiarMontoPersonalizado({campo:'', valido: null});
            cambiarNombre({campo: '', valido: null});
            cambiarApellido({campo: '', valido: null});
            cambiarTipoDocumento({campo: 'Cedula', valido: null, descriptivo: 'tipoDocumento' });
            cambiarDNI({campo: '', valido: null});
            cambiarCodigoArea({campo: '', valido: null});
            cambiarTelefono({campo: '', valido: null});
            cambiarPais({campo: 'Colombia', valido: null, descriptivo: 'pais'})
            cambiarCiudad({campo: '', valido: null});
            cambiarEmail({campo: '', valido: null});
            cambiarFechaNacimiento({campo:'', valido: null});
            cambiarPais({campo: 'Colombia', valido: null, descriptivo: 'pais' });
            cambiarDepartamento({campo: '', valido: null, descriptivo: 'departamento' });
            cambiarCiudad({campo:'', valido: null});
            cambiarDireccion({campo:'', valido: null});
            cambiarTipoTarjeta({campo:'', valido: null, descriptivo: 'tipoTarjeta'});
            cambiarTarjeta({campo:'', valido: null});
            cambiarFechaExpiracion({campo:'', valido: null});
            cambiarTipoDocumentoTarjeta({campo:"Cedula", valido: null});
            cambiarNumeroDocumentoTarjeta({campo:'', valido: null});
            cambiarTitularTarjeta({campo:'', valido: null});
            cambiarCaptador({campo: '', valido: null, descriptivo: 'captador'});
            cambiarTerminos(true)

            cambiarFormularioValido(true);


        }

        else{
        cambiarFormularioValido(false);
        }

    }

    const saveData = () => {


        // Crear un objeto con los datos
        const nuevoDato = { 
            amount: monto.campo, amountCustom: montoPersonalizado.campo, firstName: nombre.campo, lastName: apellido.campo, docType: tipoDocumento.campo, docNumber: dni.campo,
            areaCode: codigoArea.campo, phoneNumber: telefono.campo, email: email.campo, birthDate: fechaNacimiento.campo, country: pais.campo, departamento: departamento.campo,
            city: ciudad.campo, address: direccion.campo, card_type: tipoTarjeta.campo, card: tarjeta.campo, cardExpiration: fechaExpiracion.campo, cardDocType: tipoDocumentoTarjeta.campo,
            cardDocNumber: tipoDocumentoTarjeta.campo, cardNameTitular: titularTarjeta.campo,
            captador: captador.campo, form_id : 12
        };

        // Leer los datos existentes de localStorage
        const datosExistentes = JSON.parse(localStorage.getItem('datosFormulario')) || [];

        // Agregar el nuevo dato a los datos existentes
        datosExistentes.push(nuevoDato);

        // Guardar los datos actualizados en localStorage
        localStorage.setItem('datosFormulario', JSON.stringify(datosExistentes));

    }

    const descargarDatos = () => { 
        
        const datos = localStorage.getItem('datosFormulario');
        if (!datos) {
            alert('No hay datos para descargar.');
            return;
        }

        // Crear un Blob con los datos
        const blob = new Blob([datos], {type: 'application/json'});
        alert('Se van a descargar todos los datos almacenados');

        // Crear un enlace para descargar el Blob
        const url = URL.createObjectURL(blob);
        const enlace = document.createElement('a');
        enlace.href = url;
        enlace.download = 'datosFormulario.json';

        // Simular un clic en el enlace para descargar el archivo
        document.body.appendChild(enlace);
        enlace.click();

        // Limpiar y remover el enlace
        document.body.removeChild(enlace);
        URL.revokeObjectURL(url);
        
    }

    function cargaArchivos(data){
        let i = 0;
        data.forEach(objeto => {
        //    console.log(objeto.firstName);
        //    console.log(objeto.lastName);
        //    console.log(objeto.docType);
        //    console.log(objeto.docNumber);
        //    console.log(objeto.areaCode);
        //    console.log(objeto.phoneNumber);
        //    console.log(objeto.city);
        //    console.log(objeto.email);
        //    console.log(objeto.captador);
         //   console.log("formid: 11");
            i++;
            axios.post('https://backoffice.infogreenpeace.org/api/forms/save',{
                amount: objeto.amount,
                amountCustom: objeto.amountCustom,
                firstName: objeto.firstName,
                lastName: objeto.lastName,
                docType: objeto.docType,
                docNumber: objeto.docNumber,
                areaCode: objeto.areaCode,
                phoneNumber: objeto.phoneNumber,
                email: objeto.email,
                birthDate: objeto.birthDate,
                country: objeto.country,
                departamento: objeto.departamento,
                city: objeto.city,
                address: objeto.address,
                card_type: objeto.card_type,
                card: objeto.card,
                cardExpiration: objeto.cardExpiration,
                cardDocType: objeto.cardDocType,
                cardDocNumber: objeto.cardDocNumber,
                cardNameTitular: objeto.cardNameTitular,
                captador: objeto.captador,
                form_id :  12
            })
            .then(function (response) {
            console.log(response);
            //ACA LIMPIO EL ALMACENAMIENTO EN EL NAVEGADOR SI TODO VA BIEN
            localStorage.clear();
            })
            .catch(function (error) {
            console.log(error);
            alert("Error ! No se pudieron enviar los datos");
            });

        })
        alert('Se enviaron a la base de datos ' + i + " archivos" );
    };
    

    function obtenerTodos() {
        const datos = {}; // Objeto para almacenar los pares clave-valor
        
        for (let i = 0; i < localStorage.length; i++) {
            const clave = localStorage.key(i);
            const valor = localStorage.getItem(clave);
            const valoractualizado = JSON.parse(valor);
            cargaArchivos(valoractualizado);
        }


        //console.log(datos);
        return datos;
    }

    return (
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
                <button onClick={descargarDatos}  id="descargarDatos" className='descargarDatos'>Download</button>
                

                <img src={imagenCentral} alt='Greenpeace' className='imagenPrincipal'></img>
                <button onClick={obtenerTodos}  id="subirDatos" className='subirDatos'>Upload Data</button>
                <div className="mb-4"></div>
            {/* </div> */}
            <div className="mb-4">
                {/* aca le hago el marco */}
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <form action='' onSubmit={onSubmit}>
                        <div className="mb-4 md:flex md:items-center">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">

                            <span class="text-gray-700">Autorizo el débito automático mensual de:</span>

                                <Dropdown
                                    label="Monto a debitar"
                                    data={montoDonacionesColombia}
                                    estado={monto}
                                    descriptivo="monto"
                                    cambiarEstado={cambiarMonto}
                                    leyendaError="Campo Obligatorio"
                                    name="monto"
                                    id="monto"
                                ></Dropdown>

                                <ComponenteInput
                                estado={montoPersonalizado}
                                cambiarEstado={cambiarMontoPersonalizado}
                                tipo="texto"
                                label="Monto Personalizado" 
                                placeholder=""
                                name="montoPersonalizado"
                                leyendaError="Campo Incorrecto"
                                
                                
                                >
                                </ComponenteInput>



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
                                data={tiposDocumentos}
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
                                estado={codigoArea}
                                cambiarEstado={cambiarCodigoArea}
                                tipo="text"
                                label="Cód área" 
                                placeholder="Ej. 647"
                                name="codigo"
                                leyendaError="Campo incorrecto"
                                expresionRegular={expresiones.caracteristicaTelefono}
                                >
                                </ComponenteInput>
                            </div>
                            <div className="md:w-1/2 px-3">
                                <ComponenteInput 
                                estado={telefono}
                                cambiarEstado={cambiarTelefono}
                                tipo="text"
                                label="Número telefónico" 
                                placeholder="Ej. 41256847"
                                name="celular"
                                leyendaError="Campo incorrecto"
                                expresionRegular={expresiones.telefono}
                                > 
                                </ComponenteInput>
                            </div>
                        </div>



                        <div className="mb-4 md:flex md:items-center">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                {/* <ComponenteInput 
                                estado={ciudad}
                                cambiarEstado={cambiarCiudad}
                                tipo="text"
                                label="Ciudad" 
                                placeholder="Ej. Bogotá"
                                name="ciudad"
                                leyendaError="Campo incorrecto"
                                expresionRegular={expresiones.nombre}
                                > 
                                </ComponenteInput> */}
                            </div>
                            <div className="md:w-1/2 px-3">
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
                        </div>

                        <ComponenteInput 
                            estado={fechaNacimiento}
                            cambiarEstado={cambiarFechaNacimiento}
                            tipo="text"
                            label="Fecha de Nacimiento" 
                            placeholder="DD/MM/AAAA"
                            name="fechaNacimiento"
                            leyendaError="Campo incorrecto"
                            expresionRegular={expresiones.fechaNacimiento}
                            > 
                        </ComponenteInput>

                        <Dropdown
                                label="Pais"
                                data={paisData}
                                estado={pais}
                                descriptivo="pais"
                                cambiarEstado={cambiarPais}
                                leyendaError="Campo Obligatorio"
                                name="pais"
                                id="pais"
                        ></Dropdown>

                        <Dropdown
                                label="Departamento"
                                data={departamentoColombiaData}
                                estado={departamento}
                                descriptivo="departamento"
                                cambiarEstado={cambiarDepartamento}
                                leyendaError="Campo Obligatorio"
                                name="departamento"
                                id="departamento"
                        ></Dropdown>    
                                <ComponenteInput 
                                estado={ciudad}
                                cambiarEstado={cambiarCiudad}
                                tipo="text"
                                label="Ciudad" 
                                placeholder="Ej. Bogotá"
                                name="ciudad"
                                leyendaError="Campo incorrecto"
                                expresionRegular={expresiones.nombre}
                                > 
                                </ComponenteInput>

                        <ComponenteInput 
                            estado={direccion}
                            cambiarEstado={cambiarDireccion}
                            tipo="text"
                            label="Direccion" 
                            placeholder=""
                            name="direccion"
                            leyendaError="Campo incorrecto"
                            expresionRegular={expresiones.direccion}
                            > 
                        </ComponenteInput>

                        <Dropdown
                                label="Tipo de Tarjeta"
                                data={tarjetasColombiaData}
                                estado={tipoTarjeta}
                                descriptivo="tipoTarjeta"
                                cambiarEstado={cambiarTipoTarjeta}
                                leyendaError="Campo Obligatorio"
                                name="tarjeta"
                                id="tarjeta"
                        ></Dropdown>

                        <ComponenteInput 
                            estado={tarjeta}
                            cambiarEstado={cambiarTarjeta}
                            tipo="text"
                            label="Número de tarjeta" 
                            placeholder="Ej. 47013944281747212"
                            name="tarjeta"
                            leyendaError="Campo incorrecto"
                            expresionRegular={expresiones.tarjetaCredito}
                            > 
                        </ComponenteInput>

                        <ComponenteInput 
                            estado={fechaExpiracion}
                            cambiarEstado={cambiarFechaExpiracion}
                            tipo="text"
                            label="Fecha de expiración" 
                            placeholder="MM/AA"
                            name="fechaExpiracion"
                            leyendaError="Campo incorrecto"
                            expresionRegular={expresiones.fechaExpiracion}
                            > 
                        </ComponenteInput>

                        <Dropdown
                                label="Tipo de documento"
                                data={tiposDocumentos}
                                estado={tipoDocumentoTarjeta}
                                descriptivo="tipoDocumentoTarjeta"
                                cambiarEstado={cambiarTipoDocumentoTarjeta}
                                leyendaError="Campo Obligatorio"
                                name="tipoDocumentoTarjeta"
                                id="tipoDocumentoTarjeta"
                                ></Dropdown>


                        <ComponenteInput
                                estado={numeroDocumentoTarjeta}
                                cambiarEstado={cambiarNumeroDocumentoTarjeta}
                                tipo="texto"
                                label="Número de Documento" 
                                placeholder=""
                                name="dni"
                                leyendaError="El documento solo pueden ser numeros"
                                expresionRegular={expresiones.dni}
                                
                                >
                                </ComponenteInput>


                                <ComponenteInput
                                estado={titularTarjeta}
                                cambiarEstado={cambiarTitularTarjeta}
                                tipo="texto"
                                label="Titular de la tarjeta" 
                                placeholder=""
                                name="numeroDocumentoTarjeta"
                                leyendaError="El documento solo pueden ser numeros"
                                expresionRegular={expresiones.titularTarjeta}
                                
                                >
                                </ComponenteInput>              


                            <Dropdown
                                    label="Captador"
                                    data={captadores}
                                    estado={captador}
                                    descriptivo="captador"
                                    cambiarEstado={cambiarCaptador}
                                    leyendaError="Campo Obligatorio"
                                    name="captador"
                                    id="captador"
                            ></Dropdown>
                        
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
    )
}