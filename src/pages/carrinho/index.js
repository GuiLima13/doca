import React from 'react'
import { Provider } from 'react-redux'

import store from '../../store'

import HeaderCarrinho from '../../components/headerCarrinho'
import MainCarrinho from '../../components/mainCarrinho'

const Carrinho = () => {
    return (
        <Provider store={store}>
            <div className="App">

                <HeaderCarrinho />
                <MainCarrinho />

            </div>
        </Provider>
    );
}

export default Carrinho