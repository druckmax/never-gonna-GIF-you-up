import React from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { useContext, useState } from "react";
import { MainContext } from "../../context/context";
import LazyLoad from "react-lazy-load";

function GridItem({ item, url, className, img, alt, id }) {
  const context = useContext(MainContext);

  // Loading state for an image
  const [imgIsLoaded, setImgIsLoaded] = useState(false);

  console.log(item);
  const itemHeight = item.images.original.height;
  const itemWidth = item.images.original.width;

  return (
    <div className={className} key={id}>
      <a href={url} target="_blank" rel="noreferrer">
        {/* <LazyLoadImage alt={alt} height={itemHeight} width={itemWidth} src={img} /> */}
        <img
          onLoad={() => setImgIsLoaded(true)}
          src={img}
          alt={alt}
          id={id}
          width={itemWidth}
          height={itemHeight}
        />
      </a>
      {imgIsLoaded && <BsFillSuitHeartFill className="heartIcon heartIconAnimation" />}
    </div>
  );
}

export default GridItem;
