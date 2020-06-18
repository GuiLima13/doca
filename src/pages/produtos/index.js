import React from 'react'
import { Provider } from 'react-redux'

import store from '../../store'

import Header from "../../components/header"
import MenuLateral from "../../components/menuLateral"
import CardProdutos from "../../components/cardProdutos"
import MainProdutos from "../../components/mainProdutos"

const Produtos = () => {
    return (

        <div className="App">

            <Provider store={store}>

                <Header />
                    <MenuLateral />
                <MainProdutos>

                <CardProdutos  />
                <CardProdutos />
                <CardProdutos />

                </MainProdutos>
            </Provider>
        </div>

    );
}

export default Produtos