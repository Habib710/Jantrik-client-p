// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth" ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCQkVO0LbDjIpaTpTYfH5Fsly5DVUcfi4",
  authDomain: "jantrik-d4cca.firebaseapp.com",
  projectId: "jantrik-d4cca",
  storageBucket: "jantrik-d4cca.appspot.com",
  messagingSenderId: "559913162303",
  appId: "1:559913162303:web:878ea432de808eb9850a8a"
};
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apikey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId,
//   };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;