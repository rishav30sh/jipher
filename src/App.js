import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/homepage_comp";
import ShopPage from "./pages/shop_page/shop_comp";
import Header from "./components/header/header-comp.jsx";
import SignInSignUp from "./pages/signin_signup/signin_signup_comp.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { SelectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import Checkout from "./pages/checkout/checkout.component";
import { selectCollectionForPreview } from "./redux/shopData/shopData-selector";

class App extends React.Component {
  unsubscribeFromAuth = null; //keep track of Auth user

  //checks if user logsin or logs out and save the current user
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //if User Auth exists, i.e new user has signed in
      if (userAuth) {
        //store user in database
        const userRef = await createUserProfileDocument(userAuth);

        //onSnaphot is to get real time data from firestore
        //snapshot is created on userRef that is docRef of that partifular userID
        //snapshot.data() retrives real time updates.
        userRef.onSnapshot(snapshot => {
          this.props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else this.props.setCurrentUser(userAuth);

      

        // code to add collections in firebase from redux 'addCollectionsAndDocument' is 
       //  imported deom firebase,utils and  collectionArray is imported from 'shopcollectionselector    
      //   addCollectionAndDocuments(
     //   "collections",
    //    collectionsArray.map(({items, title})=>{return {items, title}})
   //  );
    
    
    });
  }

  //unsubribe user when component unmounts
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            path="/signin"
            exact
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
            }
          />
          <Route path="/checkout" exact component={Checkout} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: SelectCurrentUser,
  collectionsArray: selectCollectionForPreview
});

export default connect(mapStateToProps, { setCurrentUser })(App);
