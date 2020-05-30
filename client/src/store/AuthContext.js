import React, { useReducer, createContext, useEffect } from 'react';
import authReducer from './AuthReducer'

export let initialState = {
    user: null,
    isAuthenticated: false,
};


// this contect gives us a consumer and provider
// provider gives us access to the global state
const AuthContext = createContext();

function AuthProvider({ children }) {
    let [currentUserInfo, setCurrentUserInfo] = useReducer(authReducer, initialState);

    useEffect(() => {
        const storageValue = localStorage.getItem("currentUserInfo");
        if (storageValue) {
            currentUserInfo = JSON.parse(storageValue)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("currentUserInfo", JSON.stringify(currentUserInfo));
    }, [currentUserInfo]);


    //provider has a value prop, and this value prop 
    //is gonna provide what we want to make as a global state
    return (
        <div>
            <AuthContext.Provider value={{ currentUserInfo, setCurrentUserInfo }}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export { AuthContext, AuthProvider };