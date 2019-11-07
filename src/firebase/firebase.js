import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC4D4DRqvmYJVr-sCZgoe1qEP6Au9azp3w",
    authDomain: "react-login-679d8.firebaseapp.com",
    databaseURL: "https://react-login-679d8.firebaseio.com",
    projectId: "react-login-679d8",
    storageBucket: "react-login-679d8.appspot.com",
    messagingSenderId: "1055374582783",
    appId: "1:1055374582783:web:9cab715ed81c4389e47dca"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
export const config = firebaseConfig;