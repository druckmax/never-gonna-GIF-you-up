import { BsFillSuitHeartFill } from "react-icons/bs";
import { useContext, useState, useEffect } from "react";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { MainContext } from "../../context/context";

function GridItem({ item, url, className, img, alt, id }) {
  const context = useContext(MainContext);

  // Loading state for an image
  const [imgIsLoaded, setImgIsLoaded] = useState(false);
  const [icon, setIcon] = useState(true);

<<<<<<< HEAD
<<<<<<< HEAD
  const addToFavorites = () => {
    context.setDataFavorites((x) => [...x, item])
    setIcon(false)
  }
=======
=======
>>>>>>> c2ace155502cc22dab1e7541fd17bafd883c633f
  const createNotification = (name) => {
        NotificationManager.success( 'has been added to Favorites', `${name}`)
  };

  const addToFavorites = (e) => {
    createNotification(item.title)
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

  useEffect(() => {
    checkForItems();
  }, []);
<<<<<<< HEAD
>>>>>>> da4eee2a6ae42730f254302d3af9a9c6f0bb77d7
=======
>>>>>>> c2ace155502cc22dab1e7541fd17bafd883c633f

  return (
    <div className={className} key={id}>
      <a href={url} target="_blank" rel="noreferrer">
        <img onLoad={() => setImgIsLoaded(true)} src={img} alt={alt} id={id} />
        <NotificationContainer/>
      </a>
      {imgIsLoaded ? (
        icon ? (
          <div>
            <BsFillSuitHeartFill
              className="heartIcon heartIconAnimation"
              onClick={addToFavorites}
            />
            <NotificationContainer/>
          </div>
        ) : (
          <BsFillSuitHeartFill className="heartIcon heartGrey heartIconAnimation" />
        )
      ) : null}

        

    </div>
  );
}

export default GridItem;
