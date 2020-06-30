import React from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/home";

import Produtos from "./pages/produtos";

import Carrinho from "./pages/carrinho";
import ProdutoDetalhe from "./pages/produtoDetalhe";

 const Routes = ()=>{
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/produtos" component={Produtos} />
        <Route path="/carrinho" component={Carrinho} />
        <Route path="/detalhes" component={ProdutoDetalhe} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes