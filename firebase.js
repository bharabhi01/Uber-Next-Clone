// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDirUt5VCDDkTJvhPuDtv8OvTQi53AG2C8",
  authDomain: "uber-clone-ee47f.firebaseapp.com",
  projectId: "uber-clone-ee47f",
  storageBucket: "uber-clone-ee47f.appspot.com",
  messagingSenderId: "738724835131",
  appId: "1:738724835131:web:de70714aa18e6ce30c911e",
  measurementId: "G-B5SXWYBP8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }