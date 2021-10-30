import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
  updateProfile,
} from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { createContext, React, useEffect, useContext, useState } from "react";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyA71xfgyM1oB7nV-1WkYibWfqnI8-jdKAg",
  authDomain: "imponexposellers.firebaseapp.com",
  projectId: "imponexposellers",
  storageBucket: "imponexposellers.appspot.com",
  messagingSenderId: "1037058045706",
  appId: "1:1037058045706:web:59c08b972c4df0623fecf3",
});
const auth = getAuth(firebaseApp);
const AuthContextSeller = createContext({
  currentUser: null,
  //   signInWithGoogle: () => Promise,
  //   login: () => Promise,
  //   signup: () => Promise,
  //   logout: () => Promise,
  //   forgotPassword: () => Promise,
  //   resetPassword: () => Promise,
});

export const useAuth = () => {
  return useContext(AuthContextSeller);
};

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (username) => {
    return updateProfile(auth.currentUser, { displayName: username });
  };
  const logout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user ? user : null);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    updateUserProfile,
    logout,
  };
  return (
    <AuthContextSeller.Provider value={value}>
      {children}
    </AuthContextSeller.Provider>
  );
}
