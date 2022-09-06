import "./searchResults.scss";
import { MainContext } from "../../context/context";
import React, { useEffect, useContext } from "react";

import GridItem from "../GridItem/GridItem";
import GridWrapper from "../GridItem/GridWrapper";

export default function SearchResults() {
  const context = useContext(MainContext);

  const fetchSearch = async () => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=GwI7qfLYcyv0f8HgMdsx1M1SUthipXW1&q=${context.input}&limit=50&offset=0&rating=r&lang=en`
    );
    const data = await response.json();
    console.log(data);
    context.setDataSearch(data.data);
  };

  useEffect(() => {
    fetchSearch();
  }, [context.input]);

  return (
    <GridWrapper>
      {context.dataSearch.map((x) => {
        return (
          <GridItem
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
