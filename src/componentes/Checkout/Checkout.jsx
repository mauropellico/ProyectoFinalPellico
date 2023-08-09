import React from 'react'
import { useState, useContext } from 'react'
import { CamionContext } from '../../Context/CamionContext'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../services/config'
import { Link } from 'react-router-dom'

const Checkout = () => {
    const { camion, vaciarCamion, cantidadTotal } = useContext(CamionContext)
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [mail, setMail] = useState("");
    const [confirmarMail, setConfirmarMail] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");
    const formDriver = (e) => {
        e.preventDefault();
        if (!nombre || !apellido || !telefono || !mail || !confirmarMail) {
            setError("Faltan campos por completar");
            return;
        }
        if (mail !== confirmarMail) {
            setError("Los emails no coinciden entre sí")
            return;
        }
        const order = {
            items: camion.map(
                prod => ({
                    id: prod.item.id,
                    raza: prod.item.raza,
                    cantidad: prod.cantidad

                })

            ),
            total: cantidadTotal,
            nombre,
            apellido,
            telefono,
            mail
        }
        addDoc(collection(db, "ordencompras"), order)
            .then(
                docRef => {
                    setOrderId(docRef.id)
                    vaciarCamion();
                }
            )
            .catch(
                error => {
                    setError("Hubo un error")
                    console.log("Error", error)
                }
            )
    }

    return (
        <div>
            <h2>Check</h2>
            <form onSubmit={formDriver}>
                {camion.map(
                    prod => (
                        <div>
                            <p>
                                {prod.item.raza} x {prod.cantidad}
                            </p>
                            <p>
                                Precio: ${prod.item.precio}
                            </p>
                        </div>
                    )
                )}
                <div>
                    <p>Total: {cantidadTotal} ganados</p>
                </div>
                <div>
                    <label htmlFor="">Nombre</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={
                            (e) => setNombre(e.target.value)
                        }
                    ></input>
                </div>
                <div>
                    <label htmlFor="">Apellido</label>
                    <input
                        type="text"
                        value={apellido}
                        onChange={
                            (e) => setApellido(e.target.value)
                        }
                    ></input>
                </div>
                <div>
                    <label htmlFor="">Teléfono/Celular</label>
                    <input
                        type="number"
                        value={telefono}
                        onChange={
                            (e) => setTelefono(e.target.value)
                        }
                    ></input>
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input
                        type="email"
                        value={mail}
                        onChange={
                            (e) => setMail(e.target.value)
                        }
                    ></input>
                </div>
                <div>
                    <label htmlFor="">Confirmar email</label>
                    <input
                        type="email"
                        value={confirmarMail}
                        onChange={
                            (e) => setConfirmarMail(e.target.value)
                        }
                    ></input>
                </div>
                {
                    error && <p style={{ color: "red" }}>{error}</p>
                }
                <button type="submit">Finalizar compra</button>
            </form>
            {
                orderId && (<h3>Gracias por su compra. Número de órden: {orderId}</h3>)
            }
        </div>
    )
}

export default Checkout