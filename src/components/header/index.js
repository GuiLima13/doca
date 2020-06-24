import React from "react"
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import * as CategoriasActions from "../../store/actions/categorias"

import ModalCarrinho from '../modalCarrinho'

import './style.css'


const Header = (props)=>{

    return(
            <header>
                <Link to="/"><img alt="..." className="img_logo" src="/images/logo.png"></img></Link>
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
                                props.categorias.map(categoria => (
                                    <li key={categoria.id}><Link className="link" onClick={()=> props.dispatch(CategoriasActions.toggleCategoria(categoria))} to="/produtos">{categoria.title}</Link></li>
                                ))
                            }
                                
                            </ul>
                        </div>
                    </nav>
                    

                    <div className='div_carrinho'>
                        <nav>
                            <ul>
                    <li className="div_carrinho_cesta"><i data-toggle="modal" data-target="#exampleModal" className="fa fa-shopping-basket" aria-hidden="true"></i><span>{props.carrinho.length}</span></li>
                                
                                
                                <li><i className="fa fa-user-plus" aria-hidden="true"></i></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <ModalCarrinho qtdItens={props.carrinho.length}/>
            </header>
    );
}

export default  connect(state => ({
    categorias: state.categorias.categorias,
    carrinho: state.carrinho
    }))(Header);