import React, { useState, createContext } from "react";
// Main Context export
export const MainContext = createContext();

export default function ContextProvider(props) {
  // const API_KEY_1 = process.env.REACT_APP_API_KEY_JUDE;
  // const API_KEY_2 = process.env.REACT_APP_API_KEY_MAX;
  const API_KEY_1 = "GwI7qfLYcyv0f8HgMdsx1M1SUthipXW1";
  const API_KEY_2 = "O00H6atmqorBQUpmQ8RjPERJzDuof4Hi";
  //? State Variable for Switch Toggle
  const [theme, setTheme] = useState("dark");
  //? Theme Toggle Function
  const toggleTheme = () =>
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  // Loading state for loading spinner
  const [loading, setLoading] = useState(false);
  //? Fetched Data State Storage
  const [dataFavorites, setDataFavorites] = useState([]);
  // SearchBar
  const [dataSearch, setDataSearch] = useState([]);
  const [input, setInput] = useState("");
  // Trending Page
  const [dataTrending, setDataTrending] = useState([]);
  //Random Page
  const [dataRandom, setDataRandom] = useState({});
  // Error state for ErrorModal
  const [error, setError] = useState(false);
  // Error message
  const [errorMsg, setErrorMsg] = useState("Sorry, something went wrong");
  // Show Modal State
  const [showModal, setShowModal] = useState(false)

  // Error handling function
  const errorHandler = (response) => {
    if (response.ok) setError(false);
    if (!response.ok) {
      setLoading(false)
      if (response.status === 401) {
        throw new Error("401 - Problem with authentication credentials");
      }
      if (response.status === 403) {
        throw new Error("403 - No permission to access the server");
      }
      throw new Error("Sorry, something went wrong fetching your data.");
    }
  };

  // Fetch request for search input
  const fetchSearch = async () => {
    try {
      setLoading(true);
      setError(false)
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY_1}&q=${input}&limit=50&offset=0&rating=r&lang=en`
      );

      errorHandler(response);

      const data = await response.json();
      setDataSearch(data.data);
    } catch (error) {
      console.error(error.message);
      setError(true);
      setErrorMsg(error.message);
    }
  };
  // Fetch a random GIF
  const fetchRandom = async () => {
    try{
    setLoading(true);
    setError(false)
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY_1}&tag=&rating=r`
    );
    errorHandler(response)
    const data = await response.json();
    setDataRandom(data.data);
    setTimeout(() => setLoading(false), 1000);
  } catch(error) {
    console.error(error.message)
    setError(true);
    setErrorMsg(error.message);
  }
  };
  // Fetch trending GIFS
  const fetchTrending = async () => {
    try {
      setLoading(true);
      setError(false)
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY_2}&limit=50&rating=r`
      );
      errorHandler(response)
      const data = await response.json();
      setDataTrending(data.data);
    } catch(error) {
      console.error(error.message)
      setError(true);
      setErrorMsg(error.message);
    }
  };

  return (
    <MainContext.Provider
      value={{
        API_KEY_1,
        API_KEY_2,
        error,
        errorMsg,
        theme,
        setTheme,
        toggleTheme,
        loading,
        setLoading,
        dataFavorites,
        setDataFavorites,
        dataSearch,
        setDataSearch,
        setDataTrending,
        showModal,
        setShowModal,
        dataTrending,
        dataRandom,
        setDataRandom,
        input,
        setInput,
        fetchSearch,
        fetchRandom,
        fetchTrending,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}
