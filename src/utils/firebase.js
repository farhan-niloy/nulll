// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: "nulll-412714.firebaseapp.com",
    projectId: "nulll-412714",
    storageBucket: "nulll-412714.appspot.com",
    messagingSenderId: "445884921333",
    appId: "1:445884921333:web:a3eea11b5bedc6b5911cbc",
    measurementId: "G-HRBMRY78DT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);