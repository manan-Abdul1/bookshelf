import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState([]);

  const login = (loginData) => {
    setIsLoggedIn(true);
    setUserData(loginData)
  };

  const logout = () => {
    setIsLoggedIn(false);
  };
  console.log(userData,'userData')

  return (
    <AuthContext.Provider value={{userData, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
