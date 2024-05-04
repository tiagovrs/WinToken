// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBmAj8yiPT4V6VxMfAgOC-UTAZQa_A6GA",
  authDomain: "lumx-hack.firebaseapp.com",
  projectId: "lumx-hack",
  storageBucket: "lumx-hack.appspot.com",
  messagingSenderId: "34735780593",
  appId: "1:34735780593:web:7ddd4a8c468280e1e72f50",
  measurementId: "G-SML5D27QKF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);