import React, { useContext } from 'react';
import { MainContext } from './context/context'

import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.scss';

import Favorites from './components/Favorites/Favorites';
import Random from './components/Random/Random';
import SearchResults from './components/SearchResults/SearchResults';
import Trending from './components/Trending/Trending';
import Searchbar from "./components/Searchbar/Searchbar";

function App() {
  const context = useContext(MainContext)

  return (
    <BrowserRouter>
    <div className='wrapper' id={context.theme}>
        <Searchbar />
        <Navbar />
        <div className="content-container">
          <Routes>
              <Route path="/" element={<SearchResults />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/random" element={<Random />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
