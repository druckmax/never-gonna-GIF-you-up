import React from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";

function GridItem({ url, className, img, alt, id }) {
  return (
    <div className={className} key={id}>
      <a href={url} target='_blank' rel='noreferrer'>
        <img src={img} alt={alt} id={id} />
      </a>
      <BsFillSuitHeartFill className="heartIcon" />
    </div>
  );
}

export default GridItem;
