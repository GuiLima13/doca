import React from "react"

import {Link} from "react-router-dom"

import './style.css'

const Header = ()=>{
    return(
        <div className="div_carrousel_menu">
            <nav>
                <ul>
                    <li><Link to="/produtos">Bolos</Link></li>
                    <li>Bolos de Pote</li>
                    <li>Cupcake</li>
                    <li>Doces</li>
                    <li>Salgados</li>
                    <li>Tortas</li>
                    <li>Sua Festa</li>
                </ul>
            </nav>
        </div>
    );
}

export default  Header;