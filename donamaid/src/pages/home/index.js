import React from "react";

import { Container, Profile, ProfileData, Description } from "./homeStyles";
import "./index.css";
import logo from "../../assets/horizontal-branco.png";
import frajola from "../../assets/frajola.png";
import Profissionais from "../../componets/Profile";

export default function Home() {
  return (
    <Container>
      <Profissionais />
      <div className="lista">
        <h3> Lista de profissionais</h3>
        <ul>
          <li> PRIMEIRO ITEM </li>
          <li> SEGUNDO ITEM </li>
          <li> TERCEIRO ITEM </li>
        </ul>
      </div>
    </Container>
  );
}
