import React from 'react'
import "./Contador.css"
import { useState } from 'react';

const Contador = ({inicial, stock, add}) => {

  const [contador, setContador] = useState(inicial);


    const aumentarContador = () =>{
        if (contador < stock){
            setContador(contador+1)
        }
    }

    const disminuirContador = () =>{
        if(contador > inicial){
            setContador (contador-1)
        }
    }

  return (
    <div className="contador-botones">
      <button onClick={disminuirContador} className="sumar-restar">-</button>
      <p>{contador}</p>
      <button onClick={aumentarContador} className="sumar-restar">+</button>
      <button onClick={()=> add(contador)}>Agregar al camión</button>
    </div>
  )
}

export default Contador