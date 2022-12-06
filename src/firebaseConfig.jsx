// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFEe1ZrEOXfV5E7x05wP7qjOR96XlnhRc",
  authDomain: "hanzolist-b6cc3.firebaseapp.com",
  databaseURL: "https://hanzolist-b6cc3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hanzolist-b6cc3",
  storageBucket: "hanzolist-b6cc3.appspot.com",
  messagingSenderId: "143439960332",
  appId: "1:143439960332:web:6fab6fba6d660d525cd129"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const storage = getStorage(app);
export const db = getFirestore(app);
