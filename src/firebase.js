import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-QHcKHrKSEXRz4lvI1adTdYj5-op1jX4",
  authDomain: "garuda-redesign.firebaseapp.com",
  projectId: "garuda-redesign",
  storageBucket: "garuda-redesign.appspot.com",
  messagingSenderId: "21476304562",
  appId: "1:21476304562:web:9a6206443e981d8af64bab"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export default app;