// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwoin6ekcILQ-h1mBoyXonIBPNJMp1g8U",
  authDomain: "expense-tracker-4b40e.firebaseapp.com",
  projectId: "expense-tracker-4b40e",
  storageBucket: "expense-tracker-4b40e.appspot.com",
  messagingSenderId: "188276562647",
  appId: "1:188276562647:web:5fc4c754b6f63f246b2e92",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth =getAuth(app)
 export const provider  = new GoogleAuthProvider()
 export const db = getFirestore(app)
//firebase login
//firebase init
// firebase deploy
