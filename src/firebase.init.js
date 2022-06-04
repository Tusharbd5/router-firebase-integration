// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfSgoxNlB0k8GULDnqgj6m3NrRz6m0bsA",
    authDomain: "router-firebase-auth-a0e98.firebaseapp.com",
    projectId: "router-firebase-auth-a0e98",
    storageBucket: "router-firebase-auth-a0e98.appspot.com",
    messagingSenderId: "247529905765",
    appId: "1:247529905765:web:0453df7cdb8dd0f9edf08c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;