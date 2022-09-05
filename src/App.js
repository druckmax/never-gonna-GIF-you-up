
import React, {createContext,useState} from 'react';
import MySwitch from './components/mySwitch';



import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.scss';
import Favorites from './components/Favorites/Favorites';
import Random from './components/Random/Random';
import SearchResults from './components/SearchResults/SearchResults';
import Trending from './components/Trending/Trending';

import Searchbar from "./components/Searchbar/Searchbar";
import Footer from "./components/Footer/Footer";


export const ThemeContext= createContext(null);
 

function App() {
  const [theme, setTheme]= useState("dark");

  const toggleTheme= () => setTheme((curr)=>(curr==="light" ? "dark":"light"));
  ;
  return (

    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <BrowserRouter>
    <div className='wrapper' id={theme}>
        <Searchbar />
        <Navbar />
        <div className= 'switch'>
        
         {<MySwitch toggleTheme={toggleTheme} checked={theme === "dark"}/> }
      
        </div>
        <div className="gridContainer__template">
          <Routes>
            <Route path="/" element={<SearchResults />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/random" element={<Random />} />
          </Routes>
        </div>
        <Footer />


      </div>
    </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
