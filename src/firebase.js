 
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAdCG9-Rz3LCoFb7klzkyKa3GLt1wHZzRc",
    authDomain: "facebook-messenger-online.firebaseapp.com",
    databaseURL: "https://facebook-messenger-online.firebaseio.com",
    projectId: "facebook-messenger-online",
    storageBucket: "facebook-messenger-online.appspot.com",
    messagingSenderId: "83734011048",
    appId: "1:83734011048:web:ff2f74d1225b0653fa769d",
    measurementId: "G-D67F6F0VNV"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();

  export default db;