import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './style.css'


import {bindActionCreators} from 'redux'
import * as carrinhoActions from '../../store/actions/carrinho'

const ModalCarrinho = (props) => {


    const handleRemoveToCart = (e)=>{
        props.removeToCart(e.target.parentNode.classList[0])
        
        //console.log(e.target.parentNode.remove())
    }

    return (
        <div className="modal_carrinho_container px-0 modal " id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="my-0  modal-dialog">
                <div className=" modal_carrinho modal-content">
                    <div className="header_carrinho modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Sua Cesta</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="total_itens_total_carrinho">
                        <div className="total_itens_carrinho_texto">
                            <p>Voce tem:</p>
                            <p>{props.qtdItens} itens na cesta:</p>
                        </div>
                        <div className="total_itens_carrinho_icon">
                            <i className="fa fa-shopping-bag"></i>
                        </div>
                    </div>
                    <div className="total_carrinho modal-body" >
                        {
                            props.carrinho.map((produto,index)=>{
                                return (
                                    <div className={index} key={index}>
                                    <i onClick={handleRemoveToCart}
                                     className="fa fa-times"></i>
                                    <span ><strong>{produto.produto}</strong> </span>
                                    <span className="lowerCase">{produto.quantidade}  un    x</span>
                                    
                                    <span> {produto.preco}</span>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                    <div className="modal_carrinho_valor_total">
                        <span>Total: 1000</span>
                    </div>
                    <div className="botao_carrinho_container modal-footer">
                        <button type="button" className="botao_carrinho btn " data-dismiss="modal">Comprar mais produtos</button>
                        <button    type="button"  className="botao_carrinho btn "><a className="link_carrinho " href="/carrinho" >Finalizar meu pedido</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => 
    bindActionCreators(carrinhoActions,dispatch)

export default connect(state => ({carrinho: state.carrinho}),mapDispatchToProps)(ModalCarrinho)