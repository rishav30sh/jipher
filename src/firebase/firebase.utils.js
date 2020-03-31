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

//input new document in collection "users"
const createUserProfileDocument = async (user, additionalDate) => {
  //if user object is null, then return. if not, create a new user doc.
  if (!user) return;

  //Runs, only if new user has autenticated using google O'Auth
  //create a docRef from userID, docRef is used for CRUD operation,
  //docRef doesn't revert bac actual data.
  const userRef = firestore.doc(`/users/${user.uid}`);

  //create a snapshot from userID, snapshot is used to retrive actual data
  // & check if userID exists or not.
  //"exists" property will be empty, if no data exists corresponding to that userID snapshot.
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalDate
      });
    } catch (err) {
      console.log("User cannot be created", err);
    }
  }
  return userRef;
};

//adding data 'objectToAdd' from collection in redux to firebase, collectionKey is name
//of collection..firebstore.batch() is used to put multiple requests inside "map" to firebase,
//all data is saved.
//export const addCollectionAndDocuments = async (CollectionKey,objectsToAdd) =>{

// const collectionRef=firestore.collection(CollectionKey)

// const batch = firestore.batch();
// objectsToAdd.forEach(obj=>{
//   const newDocRef=collectionRef.doc()
//  batch.set(newDocRef, obj)
//})
//  return await batch.commit()
//}

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollections = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export { auth, firestore, signInWithGoogle, createUserProfileDocument };

export default firebase;
