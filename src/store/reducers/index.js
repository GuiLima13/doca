

import {combineReducers} from 'redux'

import categorias from './categorias'
import carrinho from './carrinho'
import produto from './produto'

export default combineReducers({
    categorias,
    carrinho,
    produto,
});