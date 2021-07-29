import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCue48QGViHao449Iorj60U3ZE8t-h1abI",
  authDomain: "fbcl333.firebaseapp.com",
  projectId: "fbcl333",
  storageBucket: "fbcl333.appspot.com",
  messagingSenderId: "676128369612",
  appId: "1:676128369612:web:be55d8d4a9580e1d160b69",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const storage = firebase.storage();

export { db, storage };
