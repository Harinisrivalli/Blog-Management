import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth' ;
import {getFirestore} from  'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAsc3nzZvHx1x1CB6m36gLuw0uIvQ2LtNw",
  authDomain: "blogapplication-8bdc2.firebaseapp.com",
  projectId: "blogapplication-8bdc2",
  storageBucket: "blogapplication-8bdc2.appspot.com",
  messagingSenderId: "667898555644",
  appId: "1:667898555644:web:97625371cbe6f882297b79",
  measurementId: "G-F0XYTFMY0K"
};
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();