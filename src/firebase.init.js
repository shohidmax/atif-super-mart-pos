import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {

  apiKey: "AIzaSyDSqmE0D9hL1ezaW0ZtfekVUOUj3AKUbUE",
  authDomain: "atif-super-mart-pos.firebaseapp.com",
  projectId: "atif-super-mart-pos",
  storageBucket: "atif-super-mart-pos.appspot.com",
  messagingSenderId: "630836777544",
  appId: "1:630836777544:web:c3ae15fbf469b08457fe7d"

};
const app = initializeApp(firebaseConfig); 
const auth = getAuth(app);
export default auth;
 






// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDSqmE0D9hL1ezaW0ZtfekVUOUj3AKUbUE",
//   authDomain: "atif-super-mart-pos.firebaseapp.com",
//   projectId: "atif-super-mart-pos",
//   storageBucket: "atif-super-mart-pos.appspot.com",
//   messagingSenderId: "630836777544",
//   appId: "1:630836777544:web:c3ae15fbf469b08457fe7d"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);