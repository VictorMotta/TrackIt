import React, { createContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const recoveredUser = localStorage.getItem("user");
        const tokenUser = localStorage.getItem("token");

        if (recoveredUser && tokenUser) {
            setUser(JSON.parse(recoveredUser));
            setToken(JSON.parse(tokenUser));
        }

        setLoading(false);
    }, []);

    const login = (data) => {
        const loggedUser = data;

        localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem("token", JSON.stringify(data.token));

        setUser(loggedUser);
        setToken(data.token);

        navigate("/hoje");
    };
    return (
        <AuthContext.Provider
            value={{
                authenticated: !!user,
                loading,
                user,
                token,
                percentage,
                setPercentage,
                login,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
