import React, { useState } from 'react'
import { MainContext } from '../../context/context';
import { useContext } from 'react';
import { useEffect } from 'react';

import './MemeGenerator.scss'


export default function MemeGenerator() {

    const context = useContext(MainContext);

// creating useState for holding an object which will hold the data which will type in the inputfiels and what image will display
    const [meme,setMeme] = useState(
        {
            topText: "",
            bottomText: "",
            // todo Placeholder image or container
            randomImage: ""
        }
    )

    useEffect(() => {
        context.fetchRandom();
      }, [meme]);

    // creating function to update the objects property "randomImag" which is hold into state "meme". We get a random image everytime this function gets called. The function ges called, when the button gets clicked.
    function getMemeImage() {
        const memesArray = context.dataRandom?.images.original
        console.log(memesArray);
        const url = memesArray.url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }


// we apply a handleChange function on the input fields property "Onchange". This function is called everytime the user types something. The function will update our object "meme" in the state.
    function handleChange (e) {
        const {value, name} = e.target
        setMeme(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }
// we return JSX code. The Input values are given by targeting our state object "meme" --> meme.topText will give us the value, which the user typed in and show it in a div which we position on top of the img.
  return (
    <div className='meme-container'>
        <div className='form'>
            <div className="meme-input-container">
                <input value={meme.topText} name='topText' onChange={handleChange} type="text" className='input-1' placeholder='Shut up'></input>
                <input value={meme.bottomText} name='bottomText' onChange={handleChange} type="text" className='input-2' placeholder='and take my money'></input>
            </div>
            <button onClick={getMemeImage}>Get a new meme image <i className="fa-regular fa-image"></i></button>
        </div>
        <div className='meme-image-container'>
            <div className='meme-text text-top'>{meme.topText}</div>
            <div className='meme-text text-bot'>{meme.bottomText}</div>
            <img className='meme-foto' src={meme.randomImage} alt="meme"></img>
        </div>
    </div>
  )
}
