// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'firebase/compat/auth';
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDtbzm-dUrh0v5ZylVFm_NJRbWNZPCFLI",
  authDomain: "zuli-app.firebaseapp.com",
  projectId: "zuli-app",
  storageBucket: "zuli-app.appspot.com",
  messagingSenderId: "112603494268",
  appId: "1:112603494268:web:8ea6a0a43dd8ee55cf56f9"
};

// objeto que guardará todos los datos del usuario logueado
export const userLoged = {
  name : '',
  lastname : '',
  uid : '',
  avatar : ''
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage(app, "gs://zuli-app.appspot.com");