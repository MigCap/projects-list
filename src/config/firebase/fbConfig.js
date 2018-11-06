import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize FireBase. Replace this with your own config details
const config = {
  apiKey: "AIzaSyA2o2_A8Qguf9spq8u2JY_FSKo43lpnwOY",
  authDomain: "onpoint-projects.firebaseapp.com",
  databaseURL: "https://onpoint-projects.firebaseio.com",
  projectId: "onpoint-projects",
  storageBucket: "onpoint-projects.appspot.com",
  messagingSenderId: "450846192310"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
