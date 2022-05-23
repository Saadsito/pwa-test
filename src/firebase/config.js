// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDtbzm-dUrh0v5ZylVFm_NJRbWNZPCFLI",
  authDomain: "zuli-app.firebaseapp.com",
  projectId: "zuli-app",
  storageBucket: "zuli-app.appspot.com",
  messagingSenderId: "112603494268",
  appId: "1:112603494268:web:8ea6a0a43dd8ee55cf56f9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);