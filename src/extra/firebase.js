// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmVeVGcs_Uc3uacjWU953kr1BVNtS19ro",
  authDomain: "fardeen-12345.firebaseapp.com",
  databaseURL: "https://fardeen-12345.firebaseio.com",
  projectId: "fardeen-12345",
  storageBucket: "fardeen-12345.appspot.com",
  messagingSenderId: "918975648275",
  appId: "1:918975648275:web:02e9dbc99b3cd6179e25e6",
  measurementId: "G-MJ8SFBBV31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);