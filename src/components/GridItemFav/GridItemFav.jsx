import React, { useContext } from 'react'
import { MainContext } from '../../context/context'
import { ImCross } from "react-icons/im";

function GridItemFav({ url, className, img, alt, id, item, from }) {

  const context = useContext(MainContext)

  const removeItem = () => {
    context.setDataFavorites(context.dataFavorites.filter(item => item.id !== id))
    localStorage.setItem("Favorites", JSON.stringify(context.dataFavorites.filter(item => item.id !== id)));
  }

  const modalToggle = () => {
    context.setShowModal(true);
    context.setIdTransfer(id);
    context.setFrom(from);
  };

  return (
    <div className={className} key={id}>
      <div className="grid-item-container" onClick={modalToggle}>
        <img src={img} alt={alt} id={id} />
      </div>
      <ImCross className="heartIcon xIcon" onClick={() => removeItem()}/>
    </div>
  );
}

export default GridItemFav;

