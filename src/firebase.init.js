// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq4Y8ucnV7hj--te4juDe8ZPMUlV1Yr2Q",
  authDomain: "nest-assignment.firebaseapp.com",
  projectId: "nest-assignment",
  storageBucket: "nest-assignment.appspot.com",
  messagingSenderId: "1079189250419",
  appId: "1:1079189250419:web:5fd803796b671717f7e506",
  measurementId: "G-BPMWJCHP3W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
export default auth;
