import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHwWHqjpBjqbhjpj-0ff7PU9YbXNzNiUA",
  authDomain: "zimchat-62baf.firebaseapp.com",
  projectId: "zimchat-62baf",
  storageBucket: "zimchat-62baf.appspot.com",
  messagingSenderId: "1002241304143",
  appId: "1:1002241304143:web:8b85d113593fb445ea6c3a",
  measurementId: "G-B7PKRTQZGZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };