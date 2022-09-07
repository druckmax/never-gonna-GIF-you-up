import React from "react";
import { useContext } from "react";
import { MainContext } from "../../context/context";

function GridWrapper({ loadingWrapper, children }) {
  const lightswitch = useContext(MainContext);

  return (
    <div
      className={`grid-container ${
        lightswitch.theme === "light" && "grid-container-light"
      }`}
    >
      <div className={loadingWrapper}>{children}</div>
    </div>
  );
}

export default GridWrapper;
