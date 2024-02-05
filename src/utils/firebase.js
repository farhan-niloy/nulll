// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: "blog-77b7b.firebaseapp.com",
    projectId: "blog-77b7b",
    storageBucket: "blog-77b7b.appspot.com",
    messagingSenderId: "947750801254",
    appId: "1:947750801254:web:9a0ded74f8076bd24902a7",
    measurementId: "G-WB5J1442MT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);