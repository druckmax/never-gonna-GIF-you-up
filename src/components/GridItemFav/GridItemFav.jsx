import React, { useContext } from 'react'
import { MainContext } from '../../context/context'
import { ImCross } from "react-icons/im";

function GridItemFav({ url, className, img, alt, id, item }) {

  const context = useContext(MainContext)

  const removeItem = (item) => {
    context.setDataFavorites(context.dataFavorites.filter(item => item.id !== id))
  }

  return (
    <div className={className} key={id}>
      <a href={url} target='_blank' rel='noreferrer'>
        <img src={img} alt={alt} id={id} />
      </a>
      <ImCross className="heartIcon xIcon" onClick={() => removeItem()}/>
    </div>
  );
}

export default GridItemFav;

