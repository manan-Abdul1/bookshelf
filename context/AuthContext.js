import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUserData(JSON.parse(storedUser));
        }
    }, []);
    const login = (loginData) => {
        setIsLoggedIn(true);
        setUserData(loginData);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUserData([]);
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
    };
    console.log(userData, "userData");

    return (
        <AuthContext.Provider value={{ userData, isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
