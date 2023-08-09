import React from 'react'
import ItemDetalle from '../ItemDetalle/ItemDetalle'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/config'

const ItemDetalleContainer = () => {
    const [ganado, setGanado] = useState("")
    const {idGanado} = useParams();

    useEffect(
      ()=>{
        const nuevoDoc = doc(db, "misganados", idGanado)
        getDoc(nuevoDoc)
      .then(
        res=>{
          const data = res.data();
          const nuevoGanado = {id: res.id, ...data}
          setGanado(nuevoGanado)
        }
      )
      .catch(
        error=>console.log(error)
      )
      }, [idGanado]
    )

  return (
    <div>
        <ItemDetalle {...ganado}/>
    </div>
  )
}

export default ItemDetalleContainer