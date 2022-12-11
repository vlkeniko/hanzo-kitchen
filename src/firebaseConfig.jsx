// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuRLXDfngHnXLk-XHtv0JHDl-6PqMBL4A",
  authDomain: "hanzocold-7b5b1.firebaseapp.com",
  databaseURL: "https://hanzocold-7b5b1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hanzocold-7b5b1",
  storageBucket: "hanzocold-7b5b1.appspot.com",
  messagingSenderId: "182837806947",
  appId: "1:182837806947:web:0f55111490845c0a903556"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
