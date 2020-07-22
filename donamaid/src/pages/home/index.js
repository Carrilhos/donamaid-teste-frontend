import React from "react";

import { Container } from "./homeStyles";
import "./index.css";
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
