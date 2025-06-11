import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; 
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBb01LleXkXBIY2B7jb65p4DVAAq_j7KBQ",
  authDomain: "jpcs-website.firebaseapp.com",
  projectId: "jpcs-website",
  storageBucket: "jpcs-website.firebasestorage.app",
  messagingSenderId: "1026378720637",
  appId: "1:1026378720637:web:57c046992581840b9e9814",
  measurementId: "G-4Q5R63H7QR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); 
const storage = getStorage(app);

export { db, auth, storage }; 