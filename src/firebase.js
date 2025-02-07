import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyDgL3hvRNsSu9F3-M_dioJ_JFmM9m-6vAY",

  authDomain: "portfolio-59b5f.firebaseapp.com",

  projectId: "portfolio-59b5f",

  storageBucket: "portfolio-59b5f.firebasestorage.app",

  messagingSenderId: "613698025250",

  appId: "1:613698025250:web:82dd4641e1f7595b25d77b",

  measurementId: "G-5S00V9RSE8"

};







// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };