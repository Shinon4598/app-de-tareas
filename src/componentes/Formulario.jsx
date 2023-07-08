import React, {useState} from "react";
import '../stylesheets/Formulario.css'
import {v4 as uuidv4} from "uuid";
export default function Formulario(props) {
    const [input, setInput]=useState('');
    const manejarCambio = e => {
        setInput(e.target.value); // extrae el valor del campo de texto que ingreso el usuario
    }
    const manejarEnvio = e => {
        e.preventDefault(); // evita que el formulario no se envie
        const tareaNueva = 
        {id: uuidv4(), 
        texto:input,
        completada:false};
        props.onSubmit(tareaNueva);
    }
    return(
        <form className='tarea-formulario' onSubmit={manejarEnvio}>
            <input className="tarea-input" type="text" placeholder="Escribe una tarea" name="texto"
            onChange={manejarCambio}/>
            <button className="tarea-boton">Agregar Tarea</button>
        </form>
    )
}