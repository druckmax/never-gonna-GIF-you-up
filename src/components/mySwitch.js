import React from "react";
import Switch from "react-switch";
import moon from "../image/moon-solid.svg"



export default function MySwitch ({toggleTheme, checked}){

return (
    <Switch
            checked={checked}
            onChange={toggleTheme}
            onColor="#494E79"
            offColor="#FFC794"
            offHandleColor="#000000"
            onHandleColor="#494E79"
            uncheckedIcon={false}
            checkedIcon={
              <img alt="logo" src={moon} height="100%" width="100%" style={{filter:"invert(1)"}}/>
            }
            // boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            // activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            // height={20}
            // width={48}
            className="react-switch"
            id="material-switch"
          />
)

}