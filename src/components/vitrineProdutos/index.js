import React from 'react'

import './style.css'

const VitrineProdutos = ()=>{
    return(
        <div className="prd_container">
            
            <div>
                <img className="img" alt='' src="/images/brigadeiro.jpg"></img>
                <div className="conteudo">
                    <p >Brigadeiro</p>
                    <span>veja os sabores</span>
                </div>
                <img className="img" alt='' src="/images/brigadeiro.jpg"></img>
                <div className="conteudo">
                    <p>Cupcakes</p>
                    <span>veja os sabores</span>
                </div>
                <div className="conteudo2">
                    
                    <p className="p2">Tortas</p>
                    <span>veja os sabores</span>

                </div>
                <img className="img"  alt='' src="/images/brigadeiro.jpg"></img>
                <div className="conteudo2">
                    
                    <p>Salgados</p>
                    <span>veja os sabores</span>

                </div>
                <img className="img" alt='' src="/images/brigadeiro.jpg"></img>
            </div>
        </div>
    )
}

export default VitrineProdutos