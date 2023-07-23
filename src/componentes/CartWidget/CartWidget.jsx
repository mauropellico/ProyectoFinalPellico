import React from 'react'
import { useContext } from 'react';
import { CamionContext } from '../../Context/CamionContext';
import { Link } from 'react-router-dom';
import "./CartWidget.css"

const CartWidget = () => {
    const { cantidadTotal } = useContext(CamionContext)
    const camionJaula = "../img/camion_jaula.svg";

    return (
        <div>
            <Link to="/camion">
                <div className="recuadro-camion">
                    <img src={camionJaula}></img>
                    {
                        <p>{cantidadTotal}</p>
                    }
                </div>
            </Link>
        </div>
    )
}
export default CartWidget