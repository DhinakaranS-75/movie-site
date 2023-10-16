
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgoVGjU_8d6JkDdgE8fquOJoxpEq5026o",
  authDomain: "movie-website-1eb50.firebaseapp.com",
  projectId: "movie-website-1eb50",
  storageBucket: "movie-website-1eb50.appspot.com",
  messagingSenderId: "334759282516",
  appId: "1:334759282516:web:4331265a3ca185d6f9aac1",
  measurementId: "G-4HGFVMS20C"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);