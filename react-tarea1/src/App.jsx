import { React, useState } from 'react'
import './App.css'
import ButtonCarga from './ButtonCarga'
import Animales from './Animales'
import Count from './Count'

export default function App() {
    
  const [carga, setCarga] = useState(true)

  function cambiarCarga() {
    setCarga(prevCarga => !prevCarga)
  }

  const [count, setCount] = useState(0)

  function incrementar() {
      setCount(count + 1)
  }

  return (
    <div className="container">
      <h1>Tarea 1 - React</h1>
      <h2>EJERCICIO 1</h2>
      <p>Componente que recibe un prop llamado cargando: si cargando es verdadero entonces el texto del button debe decir
"cargando" y si no debe decir "listo" </p>
      <ButtonCarga cargando={carga} cambiarCarga={cambiarCarga}/>
      <h2>EJERCICIO 2</h2>
      <p>Cree un componente que tenga un array de animales y usando la funcion .map() me
retorne un párrafo para cada animal del array</p>
      <Animales />
      <h2>EJERCICIO 3</h2>
      <p>Copiar la funcionalidad incluida en <a href="https://react-zu9llg.stackblitz.io/">https://react-zu9llg.stackblitz.io/</a></p>
      <Count currentCount={count} incrementar={incrementar}/>
    </div>
  )
}

