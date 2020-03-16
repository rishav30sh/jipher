import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/firebase-auth";

const config = {
  apiKey: "AIzaSyCYMoevqQGYuJhEpTABdKPYhhKVWeFQO7k",
  authDomain: "jipher-3558.firebaseapp.com",
  databaseURL: "https://jipher-3558.firebaseio.com",
  projectId: "jipher-3558",
  storageBucket: "jipher-3558.appspot.com",
  messagingSenderId: "291679163125",
  appId: "1:291679163125:web:ab27917522b1a55efd6bbc",
  measurementId: "G-7N0062V1TX"
};

firebase.initializeApp(config); // initialize the App

const auth = firebase.auth(); //Sets up the Firebase Auth and provides functionality related to current user
const firestore = firebase.firestore(); //Setsup the Frebase Firestore
const provider = new firebase.auth.GoogleAuthProvider(); //new window to prompt login using google/twitter or any other method
provider.setCustomParameters({ prompt: "select_account" }); // prompts a new window to login


//Function called to Signin using Google Account prompt, wherever needed !!
const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export { auth, firestore, signInWithGoogle };

export default firebase;
