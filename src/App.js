import React, { useContext, useState, useEffect } from "react";
import { MainContext } from "./context/context";

import 'react-notifications/lib/notifications.css';

import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import NotFound from "./components/NotFound/NotFound";
import Favorites from "./components/Favorites/Favorites";
import Random from "./components/Random/Random";
import SearchResults from "./components/SearchResults/SearchResults";
import Trending from "./components/Trending/Trending";
import Searchbar from "./components/Searchbar/Searchbar";
import MemeGenerator from "./components/memeGenerator/MemeGenerator";
import ErrorModal from "./components/ErrorModal/ErrorModal";
import TopButton from "./components/TopButton/TopButton";
import Modal from './Modal'
import NotificationContainer from "react-notifications/lib/NotificationContainer";


function App() {
  const context = useContext(MainContext);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const buttonVisibility = () => {
      window.pageYOffset > 500 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", buttonVisibility);

    return () => {
      window.removeEventListener("scroll", buttonVisibility);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, []);

  return (
    // When deploying use HashRouter!
    <BrowserRouter>
      <div className="wrapper" id={context.theme}>
        <NotificationContainer />
        {context.error ? <ErrorModal /> : null}
        {showButton && <TopButton />}
        <Searchbar />
        <Navbar />
        <Modal show={context.showModal} onClose={() => context.setShowModal(false)}/>
        <div className="content-container">
          <Routes>
            <Route path="/" element={<SearchResults />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/random" element={<Random />} />
            <Route path="/memeGenerator" element={<MemeGenerator />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
