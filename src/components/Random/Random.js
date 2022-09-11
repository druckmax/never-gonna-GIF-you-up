import React, { useEffect, useContext } from "react";
import { MainContext } from "../../context/context";
import "./random.scss";
import GridItem from "../GridItem/GridItem";
import { RiseLoader } from "react-spinners";

export default function Random() {
  const context = useContext(MainContext);

  useEffect(() => {
    context.fetchRandom();
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, []);

  // loading spinner
  if (context.loading)
    return (
        <RiseLoader className="loadingWrapper" color={"#f3617a"} />
    );
  // Main component
  return (
    <>
      <GridItem
        item={context.dataRandom}
        className={"grid-item-random"}
        img={context.dataRandom.images?.original.url}
        alt={context.dataRandom?.slug}
        id={context.dataRandom?.id}
        key={context.dataRandom?.id}
        from="random"
      />
    </>
  );
}
