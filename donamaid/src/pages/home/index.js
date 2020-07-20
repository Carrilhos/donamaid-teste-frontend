import React from "react";

import { Container, Profile, ProfileData, Description } from "./homeStyles";
import "./index.css";
import logo from "../../assets/horizontal-branco.png";
import frajola from "../../assets/frajola.png";

export default function Home() {
  return (
    <Container>
      <div>
        <img src={logo} className="logo" />
        <Profile>
          <img src={frajola} className="image" />
          <div>
            <ProfileData className="profileData">
              <div className="name">FRAJOLA</div>
              <p> Animando </p>
            </ProfileData>
            <Description>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent nec bibendum est, laoreet volutpat orci. Curabitur non
                ultricies justo, vel congue nibh. Aliquam erat volutpat. Aliquam
                vitae neque
              </p>
            </Description>
          </div>
          <div className="containerButton">
            <button className="button">ME APERTA</button>
          </div>
        </Profile>
      </div>
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
