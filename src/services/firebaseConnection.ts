
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDumSrAXXgJw6QaKvG9AXYu827TIdiYLc",
  authDomain: "reactlinks-1fc80.firebaseapp.com",
  projectId: "reactlinks-1fc80",
  storageBucket: "reactlinks-1fc80.appspot.com",
  messagingSenderId: "351044251247",
  appId: "1:351044251247:web:581361c1fc022c87c0a79a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export { auth, db };