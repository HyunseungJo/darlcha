import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}></Route>
    </BrowserRouter>
  );
}

export default App;
