import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Item.css"

const Item = ({ id, raza, precio, img }) => {
  return (
    <>
      <div className="item-item">
        <h3>{raza}</h3>
        <img src={img} width="400px" height="250px" alt={raza} />
        <p>Precio: ${precio}</p>
        <p>ID: {id}</p>
        <div className='botones'>
          <Link to={`/item/${id}`}><button>Ver detalles</button></Link>
        </div>
      </div>
    </>
  )
}

export default Item