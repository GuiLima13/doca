import React from "react"
import {connect} from "react-redux"

import './style.css'




const CardProdutos = ({active},props)=>{

    return (
        <view className="container_produto">
                <img alt="..." src={props.url}  className="img_produto"></img>
                    {console.log(props)}
                <p className="descricao_produto">{active}</p>
                <p className="nota_produto">estrelas</p>
                <p className="preco_produto">R$50,00</p>
                <form className="form_produto"> 
                    <input className="qtd_produto" type="number"></input>
                    <button className="add_produto">Compre agora</button>
                </form>
        </view>
    )
}

export default connect(state => ({active: state.categorias.active}))(CardProdutos)