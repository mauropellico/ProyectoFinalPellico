import React from 'react'
import "./NavBar.css"
import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
            <header>
                <Link to="/"><h1>Ganados Online</h1></Link>
                <nav>
                    <ul>
                        <NavLink to ="/categoria/vacunos"><li>Vacunos</li></NavLink>
                        <NavLink to ="/categoria/ovinos"><li>Ovinos</li></NavLink>
                        <NavLink to ="/categoria/porcinos"><li>Porcinos</li></NavLink>
                    </ul>
                </nav>
                <CartWidget/>
            </header>
    )
}

export default NavBar