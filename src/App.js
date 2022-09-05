import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Favorites from "./components/Favorites";
import Trending from "./components/Trending";
import Random from "./components/Random";
import Main from "./components/Main";
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
            <Route path="/" element={<Main />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/random" element={<Random />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
