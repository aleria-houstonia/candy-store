import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBsY58zEjRt9jCRvBP_PsAt5Xlp2AN5PRM",
    authDomain: "auth-hackathon.firebaseapp.com",
    projectId: "auth-hackathon",
    storageBucket: "auth-hackathon.appspot.com",
    messagingSenderId: "152690045192",
    appId: "1:152690045192:web:e20049164a376b5877bcbd",
});

export const firestore = app.firestore();
export const auth = app.auth();
export default app;
