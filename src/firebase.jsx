import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDwwA1u54VfYmD51v3Vw-K9Jj1EoIkyOxo",
    authDomain: "reactprojectasinskaya.firebaseapp.com",
    projectId: "reactprojectasinskaya",
    storageBucket: "reactprojectasinskaya.firebasestorage.app",
    messagingSenderId: "498469615713",
    appId: "1:498469615713:web:c2139189f3938fc3981220",
    measurementId: "G-0EWPFTGKSL"
  };

const app = initializeApp(firebaseConfig);

export default app;

export const auth = getAuth(app);