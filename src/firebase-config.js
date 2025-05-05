// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe2UY5Gn-8igg-tg9vUd_P7Nx1p4tLC7I",
  authDomain: "chatapp-bccc9.firebaseapp.com",
  projectId: "chatapp-bccc9",
  storageBucket: "chatapp-bccc9.firebasestorage.app",
  messagingSenderId: "382396847735",
  appId: "1:382396847735:web:c9d7bf816da58e0fc59872"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

