import firebase from "firebase";
const firebaseConfig = {
  apiKey: "Your firebase apiKey",
  authDomain: "sflipkart-789c0.firebaseapp.com",
  projectId: "sflipkart-789c0",
  storageBucket: "sflipkart-789c0.appspot.com",
  messagingSenderId: "1057226066116",
  appId: "1:1057226066116:web:f5542a69f307157690a191",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
