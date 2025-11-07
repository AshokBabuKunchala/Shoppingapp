import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

 export const AuthContext = createContext();

 export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/Home");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/signin");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
