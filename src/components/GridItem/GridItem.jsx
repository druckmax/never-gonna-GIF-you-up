import { BsFillSuitHeartFill } from "react-icons/bs";
import { useContext, useState, useEffect } from "react";
// import {
//   NotificationContainer,
//   NotificationManager,
// } from "react-notifications";
import { MainContext } from "../../context/context";

function GridItem({ item, url, className, img, alt, id, from }) {
  const context = useContext(MainContext);

  // Loading state for an image
  const [imgIsLoaded, setImgIsLoaded] = useState(false);
  const [icon, setIcon] = useState(true);

  const addToFavorites = (e) => {
    context.createNotification(item.title);
    context.setDataFavorites((x) => {
      if ([...x].some((x) => x.id === id)) return x;
      setIcon(false);
      localStorage.setItem("Favorites", JSON.stringify([...x, item]));
      return [...x, item];
    });
  };

  const checkForItems = () => {
    if (context.dataFavorites.some((favItem) => favItem.id === id)) {
      setIcon(false);
    }
  };

  const modalToggle = () => {
    context.setShowModal(true);
    context.setIdTransfer(id);
    context.setFrom(from);
  };

  useEffect(() => {
    checkForItems();
  }, []);

  return (
    <div className={className} key={id}>
      <div className="grid-item-container" onClick={modalToggle}>
        <img onLoad={() => setImgIsLoaded(true)} src={img} alt={alt} id={id} loading='lazy' />
      </div>
      {imgIsLoaded ? (
        icon ? (
          <div>
            <BsFillSuitHeartFill
              className="heartIcon heartIconAnimation"
              onClick={addToFavorites}
            />
          </div>
        ) : (
          <BsFillSuitHeartFill className="heartIcon heartGrey heartIconAnimation" />
        )
      ) : null}
    </div>
  );
}

export default GridItem;
