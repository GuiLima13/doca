import React from 'react'
import { connect } from 'react-redux'
import './style.css'


import { bindActionCreators } from 'redux'
import * as carrinhoActions from '../../store/actions/carrinho'

const MainCarrinho = (props) => {
    const handleRemoveToCart = (e)=>{
        props.removeToCart(e.target.parentNode.parentNode.classList[0]);
    }
    return (
        <main className="container_main_carrinho">
            <table className="table_carrinho">
                <thead  >
                    <th  className="th_produto"> Produto</th>
                    <th className="th_preco">Preço</th>
                    <th className="th_qtd">Qtde.</th>
                    <th className="th_total"> Total</th>
                    <th className="th_excluir"></th>
                </thead >
                {
                    props.carrinho.map((produto, index) => {
                        return (

                                    <tr className={index} key={index}>
                                        <td>{produto.produto}</td>
                                        <td>{produto.preco}</td>
                                        <td>{produto.quantidade} un</td>
                                        <td>R$100</td>
                                        <td className="td_excluir"><i onClick={handleRemoveToCart}
                                                                     className="fa fa-times"></i></td>
                                    </tr>
                                )
                    })
                }
            </table>
        </main>
    )

}

const mapDispatchToProps = dispatch =>
    bindActionCreators(carrinhoActions, dispatch)

export default connect(state => ({ carrinho: state.carrinho }), mapDispatchToProps)(MainCarrinho);