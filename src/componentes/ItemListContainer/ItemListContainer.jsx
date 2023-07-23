import React from 'react'
import { useState, useEffect } from 'react'
import { getGanadoCategoria, getGanados } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const [ganados, setGanados] = useState([])
  const { idCategoria } = useParams();
  useEffect(
    () => {
      const funcionPrincipal = idCategoria ? getGanadoCategoria : getGanados;
      funcionPrincipal(idCategoria)
        .then(res => setGanados(res))
        .catch(error => console.log(error))

    }, [idCategoria]
  )
  return (
    <div>
      <h2>Catálogo</h2>
      <ItemList ganados={ganados} />
    </div>
  )
}

export default ItemListContainer