import React from 'react'

import './style.css'

const ModalCarrinho = (props) => {

    

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
                    <div className="total_carrinho modal-body">
                        <div>
                            <span>Qtd: 10kg</span>
                            <span>  Produto: Bolo</span>
                        </div>
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


export default ModalCarrinho