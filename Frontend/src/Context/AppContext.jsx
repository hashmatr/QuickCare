import { createContext } from "react";
import { doctors,specialityData } from '../assets/assets_frontend/assets';
import App from "../App";
import React from "react";
export const AppContext = createContext();

const AppContextProvider = (props) => {
const value = {
    specialityData,
    doctors
}
return (
    <AppContext.Provider value={value}>
        {props.children}   
    </AppContext.Provider>
)
}

export default AppContextProvider;
