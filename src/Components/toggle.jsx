import React from "react";
import "../Style/toggle.css";

// import Sun from "@iconscout/react-unicons/icons/uil-sun";
// import Moon from "@iconscout/react-unicons/icons/uil-moon";
import { themeContext } from "../context";
import { useContext } from "react";

function Toggle() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };

  return (
    <div className="toggle w-[30px]" onClick={handleClick}>
     {/* <p>sun</p>
      <p>moon</p> */}
      <div
        className="t-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
}

export default Toggle;
