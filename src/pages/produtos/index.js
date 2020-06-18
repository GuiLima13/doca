import React from 'react'
import { Provider } from 'react-redux'

import store from '../../store'

import Header from "../../components/header"
import MenuLateral from "../../components/menuLateral"
import GridProdutos from "../../components/gridProdutos"
import MainProdutos from "../../components/mainProdutos"

const Produtos = () => {
    return (

        <div className="App">

            <Provider store={store}>

                <Header />
                    <MenuLateral />
                <MainProdutos>

                </MainProdutos>
                
                <GridProdutos />

            </Provider>
        </div>

    );
}

export default Produtos