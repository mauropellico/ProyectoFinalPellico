import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Item.css"

const Item = ({ id, raza, precio, img }) => {
  return (
    <div>
      <img src={img} width="400px" height="250px" />
      <h3>Raza: {raza}</h3>
      <p>Precio: ${precio}</p>
      <p>Nº: {id}</p>
      <div className='botones'>
        <Link to={`/item/${id}`}><button>Ver detalles</button></Link>
      </div>
    </div>
  )
}

export default Item