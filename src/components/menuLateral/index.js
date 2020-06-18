import React from "react"

import { Link } from "react-router-dom"

import {connect} from "react-redux"

import * as CategoriasActions from "../../store/actions/categorias"

import './style.css'

const MenuLateral = ({categorias, dispatch}) => {
    return (
        <div className="div_carrousel_menu">
            <nav>
                <ul>
                    {
                        categorias.map(categoria => (

                            <li key={categoria.id}><Link className="link" onClick={()=> dispatch(CategoriasActions.toggleCategoria(categoria))} to="/produtos">{categoria.title}</Link></li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    );
}

export default connect(state => ({categorias: state.categorias.categorias}))(MenuLateral);