import React from "react"

export default function ButtonCarga(props) {
      
    return (
        <button onClick={props.cambiarCarga}>
            {props.cargando ? "Cargando" : "Listo"}
        </button>
    )
}