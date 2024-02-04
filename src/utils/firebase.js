// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBnDugre0YG-ZuMKzpjYKfFZWSO7sA6jIs",
    authDomain: "blog-77b7b.firebaseapp.com",
    projectId: "blog-77b7b",
    storageBucket: "blog-77b7b.appspot.com",
    messagingSenderId: "947750801254",
    appId: "1:947750801254:web:9a0ded74f8076bd24902a7",
    measurementId: "G-WB5J1442MT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);