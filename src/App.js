import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage_comp";
import ShopPage from "./pages/shop_page/shop_comp";
import Header from "./components/header/header-comp.jsx";
import SignInSignUp from "./pages/signin_signup/signin_signup_comp.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      //if User Auth exists, i.e new user has signed in
      if (userAuth){
        //store user in database
        const userRef= await createUserProfileDocument(userAuth)  

         //onSnaphot is to get real time data from firestore
         //snapshot is created on userRef that is docRef of that partifular userID
         //snapshot.data() retrives real time updates.
        userRef.onSnapshot(snapshot=>{                           
          this.setState({
            currentUser: {
              id:snapshot.id,
              ...snapshot.data()
            }
          }, ()=> console.log(this.state) )
        })
        
      }
      else this.setState({currentUser:userAuth})
      
  })
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
