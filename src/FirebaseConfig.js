import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyB20-nOl1rYRAxFWv4YM5aS54rNlpGOkIY",
  authDomain: "imponexpo0.firebaseapp.com",
  projectId: "imponexpo0",
  storageBucket: "imponexpo0.appspot.com",
  messagingSenderId: "456619644692",
  appId: "1:456619644692:web:c9d2330db88687533a1401",
});

export const auth = getAuth(firebaseApp);

