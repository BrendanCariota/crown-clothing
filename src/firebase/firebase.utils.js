import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC-VziX4kBlZ3jDX0TiOkEbFoFsTUNiXEc",
  authDomain: "crown-db-bad60.firebaseapp.com",
  databaseURL: "https://crown-db-bad60.firebaseio.com",
  projectId: "crown-db-bad60",
  storageBucket: "crown-db-bad60.appspot.com",
  messagingSenderId: "364930128789",
  appId: "1:364930128789:web:56ea2f79e308f28b41b49c",
  measurementId: "G-BC3DGBNQWY",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
