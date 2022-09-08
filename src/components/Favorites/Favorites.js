import React, { useContext, useEffect } from "react";
import { MainContext } from "../../context/context";
import "./favorites.scss";

import { BsFillSuitHeartFill } from "react-icons/bs";
import GridItemFav from "../GridItemFav/GridItemFav";
import GridWrapper from "../GridItem/GridWrapper";

export default function Favorites() {
  const context = useContext(MainContext);

  useEffect(() => {
      if(localStorage.getItem("Favorites")){
      context.setDataFavorites(JSON.parse(localStorage.getItem("Favorites")));
  }}, []);

  if (context.dataFavorites.length === 0)
    return (
      <div className="emptyArray">
        <h2>Nothing here yet!</h2>
        <p>Add your favorite GIF by clicking on the heart icons </p>
        <BsFillSuitHeartFill className="heartIcon" />
      </div>
    );

  return (
    <GridWrapper>
      {context.dataFavorites.map((x) => {
        return (
          <GridItemFav
            url={x?.url}
            className={"grid-item"}
            img={x?.images.downsized_large.url}
            alt={x?.slug}
            id={x?.id}
            key={x?.id}
          />
        );
      })}
    </GridWrapper>
  );
}
