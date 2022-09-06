import "./searchResults.scss";
import { MainContext } from "../../context/context";
import React, { useContext } from "react";

import GridItem from "../GridItem/GridItem";
import GridWrapper from "../GridItem/GridWrapper";

export default function SearchResults() {
  const context = useContext(MainContext);

  return (
    <GridWrapper>
      {context.dataSearch.map((x) => {
        return (
          <GridItem
            url={x.url}
            className={"grid-item"}
            img={x.images.downsized_large.url}
            alt={x.slug}
            id={x.id}
            key={x.id}
          />
        );
      })}
    </GridWrapper>
  );
}
