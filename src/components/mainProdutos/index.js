import React from 'react';
import './style.css';

import {connect} from "react-redux"

import CardProdutos from "../../components/cardProdutos"

const CardSobre = ({active})=>{
    

    return(
        
        <main className="main_produtos">
            <CardProdutos cat={active} url={"../../images/cupecake1.jpg"} />
            <CardProdutos cat={active} url={"../../images/cupecake1.jpg"} />
            <CardProdutos cat={active} url={"../../images/cupecake1.jpg"} />
            <CardProdutos cat={active} url={"../../images/cupecake1.jpg"} />
        </main>
        
    )
}

export default connect(state => ({active: state.categorias.active}))(CardSobre)