import React, { useContext } from 'react';
import { MainContext } from './context/context'

import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.scss';
import NotFound from './components/NotFound/NotFound';
import Favorites from './components/Favorites/Favorites';
import Random from './components/Random/Random';
import SearchResults from './components/SearchResults/SearchResults';
import Trending from './components/Trending/Trending';
import Searchbar from "./components/Searchbar/Searchbar";
import MemeGenerator from './components/MemeGenerator/MemeGenerator';

function App() {
  const context = useContext(MainContext)

  return (
    // When deploying use HashRouter!
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
              <Route path='/memeGenerator' element={<MemeGenerator />} />
              <Route path="*" element={<NotFound/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
