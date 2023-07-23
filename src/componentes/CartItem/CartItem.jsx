import React from 'react'
import { useContext } from 'react'
import { CamionContext } from '../../Context/CamionContext'
import "./CartItem.css"

const CartItem = ({ item, cantidad }) => {
  const { eliminarGanado } = useContext(CamionContext)
  return (
    <div>
      <div className='contenedor-cart'>
        <div className="cartitem">
          <h3>Raza: {item.raza}</h3>
          <p>Cantidad: {cantidad}</p>
          <p>Precio: {item.precio}</p>
          <button onClick={() => eliminarGanado(item.id)}>Quitar del camión</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem