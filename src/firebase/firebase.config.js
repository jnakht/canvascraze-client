// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.AUTH_APIKEY,
  authDomain: import.meta.env.AUTH_AUTHDOMAIN, 
  projectId: import.meta.env.AUTH_PROJECTID,
  storageBucket: import.meta.env.AUTH_STORAGEBUCKET, 
  messagingSenderId: import.meta.env.AUTH_MESSAGINGSENDERID, 
  appId: import.meta.env.AUTH_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
