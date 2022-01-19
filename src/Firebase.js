import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbVe4hJMONuMGNJ_p0yka-bPMgwZD1Yxw",
  authDomain: "justan0theramaz0nclone.firebaseapp.com",
  projectId: "justan0theramaz0nclone",
  storageBucket: "justan0theramaz0nclone.appspot.com",
  messagingSenderId: "319279830436",
  appId: "1:319279830436:web:52fddf4ce701f735d61d31",
  measurementId: "G-0XFH3DD9ZY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
