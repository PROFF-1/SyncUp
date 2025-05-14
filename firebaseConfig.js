import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyDuz7xUPme6uOHeYb68L7WxyoQ998Ddb4w",
  authDomain: "syncup-e8952.firebaseapp.com",
  projectId: "syncup-e8952",
  storageBucket: "syncup-e8952.firebasestorage.app",
  messagingSenderId: "1088211692112",
  appId: "1:1088211692112:web:bfad48a0eadc783b377f55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Export the auth instance
export const auth = getAuth(app);