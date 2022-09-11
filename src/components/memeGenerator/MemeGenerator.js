import React, { useState } from "react";
import { MainContext } from "../../context/context";
import { useContext } from "react";
import { useEffect } from "react";
import fry_placeholder from "./img/take-my-money.gif";
import Draggable from "react-draggable";
import {BsTextareaResize} from 'react-icons/bs'

import "./MemeGenerator.scss";

export default function MemeGenerator() {
  const context = useContext(MainContext);
  // creating useState for holding an object which will hold the data which will type in the inputfiels and what image will display
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    // todo Placeholder image or container
    randomImage: fry_placeholder,
  });
  // Set meme template array
  const [memeArr, setMemeArr] = useState([]);
  // Show/Hide memeText resize grabber and border
  const [showMemeGrabber, setShowMemeGrabber] = useState(false)

  //Fetch meme tempalte array
  const fetchMemeTemps = async () => {
    const response = await fetch("https://api.imgflip.com/get_memes");
    const data = await response.json();
    setMemeArr(data);
  };

  useEffect(() => {
    fetchMemeTemps();
  }, []);

  // Get random number based on memeArr length
  const getRandomNumber = (length) =>
    Math.floor(Math.random() * length);

  // creating function to update the objects property "randomImag" which is hold into state "meme". We get a random image everytime this function gets called. The function ges called, when the button gets clicked.
  function getMemeImage() {
    const randomNumber = getRandomNumber(memeArr?.data?.memes.length);
    const url = memeArr.data.memes[randomNumber].url;
    setMeme({
      topText: '',
      bottomText: '',
      randomImage: url,
    });
  }
  // we apply a handleChange function on the input fields property "Onchange". This function is called everytime the user types something. The function will update our object "meme" in the state.
  function handleChange(e) {
    const { value, name } = e.target;
    setMeme((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }
  // Show/Hide resize grabber and broder of memeText
  const resizeGrabberHandler = () => showMemeGrabber ? setShowMemeGrabber(false) : setShowMemeGrabber(true);
  return (
    <div
      className={`meme-container ${
        context.theme === "light" ? "box-shadow-light-lg" : "box-shadow-dark-lg"
      }`}
      onClick={(e) => !e.target.matches('.meme-text') && setShowMemeGrabber(false)}
    >
      <div className="form">
        <div className="meme-input-container">
          <input
            value={meme.topText}
            name="topText"
            onChange={handleChange}
            type="text"
            className={
              context.theme === "light"
                ? "box-shadow-light-small"
                : "box-shadow-dark-small"
            }
            placeholder="Shut up"
            maxLength={50}
          ></input>
          <input
            value={meme.bottomText}
            name="bottomText"
            onChange={handleChange}
            type="text"
            className={
              context.theme === "light"
                ? "box-shadow-light-small"
                : "box-shadow-dark-small"
            }
            placeholder="and take my money"
            maxLength={50}
          ></input>
        </div>
        <button
          onClick={getMemeImage}
          className={
            context.theme === "light"
              ? "box-shadow-light-small"
              : "box-shadow-dark-small"
          }
        >
          Get a new meme <i className="fa-regular fa-image"></i>
        </button>
      </div>

      <div
        className={`meme-image-container ${
          context.theme === "light" ? "bg-light-container" : "bg-dark-container"
        }`}
      >
        <Draggable bounds="parent">
          <div onClick={resizeGrabberHandler} className={`meme-text text-top ${showMemeGrabber && 'showGrabberHandler'}`}>{meme.topText}</div>
        </Draggable>
        <Draggable bounds="parent">
          <div onClick={resizeGrabberHandler} className="meme-text text-bottom">{meme.bottomText}</div>
        </Draggable>
          <img className="meme-img" src={meme.randomImage} alt="meme" />
      </div>
    </div>
  );
}
