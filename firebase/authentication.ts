// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import { exportTraceState } from "next/dist/trace";
import {User, deleteUser, getAuth} from "firebase/auth";
import { use } from "react";
import { mustGetValue } from "@/utils/must-get-value";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvK78-xcR9dtiZ-jBfI5Mp3vTF9uqfuJs",
  authDomain: "shopping-app-nextjs.firebaseapp.com",
  projectId: "shopping-app-nextjs",
  storageBucket: "shopping-app-nextjs.appspot.com",
  messagingSenderId: "68973032878",
  appId: "1:68973032878:web:446a37ee3ab6f3a57dc43f",
  measurementId: "G-WPT1MW0PQJ"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig,"my app")
export const app = firebaseApp as firebase.app.App;
export const auth = getAuth(app);
export const user = mustGetValue<typeof auth.currentUser>(auth.currentUser);