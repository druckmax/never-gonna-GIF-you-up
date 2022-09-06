import React, { useEffect, useContext } from 'react'
import { MainContext } from '../../context/context';
import './random.scss'
import { BsFillSuitHeartFill } from "react-icons/bs";


export default function Random() {

    const context = useContext(MainContext)

    const fetchRandom = async () => {
      const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=GwI7qfLYcyv0f8HgMdsx1M1SUthipXW1&tag=&rating=r')
      const data = await response.json()
      context.setDataRandom(data.data)
    }

    useEffect(() => {
      fetchRandom()
    },[])

    console.log(context.dataRandom.images);
  return (
    <div className="content-container">
                <div className="grid-item-random" key={context.dataRandom?.id}> 
                    <img src={context.dataRandom.images?.original.url} alt={context.dataRandom?.slug} id={context.dataRandom?.id} />
                    <BsFillSuitHeartFill className='heartIcon' />
                </div>
    </div>
  );
}