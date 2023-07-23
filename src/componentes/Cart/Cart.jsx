import { useContext } from "react";
import { CamionContext } from "../../Context/CamionContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { camion, vaciarCamion, total, cantidadTotal } = useContext(CamionContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2>Camión vacío</h2>
                <Link to="/"><button>Ver ganados</button></Link>
            </>
        )
    }
    return (
        <div>
            {camion.map(producto => <CartItem key={producto.id} {...producto} />)}
            <h3>Total: $ {total} </h3>
            <h3> Cantidad Total : {cantidadTotal}  </h3>
            <button onClick={() => vaciarCamion()} >Vaciar camión</button>
            <Link to="/checkout"><button>Ir a pagar</button></Link>
        </div>
    )
}

export default Cart