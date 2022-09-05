import React from "react";
import "./favorites.scss";

import { BsFillSuitHeartFill } from "react-icons/bs";

export default function Favorites() {
  const data = [];

  if (data.length === 0)
    return (
        <div className="emptyArray">
          <h2>Nothing here yet!</h2>
          <p>Add your favorite GIF by clicking on the heart icons </p>
          <BsFillSuitHeartFill className="heartIcon" />
        </div>
    );

  return (
    <div className="content-container">
      <div className="grid-container">
        {data.map((x) => {
          return (
            <div className="grid-item" key={x.id}>
              <img src={x.images.downsized_large.url} alt={x.slug} id={x.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
