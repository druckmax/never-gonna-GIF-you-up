import "./trending.scss";
import React, { useEffect, useContext } from "react";
import { MainContext } from "../../context/context";
import GridItem from "../GridItem/GridItem";
import GridWrapper from "../GridItem/GridWrapper";

export default function Trending() {
  const context = useContext(MainContext);

  const fetchTrending = async () => {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/trending?api_key=GwI7qfLYcyv0f8HgMdsx1M1SUthipXW1&limit=50&rating=r"
    );
    const data = await response.json();
    console.log(data);
    context.setDataTrending(data.data);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <GridWrapper>
      {context.dataTrending.map((x) => {
        return (
          <GridItem
            url={x.url}
            key={x.id}
            className={"grid-item"}
            img={x.images.downsized_large.url}
            alt={x.slug}
            id={x.id}
          />
        );
      })}
    </GridWrapper>
  );
}
