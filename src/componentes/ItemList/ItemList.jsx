import React from 'react'
import Item from '../Item/Item'
import "./ItemList.css"

const ItemList = ({ ganados }) => {
  return (
    <div>
      <div className="fragmento">
        {ganados.map(gan => <Item key={gan.id} {...gan} />)}
      </div>
    </div>
  )
}

export default ItemList