import React from 'react'
import { Provider } from 'react-redux'

import store from '../../store'

import Header from "../../components/header"
import MenuLateral from "../../components/menuLateral"
import MainDetalheProduto from "../../components/mainDetalheProduto"

const ProdutoDetalhe = () => {
    return (

        <div className="App">

            <Provider store={store}>

                <Header />
                    <MenuLateral />

            <MainDetalheProduto/>
            </Provider>
            
        </div>

    );
}

export default ProdutoDetalhe