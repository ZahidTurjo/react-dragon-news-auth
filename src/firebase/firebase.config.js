// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuLp5e4xHDQ40rMAA3zC0PnmMzYFspwSc",
  authDomain: "react-dragon-news-auth-aa459.firebaseapp.com",
  projectId: "react-dragon-news-auth-aa459",
  storageBucket: "react-dragon-news-auth-aa459.appspot.com",
  messagingSenderId: "797786369583",
  appId: "1:797786369583:web:7843470b542ada454820da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app