import React,{useState} from 'react'
import {connect} from 'react-redux'
import './style.css'

const ModalCarrinho = (props) => {

    const [qtde, setQtde] = useState(0)

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
                                    <div key={index}>
                                    <i className="fa fa-times"></i>
                                    <span><strong>{produto.produto}</strong> </span>
                                    <input value={produto.quantidade}
                                     onChange={(e)=>setQtde(e.target.value)} 
                                     type="number"></input>
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
                        <button type="button" className="botao_carrinho btn ">Finalizar meu pedido</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default connect(state => ({carrinho: state.carrinho}))(ModalCarrinho)