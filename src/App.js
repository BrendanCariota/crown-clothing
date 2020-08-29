import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
