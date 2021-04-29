import firebase from "firebase"
import "firebase/firestore";
import "firebase/auth";
const app=firebase.initializeApp({
    apiKey: "AIzaSyD3MavyNU3oBQTeXb-koNbYE3Xd7Uk_8ZM",
    authDomain: "auth-c66dc.firebaseapp.com",
    projectId: "auth-c66dc",
    storageBucket: "auth-c66dc.appspot.com",
    messagingSenderId: "8239727646",
    appId: "1:8239727646:web:ec90074ec964a358421a0f"
  });
  export default  app;

  //app.auth().signOut()