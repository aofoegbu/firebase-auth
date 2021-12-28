import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    authDomain: "fir-authentication-4543b.firebaseapp.com",
    projectId: "fir-authentication-4543b",
    storageBucket: "fir-authentication-4543b.appspot.com",
    messagingSenderId: "310020656249",
    appId: "1:310020656249:web:ab3abbbeafac4a5820d8a8",
    measurementId: "G-0CTEMCNXQP"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
