// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCweaeLuj3JQ_PdwzZelinjRgfWRHOjLpk",
  authDomain: "react-diario-d584d.firebaseapp.com",
  projectId: "react-diario-d584d",
  storageBucket: "react-diario-d584d.appspot.com",
  messagingSenderId: "974297608324",
  appId: "1:974297608324:web:ed3c4c8fcbdf35fa9f12d1",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);