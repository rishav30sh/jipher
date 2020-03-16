import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage_comp";
import ShopPage from './pages/shop_page/shop_comp';
import Header from './components/header/header-comp.jsx'
function App() {
  return (
    <div className="App">
    <Header/>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" exact component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
