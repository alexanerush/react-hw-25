
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCCPbn_dtfKGFLxdLCmAx_v7Y7mxMR5044",
  authDomain: "homework-react-07.firebaseapp.com",
  projectId: "homework-react-07",
  storageBucket: "homework-react-07.firebasestorage.app",
  messagingSenderId: "399715486765",
  appId: "1:399715486765:web:207e8e3f5f04f7eb4abca4",
  measurementId: "G-CZZTRB755S"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;