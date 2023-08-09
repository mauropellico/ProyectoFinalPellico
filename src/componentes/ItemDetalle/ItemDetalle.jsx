import React from 'react'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Contador from '../Contador/Contador'
import { CamionContext } from "../../Context/CamionContext"

const ItemDetalle = ({ id, raza, img, precio, stock, descripcion }) => {

  const [addCantidad, setAddCantidad] = useState(0)

  const { agregarGanado } = useContext(CamionContext)

  const handlerCantidad = (cantidad) => {
    setAddCantidad(cantidad)
    console.log("Se agregó " + cantidad)
    const item = {
      id, raza, precio
    }
    agregarGanado(item, cantidad)
  }

  return (
    <div>
      <h2>{raza}</h2>
      <img src={img} width="400px" height="250px" alt={raza} />
      <p>Precio: ${precio}</p>
      <p>ID: {id}</p>
      <p>Stock disponible: {stock}</p>
      <p>Descripción: {descripcion}</p>

      {addCantidad > 0 ? ([<Link to="/camion"><button>Ver camión</button></Link>, <Link to="/"><button>Seguir comprando</button></Link>]) : <Contador inicial={1} stock={stock} add={handlerCantidad} />}
    </div>
  )
}

export default ItemDetalle