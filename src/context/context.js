import React, { useState, createContext } from "react";
// Main Context export
export const MainContext = createContext();

export default function ContextProvider(props) {
  // const API_KEY_1 = process.env.REACT_APP_API_KEY_JUDE;
  // const API_KEY_2 = process.env.REACT_APP_API_KEY_MAX;
  const API_KEY_1 = "GwI7qfLYcyv0f8HgMdsx1M1SUthipXW1";
  const API_KEY_2 = "00H6atmqorBQUpmQ8RjPERJzDuof4Hi";
  
  console.log(API_KEY_1, API_KEY_2)

  //? State Variable for Switch Toggle
  const [theme, setTheme] = useState("dark");
  //? Theme Toggle Function
  const toggleTheme = () =>
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  // Loading state for loading spinner
  const [loading, setLoading] = useState(false);
  // console.log(imgIsLoaded)
  //? Fetched Data State Storage
  const [dataFavorites, setDataFavorites] = useState([]);
  // SearchBar
  const [dataSearch, setDataSearch] = useState([]);
  const [input, setInput] = useState("");
  // Trending Page
  const [dataTrending, setDataTrending] = useState([]);
  //Random Page
  const [dataRandom, setDataRandom] = useState({});
  // Fetch request for search input
  const fetchSearch = async () => {
    setLoading(true)
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY_1}&q=${input}&limit=50&offset=0&rating=r&lang=en`
    );
    const data = await response.json();
    console.log(data);
    setDataSearch(data.data);
  };
  // Fetch a random GIF
  const fetchRandom = async () => {
    console.log('yes')
    setLoading(true);
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY_1}&tag=&rating=r`
    );
    const data = await response.json();
    setDataRandom(data.data);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <MainContext.Provider
      value={{
        API_KEY_1,
        theme,
        setTheme,
        toggleTheme,
        loading,
        setLoading,
        // imgIsLoaded,
        // setImgIsLoaded,
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
        fetchRandom,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}
