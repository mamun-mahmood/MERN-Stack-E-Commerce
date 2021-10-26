import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "@firebase/auth";
import { createContext, React, useEffect, useContext, useState } from "react";
import {auth} from "../FirebaseConfig";

const AuthContext = createContext({
  currentUser: null,
//   signInWithGoogle: () => Promise,
//   login: () => Promise,
//   signup: () => Promise,
//   logout: () => Promise,
//   forgotPassword: () => Promise,
//   resetPassword: () => Promise,
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
  }
  const signInWithGoogle = () => {
      const provider = new GoogleAuthProvider()
      return signInWithPopup(auth, provider)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user ? user : null)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  const value = {
    currentUser,
    signup,
    login,
    signInWithGoogle,
    
  };
  console.log(currentUser);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
