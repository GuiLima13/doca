

import {combineReducers} from 'redux'

import categorias from './categorias'
import carrinho from './carrinho'

export default combineReducers({
    categorias,
    carrinho,
});