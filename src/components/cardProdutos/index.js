import React from "react"
import {connect} from "react-redux"

import './style.css'




const CardProdutos = ({active})=>{

    return (
        <div className="container_produto">
                <div className="img_produto"></div>
                <p className="descricao_produto">{active}</p>
                <p className="nota_produto">estrelas</p>
                <p className="preco_produto">R$50,00</p>
                <form className="form_produto"> 
                    <input className="qtd_produto" type="number"></input>
                    <button className="add_produto">Compre agora</button>
                </form>
        </div>
    )
}

export default connect(state => ({active: state.categorias.active}))(CardProdutos)