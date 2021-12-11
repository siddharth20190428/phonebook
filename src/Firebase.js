import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDAeyPXmUBMXRXvWKO7e1p_ymADQ-sex9w",
  authDomain: "phonebook-341f9.firebaseapp.com",
  projectId: "phonebook-341f9",
  storageBucket: "phonebook-341f9.appspot.com",
  messagingSenderId: "123634440832",
  appId: "1:123634440832:web:9175ae27b13dd66538e465",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
