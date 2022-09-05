import React from 'react'
import './myFavorites.scss'

export default function MyFavorites() {

    const data = [
        
    ]

  return (
    <div className="content-container">
        <div className="grid-container">
            {data.map(x => {
                return (
                <div className="grid-item" key={x.id}> 
                    <img src={x.images.downsized_large.url} alt={x.slug} id={x.id} />
                </div>
                )})}
        </div>   
    </div>
  )
}
