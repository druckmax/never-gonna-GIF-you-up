import React, { useState, createContext } from 'react'

export const MainContext = createContext()

export default function ContextProvider(props) {
    
    //? State Variable for Switch Toggle
    const [theme, setTheme]= useState("dark")

    //? Theme Toggle Function
    const toggleTheme= () => setTheme((curr)=>(curr==="light" ? "dark":"light"));

    //? Fetched Data State Storage
    const [dataFavorites, setDataFavorites] = useState([])

    const [dataSearch, setDataSearch] = useState([])
    const [input, setInput] = useState("");

    const [dataTrending, setDataTrending] = useState([])

    const [dataRandom, setDataRandom] = useState({})

    return (
        <MainContext.Provider value={{theme, setTheme, toggleTheme, dataFavorites, setDataFavorites, dataSearch, setDataSearch, setDataTrending, dataTrending, dataRandom, setDataRandom, input, setInput}}>
            {props.children}
        </MainContext.Provider>
        )

}