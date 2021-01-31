// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCKp3LTTRZ95JvN89dgPG4PIqQDtbdJE3w",
    authDomain: "clone-3716b.firebaseapp.com",
    projectId: "clone-3716b",
    storageBucket: "clone-3716b.appspot.com",
    messagingSenderId: "507696645230",
    appId: "1:507696645230:web:c357ff0e60d8ecaf2b927f",
    measurementId: "G-PB05331NCQ"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};