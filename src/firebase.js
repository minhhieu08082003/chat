
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBoeZQU_vutOWVFqUzoB7CfaCpFRdsWFPI",
  authDomain: "chat-5e7b2.firebaseapp.com",
  projectId: "chat-5e7b2",
  storageBucket: "chat-5e7b2.appspot.com",
  messagingSenderId: "249026275925",
  appId: "1:249026275925:web:ad8ad40d485789c9dd02dc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();