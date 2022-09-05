import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import Favorites from './components/Favorites/Favorites';
import Random from './components/Random/Random';
import SearchResults from './components/SearchResults/SearchResults';
import Trending from './components/Trending/Trending';

import Searchbar from "./components/Searchbar/Searchbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Searchbar />
        <Navbar />
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
  );
}

export default App;
