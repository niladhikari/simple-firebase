// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT-205pnZT14R5aZ5V2SluhNSSK0mLOhU",
  authDomain: "simple-firebase-9af3c.firebaseapp.com",
  projectId: "simple-firebase-9af3c",
  storageBucket: "simple-firebase-9af3c.appspot.com",
  messagingSenderId: "922002909221",
  appId: "1:922002909221:web:845e69d2e58b2dbe94f7cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app