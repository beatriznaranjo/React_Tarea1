import { React, useState } from 'react'
import ButtonCarga from './ButtonCarga'
import './App.css'

export default function App() {
    
  const [carga, setCarga] = useState(true)

  function cambiarCarga() {
    setCarga(prevCarga => !prevCarga)
  }

  return (
    <div className="container">
      <h1>Tarea 1 - React</h1>
      <h2>Ejercicio 1</h2>
      <p>Componente que recibe un prop llamado cargando: si cargando es verdadero entonces el texto del button debe decir
"cargando" y si no debe decir "listo" </p>
      <ButtonCarga cargando={carga} cambiarCarga={cambiarCarga}/>
      
    </div>
  )
}

