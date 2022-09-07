import "./trending.scss";
import React, { useEffect, useContext } from "react";
import { MainContext } from "../../context/context";
import GridItem from "../GridItem/GridItem";
import GridWrapper from "../GridItem/GridWrapper";
import { RiseLoader } from "react-spinners";

export default function Trending() {
  const context = useContext(MainContext);

  const fetchTrending = async () => {
    context.setLoading(true);
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${context.API_KEY_2}&limit=50&rating=r`
    );
    const data = await response.json();
    console.log(data);
    context.setDataTrending(data.data);
  };

  useEffect(() => {
    fetchTrending();
    setTimeout(() => context.setLoading(false), 1000);
  }, []);

  if (context.loading)
    return (
      <GridWrapper loadingWrapper='loadingWrapper'>
        <RiseLoader color={"#f3617a"} />
      </GridWrapper>
    );
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
            item={x}
          />
        );
      })}
    </GridWrapper>
  );
}
