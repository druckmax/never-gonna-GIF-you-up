import React from "react";
import Switch from "react-switch";
import moon from "./img/moon-solid.svg";

export default function MySwitch(props) {
  return (
    <Switch
      checked={props.checked}
      onChange={props.toggleTheme}
      onColor="#494E79"
      offColor="#FFC794"
      offHandleColor="#444"
      onHandleColor="#494E79"
      uncheckedIcon={false}
      height={40}
      width={80}
      checkedIcon={
        <img
          alt="logo"
          src={moon}
          style={{ filter: "invert(1)", height: '100%', position: 'relative', left: '5px' }}
        />
      }
      className="react-switch"
      id="material-switch"
    />
  );
}
