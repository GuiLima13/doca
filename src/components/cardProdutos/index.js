import React from "react"

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as carrinhoActions from '../../store/actions/carrinho'

import './style.css'




const CardProdutos = (props)=>{

    const handleAddToCart = (e)=>{

        e.preventDefault()
        const produto = e.target.parentNode.parentNode.children
        props.addToCart({produto:produto[1].innerText,preco:produto[3].innerText})
    }
    
    return (
        <div className="container_produto">
                <img alt="..." src={props.url}  className="img_produto"></img>
                <p className="descricao_produto">{props.cat}</p>
                <p className="nota_produto">estrelas</p>
                <p className="preco_produto">R$50,00</p>
                <form className="form_produto"> 
                    <input placeholder="0" className="qtd_produto" type="number"></input>
                    <button className="add_produto" onClick={ handleAddToCart }>Compre agora</button>
                </form>
        </div>
    )
}


const mapDispatchToProps = dispatch => 
    bindActionCreators(carrinhoActions,dispatch)

export default connect(null, mapDispatchToProps)(CardProdutos)
