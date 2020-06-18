import React from "react"
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import * as CategoriasActions from "../../store/actions/categorias"

import './style.css'


const Header = ({categorias,dispatch})=>{
    return(
            <header>
                <img alt="..." className="img_logo" src="/images/logo.png"></img>
                <div className="header_nav_topMenu">

                    <div  className="div_desktop">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                        
                        <span>Ver Categorias</span>
                    </div>

                    <nav data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado"  className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="div_options">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                                <span className="button_menu navbar-toggler-icon"></span>
                            </button>
                            <span>Ver Categorias</span>
                        </div>
                        

                        <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
                            <ul className="navbar-nav mr-auto">
                            {
                                categorias.map(categoria => (
                                    <li key={categoria.id}><Link className="link" onClick={()=> dispatch(CategoriasActions.toggleCategoria(categoria))} to="/produtos">{categoria.title}</Link></li>

                                ))
                            }
                                
                            </ul>
                        </div>
                    </nav>
                    

                    <div className='div_carrinho'>
                        <nav>
                            <ul>
                                <li><i className="fa fa-shopping-basket" aria-hidden="true"></i></li>
                                <li><i className="fa fa-user-plus" aria-hidden="true"></i></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
    );
}

export default  connect(state => ({categorias: state.categorias.categorias}))(Header);