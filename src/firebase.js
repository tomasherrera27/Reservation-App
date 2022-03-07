// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo1fLvlpADGSyPfQWFBUVZPzcheGQSYzs",
  authDomain: "reserva-salas-c2800.firebaseapp.com",
  projectId: "reserva-salas-c2800",
  storageBucket: "reserva-salas-c2800.appspot.com",
  messagingSenderId: "143504027857",
  appId: "1:143504027857:web:c47d7b48bb94ef7f4555f0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;