import React from 'react';
import './style.css';

const CardSobre = ()=>{
    return(
        <div className="div_container">
            <div className="card">
                <h1>Missão</h1>
                <p>Alegrar o paladar de nossos clientes,
                     através de sabores memoráveis, 
                     com produtos caseiros feitos com amor e 
                     com a qualidade que você e sua família merecem.</p>
            </div>
            <div className="card">
                <h1>Visão</h1>
                <p>Crescer e fidelizar clientes, tornando seus momentos 
                    especiais, únicos e saborosos, sendo referência no 
                    ramo alimentício de doces e salgados, com excelência 
                    e satisfação.</p>
            </div>
            <div className="card">
                <h1>Valores</h1>
                <p>Comprometimento </p>
                <p>  Respeito </p>
                <p>   Qualidade </p>
                <p>   Satisfação</p>
            </div>
        </div>
    )
}

export default CardSobre