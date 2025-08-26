import React, { createContext, useState, useEffect } from "react";
import { signIn, checkToken, logout as apiLogout } from "../auth"

// Create context
export const AuthContext = createContext();



// Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true);

  // 🔹 On mount, check if token exists + validate it
  useEffect(() => {
    if (token) {
      checkToken(token)
        .then((data) => {
          setUser(data);
        })
        .catch(() => {
          handleLogout(); // invalid token, force logout
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [token]);
};

