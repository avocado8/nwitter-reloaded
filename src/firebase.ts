// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw0kCNO2zDIVTUSAC4W-lPuUm3wGBLX04",
  authDomain: "nwitter-reloaded-7da4b.firebaseapp.com",
  projectId: "nwitter-reloaded-7da4b",
  storageBucket: "nwitter-reloaded-7da4b.appspot.com",
  messagingSenderId: "500405377145",
  appId: "1:500405377145:web:c288c8b871f668932cdca8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);