// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjQH859wVZ4DE6fCJ-bMA2NZkcrJsEYas",
  authDomain: "sudokusolversbl.firebaseapp.com",
  projectId: "sudokusolversbl",
  storageBucket: "sudokusolversbl.appspot.com",
  messagingSenderId: "148512466378",
  appId: "1:148512466378:web:87953baab93b463084db33",
  measurementId: "G-FN6BFFEQ7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);