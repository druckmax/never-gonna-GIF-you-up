import { BsFillSuitHeartFill } from "react-icons/bs";
import { useContext, useState } from "react";
import { MainContext } from "../../context/context";

function GridItem({ item, url, className, img, alt, id }) {
  const context = useContext(MainContext);

  // Loading state for an image
  const [imgIsLoaded, setImgIsLoaded] = useState(false);

  console.log(item);
  const itemHeight = item.images.original.height;
  const itemWidth = item.images.original.width;

  const addToFavorites = (e) => {
    context.setDataFavorites((x) => [...x, item])
    e.target.remove()
  }

  return (
    <div className={className} key={id}>
      <a href={url} target="_blank" rel="noreferrer">
        <img onLoad={() => setImgIsLoaded(true)} src={img} alt={alt} id={id} />
      </a>
      {imgIsLoaded && (
        <BsFillSuitHeartFill
          className="heartIcon heartIconAnimation"
          onClick={() => addToFavorites}
        />
      )}
    </div>
  );
}

export default GridItem;
