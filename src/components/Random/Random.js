import React, { useEffect, useContext } from 'react'
import { MainContext } from '../../context/context';
import "./random.scss";import GridItem from "../GridItem/GridItem";


export default function Random() {

    const context = useContext(MainContext)

    const fetchRandom = async () => {
      const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=GwI7qfLYcyv0f8HgMdsx1M1SUthipXW1&tag=&rating=r')
      const data = await response.json()
      context.setDataRandom(data.data)
    }

    useEffect(() => {
      fetchRandom()
    },[])

  return (
    <>
          <GridItem
            className={"grid-item-random"}
            img={context.dataRandom.images?.original.url}
            alt={context.dataRandom?.slug}
            id={context.dataRandom?.id}
            key={context.dataRandom?.id}
          />
    </>
  );
}