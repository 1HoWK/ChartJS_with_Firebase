// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4LI-Q6FIrZ5kVSDTIX9itGyPcppY6ODw",
  authDomain: "logging-history.firebaseapp.com",
  databaseURL: "https://logging-history-default-rtdb.firebaseio.com",
  projectId: "logging-history",
  storageBucket: "logging-history.appspot.com",
  messagingSenderId: "943873702819",
  appId: "1:943873702819:web:8e757963082f90d28d7816",
  measurementId: "G-9HSQDJZXFP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);