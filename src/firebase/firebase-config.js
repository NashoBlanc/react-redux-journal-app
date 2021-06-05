import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const  firebaseConfig = {
    apiKey: "AIzaSyAxYkC5pCZcYeS0e01zLuj6iMAn28BNWEk",
    authDomain: "react-app-cursos-6a4ce.firebaseapp.com",
    projectId: "react-app-cursos-6a4ce",
    storageBucket: "react-app-cursos-6a4ce.appspot.com",
    messagingSenderId: "1032408594534",
    appId: "1:1032408594534:web:b8cc91e93760166cb815a7"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {db, googleAuthProvider, firebase}