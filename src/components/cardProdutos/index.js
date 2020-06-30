import React,{useState} from "react"

import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


import {bindActionCreators} from 'redux'
import * as carrinhoActions from '../../store/actions/carrinho'

import './style.css'




const CardProdutos = (props)=>{
    const [qtde, setQtde] = useState(0)
    const handleAddToCart = (e)=>{
        e.preventDefault()
        const produto = e.target.parentNode.parentNode.children
        
        
        if(qtde > 0){

            
        props.addToCart({produto:produto[1].innerText,
            preco:produto[3].innerText,
            quantidade:qtde})
        }
    }
    
    return (
        <div className="container_produto">
                <Link to="/detalhes"><img alt="..." src={props.url}   className="img_produto"></img></Link>
                <p className="descricao_produto">{props.cat}</p>
                <p className="nota_produto">estrelas</p>
                <p className="preco_produto">R$50,00</p>
                <form className="form_produto"> 
                    <input placeholder="1" min="1" className="qtd_produto" onChange={(e)=>setQtde(e.target.value)} type="number"></input>
                    <button className="add_produto" onClick={ handleAddToCart }>Compre agora</button>
                </form>
        </div>
    )
}


const mapDispatchToProps = dispatch => 
    bindActionCreators(carrinhoActions,dispatch)

export default connect(state => ({carrinho: state.carrinho}), mapDispatchToProps)(CardProdutos)
