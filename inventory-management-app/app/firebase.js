
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEdaBHBw8_0HzaY2HjfNw3OoJFm9WDWKw",
  authDomain: "pantry-41fb9.firebaseapp.com",
  projectId: "pantry-41fb9",
  storageBucket: "pantry-41fb9.appspot.com",
  messagingSenderId: "95796916373",
  appId: "1:95796916373:web:a7a4aeba6783986609eb9c",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export {app, firestore}
