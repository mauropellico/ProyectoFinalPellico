import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetalleContainer from './componentes/ItemDetalleContainer/ItemDetalleContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CamionProvider } from './Context/CamionContext'
import Cart from './componentes/Cart/Cart'
import Checkout from './componentes/Checkout/Checkout'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CamionProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
            <Route path="/item/:idGanado" element={<ItemDetalleContainer />} />
            <Route path="/camion" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
        </CamionProvider>
      </BrowserRouter>
    </div>
  )
}

export default App