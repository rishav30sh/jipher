import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage_comp";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
