
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC89C92gpMKms4T_cmoOpHFs07x3VW7SjU",
    authDomain: "hrms-3bd69.firebaseapp.com",
    projectId: "hrms-3bd69",
    storageBucket: "hrms-3bd69.appspot.com",
    messagingSenderId: "287663215044",
    appId: "1:287663215044:web:84cc0347af8a1f1422d491"
};

// Initialize Firebase
const app =initializeApp(firebaseConfig);
export const auth = getAuth(app);                              
export const db = getFirestore(app);
export const storage = getStorage(app);

