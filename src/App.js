import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage_comp";
import ShopPage from "./pages/shop_page/shop_comp";
import Header from "./components/header/header-comp.jsx";
import SignInSignUp from "./pages/signin_signup/signin_signup_comp.jsx";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;  //keep track of Auth user 

  //checks if user logsin or logs out and save the current user
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });
      console.log(user);
    });
  }

  //unsubribe user when component unmounts
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" exact component={ShopPage} />
          <Route path="/signin" exact component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
