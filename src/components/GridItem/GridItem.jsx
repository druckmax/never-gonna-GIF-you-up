import React, { useContext } from 'react'
import { MainContext } from '../../context/context'
import { BsFillSuitHeartFill } from "react-icons/bs";

function GridItem({ url, className, img, alt, id, item }) {

  const context = useContext(MainContext)

  return (
    <div className={className} key={id}>
      <a href={url} target='_blank' rel='noreferrer'>
        <img src={img} alt={alt} id={id} />
      </a>
      <BsFillSuitHeartFill className="heartIcon" onClick={() => context.setDataFavorites((x) => ([...x, item]))}/>
    </div>
  );
}

export default GridItem;
