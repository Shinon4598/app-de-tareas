import React from "react";
import { useState } from "react";
import Formulario from "./Formulario";
import Tarea from "./Tarea";
import '../stylesheets/ListaDeTareas.css'
export default function ListaDeTareas(props) {
    const [tareas, setTareas] = useState([]); //Array vacio porque queremos asignar ese valor, como el valor inicial de Tareas
    const agregarTarea = tarea =>{
        tarea.texto = tarea.texto.trim();
         if(tarea.texto){
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
         }
    }
    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(t => t.id!== id);
        setTareas(tareasActualizadas);
    }
    const completarTarea = id => {
        const tareasActualizadas = tareas.map(t => {
            if(t.id === id) {
                t.completada =!t.completada;
            }return t;
        });
        setTareas(tareasActualizadas);
    }
    return (
        <> {/*Fragmentos*/}
            <Formulario onSubmit={agregarTarea}/> 
            <div className="tarea-lista-contenedor"> {/*renderizar una lista de componentes*/}
                {
                    tareas.map((tarea) => (
                        <Tarea
                        key={tarea.id} 
                        id={tarea.id}
                        texto={tarea.texto}
                        completada={tarea.completada}
                        completarTarea={completarTarea}
                        eliminarTarea={eliminarTarea} />
                    ))
                }
            </div>
        </>
    )
    
}