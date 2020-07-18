import React,{useState} from "react"

import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


import api from '../../services/api'

import {bindActionCreators} from 'redux'
import * as carrinhoActions from '../../store/actions/carrinho'
import * as ProdutoActions from '../../store/actions/produto'

import './style.css'




const CardProdutos = (props)=>{
    const [qtde, setQtde] = useState(1)
    const handleAddToCart = (e)=>{
        e.preventDefault()
        const produto = e.target.parentNode.parentNode.children
        console.log(produto[3].children)
        props.dispatch(carrinhoActions.addToCart({id:e.target.parentNode.parentNode.id,
            desc:produto[1].innerText,
            preco:produto[3].children[1].innerText,
            tipoUnidade:produto[3].children[3].innerText,
            quantidade:qtde}))
        
    }
    
    return (
        <div id={props.id} className="container_produto">
                <Link
                 onClick={(e)=>( 
                    api.get('/produto'+e.target.parentNode.parentNode.id).then(res=>{
                    
                        props.dispatch(ProdutoActions.addToProductSelected(res.data[0]))
                        console.log(res.data[0])
                    })
                     //props.dispatch(ProdutoActions.addToIndexProductSelected(e.target.parentNode.parentNode.id)
                     /*localStorage.setItem("produto",e.target.parentNode.parentNode.id)*/)} 
                 to="/detalhes"><img alt="..." 
                 src={props.url}   
                 className="img_produto"></img></Link>
                <p className="descricao_produto">{props.nome}</p>
                <p className="nota_produto">estrelas</p>

                <div className="precoProduto">
                <span>R$</span>
                <p className="preco_produto">{props.preco}</p>
                <span>/</span>
                <span>{props.tipoUnidade}</span>
                </div>
                <form className="form_produto"> 
                    <input placeholder="1" min="1" className="qtd_produto" onChange={(e)=>setQtde(e.target.value)} type="number"></input>
                    <button className="add_produto" onClick={ handleAddToCart }>Compre agora</button>
                </form>
        </div>
    )
}



export default connect(state => ({carrinho: state.carrinho}))(CardProdutos)
