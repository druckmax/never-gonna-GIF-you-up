import React from 'react'
import './favorites.scss'

export default function Favorites() {

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
