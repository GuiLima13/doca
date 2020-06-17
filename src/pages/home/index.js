
import React from 'react';


import Header from '../../components/header'
import MenuLateral from '../../components/menuLateral'
import Carrossel from '../../components/carrossel'
import ContainerMenu from '../../components/containerMenu'
import CardSobre from '../../components/cardSobre'
import VitrineProdutos from '../../components/vitrineProdutos'


const Home = ()=>{
    return (
    <div className="App">
        <Header/>
        <ContainerMenu>
        <MenuLateral/>
        <Carrossel/>
        </ContainerMenu>
        <CardSobre/>
        <VitrineProdutos/>
    </div>
  );
}

export default Home