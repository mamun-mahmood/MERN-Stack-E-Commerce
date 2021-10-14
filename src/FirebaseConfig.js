import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAflOp4Z1DTNA9qYVwEiLeQb72p787HH3s",
  authDomain: "fbclone-f9186.firebaseapp.com",
  projectId: "fbclone-f9186",
  storageBucket: "fbclone-f9186.appspot.com",
  messagingSenderId: "43317436789",
  appId: "1:43317436789:web:33d69617a2e082495cb33c",
  measurementId: "G-H9ZSZ6P8NF"
});

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export {auth, provider};