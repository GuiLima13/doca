import React from 'react';
import {Link} from 'react-router-dom';
import './style.css'

const FooterCarrinho = ()=>{
    return(
        <footer className="footer_carrinho">
            <div className="div_logo_pagamento">
                <img alt="..." src="./images/mercadopago.png"></img>
                <img alt="..." src="./images/pagseguro.png"></img>
            </div>
            <div className="div_btn_cupom">
                <button>Adicionar Cupom</button>
            </div>
            <div className="div_valorTotal">
                <span>Subtoal</span>
                <span>Entrega</span>
                <span>Preço total</span>
            </div>
            <div className="div_btn_finalizar">
            <Link to="/">Continuar Comprando</Link>
            <Link>Finalizar Compra</Link>
            </div>
        </footer>
    )
}

export default FooterCarrinho;