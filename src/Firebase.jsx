import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyBi753JZ3yplJXbtPiK-Jos-FrJ_RRpOW0",
  authDomain: "jpcs-1dbb7.firebaseapp.com",
  projectId: "jpcs-1dbb7",
  storageBucket: "jpcs-1dbb7.appspot.com",
  messagingSenderId: "417572839338",
  appId: "1:417572839338:web:67880c9ad93e0e2137d5d3",
  measurementId: "G-W2J9QXHEJ1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); 

export { db, auth }; 