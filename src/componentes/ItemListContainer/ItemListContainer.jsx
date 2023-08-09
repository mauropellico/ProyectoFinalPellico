import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/config'
import "./ItemListContainer.css"


const ItemListContainer = () => {
  const [ganados, setGanados] = useState([])
  const { idCategoria } = useParams();
  useEffect(
    () => {
      const misGanados = idCategoria ? query(collection(db, "misganados"), where("razaCat", "==", idCategoria)) : collection(db, "misganados");
      getDocs(misGanados)
        .then(
          res => {
            const nuevosGanados = res.docs.map(
              doc => {
                const data = doc.data();
                return { id: doc.id, ...data }
              }
            )
            setGanados(nuevosGanados)
          }
        )
        .catch(
          error => console.log(error)
        )
    }, [idCategoria]
  )
  return (
    <>
      <div className="catalogo-item">
        <h2>Catálogo</h2>
          <ItemList ganados={ganados} />
      </div>
    </>
  )
}

export default ItemListContainer