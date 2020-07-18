import React from "react";

import "./index.css";
import logo from "../../assets/horizontal-branco.png";
import frajola from "../../assets/frajola.png";

export default function Home() {
  return (
    <div className="Container">
      <img src={logo} className="logo" />
      <div className="image">
        <img src={frajola} className="image" />
      </div>
    </div>
  );
}
