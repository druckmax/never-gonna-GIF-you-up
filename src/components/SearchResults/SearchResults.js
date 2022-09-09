import "./searchResults.scss";
import { MainContext } from "../../context/context";
import React, { useContext } from "react";

import GridItem from "../GridItem/GridItem";
import GridWrapper from "../GridItem/GridWrapper";
import { RiseLoader } from "react-spinners";

export default function SearchResults() {
  const context = useContext(MainContext);

  // Loading spinner
  if (context.loading)
    return (
      <GridWrapper loadingWrapper="loadingWrapper">
        <RiseLoader color={"#f3617a"} />
      </GridWrapper>
    );
  // Default text on start or when array is empty
  if (context.dataSearch.length === 0) {
    return (
      <GridWrapper>
        <h1>
          You can search for a GIF, check which GIFS are trending or generate a
          random one ☺️
        </h1>
        <p></p>
      </GridWrapper>
    );
  }
  // Main component
  return (
    <GridWrapper>
      {context.dataSearch.map((x) => {
        return (
          <GridItem
            item={x}
            url={x.url}
            className={"grid-item"}
            img={x.images.downsized_large.url}
            alt={x.slug}
            id={x.id}
            key={x.id}
            from="searchResults"
          />
        );
      })}
    </GridWrapper>
  );
}
