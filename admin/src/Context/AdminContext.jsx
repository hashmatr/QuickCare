import { createContext } from "react";
import { useState } from "react";
import React from "react";
export const AdminContext = createContext();

const AdminContextProvider = (props) =>{
    const BackendURL = import.meta.env.VITE_BACKEND_URL;
    const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '');
    const value = {
        aToken, setAToken,
        BackendURL,
    }
    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider;