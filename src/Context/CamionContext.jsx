import { useState, createContext } from "react";
import React from "react";

export const CamionContext = createContext({
    camion: [],
    total: 0,
    cantidadTotal: 0
})

export const CamionProvider = ({ children }) => {
    const [camion, setCamion] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    console.log(camion);

    const agregarGanado = (item, cantidad) => {
        const ganadoExistente = camion.find(
            prod => prod.item.id === item.id
        );
        if (!ganadoExistente) {
            setCamion(
                prev => [...prev, { item, cantidad }])
            setCantidadTotal(
                prev => prev + cantidad)
            setTotal(
                prev => prev + (item.precio * cantidad))

        } else {
            const camionActualizado = camion.map(
                prod => {
                    if (prod.item.id === item.id) {
                        return { ...prod, cantidad: prod.cantidad + cantidad }
                    } else {
                        return prod;
                    }
                }
            )
            setCamion(camionActualizado);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => (item.precio * cantidad))
        }
    }
    const eliminarGanado = (id) => {
        const ganadoEliminado = camion.find(
            prod => prod.item.id === id
        )
        const camionActualizado = camion.filter(
            prod => prod.item.id !== id
        )
        setCamion(camionActualizado)
        setCantidadTotal(
            prev => prev - ganadoEliminado.cantidad
        )
        setTotal(
            prev => prev - (ganadoEliminado.item.precio * ganadoEliminado.cantidad)
        )
    }

    const vaciarCamion = () => {
        setCamion([])
        setCantidadTotal(0);
        setTotal(0);
    }

    return (
        <CamionContext.Provider value={{
            camion, total, cantidadTotal,
            agregarGanado, eliminarGanado, vaciarCamion
        }}>
            {children}
        </CamionContext.Provider>
    )

}