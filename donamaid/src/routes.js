import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

import Home from "./pages/home";
import Registro from "./pages/Cadastro";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Cadastro" component={Registro} />
      </Switch>
    </Router>
  );
}
