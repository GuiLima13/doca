import React from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/home";

import Produtos from "./pages/produtos";

 const Routes = ()=>{
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/produtos" component={Produtos} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes