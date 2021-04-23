import React, { useState } from "react";
import "./style.css";

export default function App() {
  let styleObj = { backgroundColor: "purple" };
  let name1 = "Change Bg Color";
  let [iBgColor, setBgColor] = useState(styleObj);
  let [name, setName] = useState(name1);
  const bgColor = () => {
    styleObj = { backgroundColor: "yellow" };
    setBgColor(styleObj);
    name = "Bg Color Changed";
    setName(name);
  };

  const backColor = () => {
    setBgColor({ backgroundColor: "purple" });
    setName("Bhai sahhab !");
  };
  return (
    <div style={iBgColor}>
      <button onClick={bgColor} onDoubleClick={backColor}>
        {name}
      </button>
      <button onMouseOver={bgColor} onMouseLeave={backColor}>
        {name}
      </button>
    </div>
  );
}
