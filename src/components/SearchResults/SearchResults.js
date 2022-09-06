import React, { useEffect, useContext } from 'react'
import { MainContext } from '../../context/context'
import './searchResults.scss'
import {BsFillSuitHeartFill} from 'react-icons/bs'


export default function SearchResults() {

  const context = useContext(MainContext)

  const fetchSearch = async () => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=GwI7qfLYcyv0f8HgMdsx1M1SUthipXW1&q=${context.input}&limit=50&offset=0&rating=r&lang=en`)
    const data = await response.json()
    console.log(data);
    context.setDataSearch(data.data)
  }

  useEffect(() => {
    fetchSearch()
  },[context.input])

  return (
    
    <div className="content-container">
        <div className="grid-container">
            {context.dataSearch.map(x => {
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
