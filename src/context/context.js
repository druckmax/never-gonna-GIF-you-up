import React, { useState, createContext } from "react";

export const MainContext = createContext();

export default function ContextProvider(props) {
  //? State Variable for Switch Toggle
  const [theme, setTheme] = useState("dark");

  //? Theme Toggle Function
  const toggleTheme = () =>
    setTheme((curr) => (curr === "light" ? "dark" : "light"));

  //? Fetched Data State Storage
  const [dataFavorites, setDataFavorites] = useState([]);

  const [dataSearch, setDataSearch] = useState([]);
  const [input, setInput] = useState("");

  const [dataTrending, setDataTrending] = useState([]);

  const [dataRandom, setDataRandom] = useState({});

  const fetchSearch = async () => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=GwI7qfLYcyv0f8HgMdsx1M1SUthipXW1&q=${input}&limit=50&offset=0&rating=r&lang=en`
    );
    const data = await response.json();
    console.log(data);
    setDataSearch(data.data);
  };

  return (
    <MainContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        dataFavorites,
        setDataFavorites,
        dataSearch,
        setDataSearch,
        setDataTrending,
        dataTrending,
        dataRandom,
        setDataRandom,
        input,
        setInput,
        fetchSearch,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}
