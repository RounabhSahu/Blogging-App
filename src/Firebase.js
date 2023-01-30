// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjE6aqB9iUE75ifA0R_Elm352mSQ2oONs",
    authDomain: "simpleblogspot-e0e9f.firebaseapp.com",
    projectId: "simpleblogspot-e0e9f",
    storageBucket: "simpleblogspot-e0e9f.appspot.com",
    messagingSenderId: "228819943709",
    appId: "1:228819943709:web:d6db0a534c9169e0c921f4",
    measurementId: "G-4S4L6XYG3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();