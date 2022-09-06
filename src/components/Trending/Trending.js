import React, { useEffect, useContext } from 'react'
import { MainContext } from '../../context/context'
import './trending.scss'

import {BsFillSuitHeartFill} from 'react-icons/bs'

export default function Trending() {

    const context = useContext(MainContext)

    const fetchTrending = async () => {
      const response = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=GwI7qfLYcyv0f8HgMdsx1M1SUthipXW1&limit=50&rating=r')
      const data = await response.json()
      console.log(data);
      context.setDataTrending(data.data)
    }

    useEffect(() => {
      fetchTrending()
    },[])

  return (
    <div className="content-container">
        <div className="grid-container">
            {context.dataTrending.map(x => {
                return (
                <div className="grid-item" key={x.id}> 
                    <img src={x.images.downsized_large.url} alt={x.slug} id={x.id} />
                    <BsFillSuitHeartFill className='heartIcon' />
                </div>
                )})}
        </div>   
    </div>
  )
}