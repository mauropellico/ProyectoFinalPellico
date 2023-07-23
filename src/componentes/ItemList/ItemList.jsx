import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ganados}) => {
  return (
    <div>
        {ganados.map(gan=> <Item key={gan.id} {...gan}/>)}
    </div>
  )
}

export default ItemList