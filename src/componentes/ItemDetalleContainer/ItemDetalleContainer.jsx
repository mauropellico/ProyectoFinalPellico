import React from 'react'
import ItemDetalle from '../ItemDetalle/ItemDetalle'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getUnGanado } from '../../asyncMock'

const ItemDetalleContainer = () => {
    const [ganado, setGanado] = useState("")
    const {idGanado} = useParams();


    useEffect(
        ()=>{
            getUnGanado(idGanado)
            .then(res=> setGanado(res))
            .catch(error=>console.log(error))
        }, [idGanado]
    )

  return (
    <div>
        <ItemDetalle {...ganado}/>
    </div>
  )
}

export default ItemDetalleContainer