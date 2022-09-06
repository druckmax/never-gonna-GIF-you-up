import React, { useState, createContext } from 'react'

export const MainContext = createContext()

export default function ContextProvider(props) {
    
    //? State Variable for Switch Toggle
    const [theme, setTheme]= useState("dark")

    //? Theme Toggle Function
    const toggleTheme= () => setTheme((curr)=>(curr==="light" ? "dark":"light"));

    return (
        <MainContext.Provider value={{theme, setTheme, toggleTheme}}>
            {props.children}
        </MainContext.Provider>
        )

}