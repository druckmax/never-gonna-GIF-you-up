import { BsFillSuitHeartFill } from "react-icons/bs";
import { useContext, useState } from "react";
import { MainContext } from "../../context/context";

function GridItem({ item, url, className, img, alt, id }) {
  const context = useContext(MainContext);

  // Loading state for an image
  const [imgIsLoaded, setImgIsLoaded] = useState(false);
  const [icon, setIcon] = useState(true);

  const addToFavorites = () => {
    context.setDataFavorites((x) => [...x, item]);
    setIcon(false);
  };
  return (
    <div className={className} key={id}>
      <a href={url} target="_blank" rel="noreferrer">
        <img onLoad={() => setImgIsLoaded(true)} src={img} alt={alt} id={id} />
      </a>
      {imgIsLoaded ? (
        icon ? (
          <BsFillSuitHeartFill
            className="heartIcon heartIconAnimation"
            onClick={() => addToFavorites()}
          />
        ) : (
          <BsFillSuitHeartFill className="heartIcon heartGrey heartIconAnimation" />
        )
      ) : null}
    </div>
  );
}

export default GridItem;
