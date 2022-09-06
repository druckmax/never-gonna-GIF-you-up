import React from "react";
import {BsFillSuitHeartFill} from 'react-icons/bs'

function GridItem({className, img, alt, id}) {
  return (
    <div className={className} key={id}>
      <img src={img} alt={alt} id={id} />
      <BsFillSuitHeartFill className="heartIcon" />
    </div>
  );
}

export default GridItem;
