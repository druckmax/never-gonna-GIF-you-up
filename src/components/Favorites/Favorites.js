import React, { useContext } from 'react'
import { MainContext } from '../../context/context';
import './favorites.scss'

import { BsFillSuitHeartFill } from "react-icons/bs";
import GridItem from "../GridItem/GridItem";
import GridWrapper from "../GridItem/GridWrapper";


export default function Favorites() {

  const context = useContext(MainContext)

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
          <GridItem
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
