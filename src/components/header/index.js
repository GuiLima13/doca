import React from "react"
import './style.css'

const Header = ()=>{
    return(
            <header>
                <img className="img_logo" alt=''  src="/images/logo.png"></img>
                <div className="header_nav_topMenu">

                    <div  className="div_desktop">
                        <i class="fa fa-bars" aria-hidden="true"></i>
                        
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
                                <li className="nav-item active">
                                    <a href='/' className="nav-link" >Bolos</a>
                                </li>
                                <li className="nav-item">
                                    <a  href='/' className="nav-link" >Bolos de Pote</a>
                                </li>
                                <li className="nav-item active">
                                    <a  href='/' className="nav-link" >Cupcake</a>
                                </li>
                                <li className="nav-item">
                                    <a  href='/' className="nav-link" >Doces</a>
                                </li>
                                <li className="nav-item active">
                                    <a  href='/' className="nav-link" >Salgados</a>
                                </li>
                                <li className="nav-item">
                                    <a href='/'  className="nav-link" >Tortas</a>
                                </li>
                                <li className="nav-item">
                                    <a  href='/' className="nav-link" >Sua Festa</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    

                    <div className='div_carrinho'>
                        <nav>
                            <ul>
                                <li><i class="fa fa-shopping-basket" aria-hidden="true"></i></li>
                                <li><i class="fa fa-user-plus" aria-hidden="true"></i></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
    );
}

export default  Header;