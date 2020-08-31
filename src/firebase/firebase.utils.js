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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error createing user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
