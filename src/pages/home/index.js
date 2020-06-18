
import React from 'react';

import { Provider } from 'react-redux'

import store from '../../store'

import Header from '../../components/header'
import MenuLateral from '../../components/menuLateral'
import Carrossel from '../../components/carrossel'
import ContainerMenu from '../../components/containerMenu'
import CardSobre from '../../components/cardSobre'
import VitrineProdutos from '../../components/vitrineProdutos'


const Home = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <ContainerMenu>
          <MenuLateral />
          <Carrossel />
        </ContainerMenu>
        <CardSobre />
        <VitrineProdutos />
      </Provider>
    </div>
  );
}

export default Home