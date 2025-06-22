// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const role = firebaseUser.email === 'admin@gmail.com' ? 'admin' : 'user';
        const userData = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          role,
        };

        setUser(userData);
        localStorage.setItem('habitTrackerUser', JSON.stringify(userData));
      } else {
        setUser(null);
        localStorage.removeItem('habitTrackerUser');
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Signup function
  const signup = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const firebaseUser = userCredential.user;

    const role = email === 'admin@gmail.com' ? 'admin' : 'user';
    const userData = { uid: firebaseUser.uid, email, role };

    localStorage.setItem('habitTrackerUser', JSON.stringify(userData));
    setUser(userData);
  };

  // Login function
  const login = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const firebaseUser = userCredential.user;

    const role = email === 'admin@gmail.com' ? 'admin' : 'user';
    const userData = { uid: firebaseUser.uid, email, role };

    localStorage.setItem('habitTrackerUser', JSON.stringify(userData));
    setUser(userData);
  };

  // Logout
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('habitTrackerUser');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
