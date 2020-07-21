import React from "react";

import { Container, Profile, ProfileData, Description } from "./homeStyles";
import "./index.css";
import logo from "../../assets/horizontal-branco.png";
import frajola from "../../assets/frajola.png";

export default function Profissional() {
  return (
    <Container>
      <div>
        <img src={logo} className="logo" />
        <Profile>
          <img src={frajola} className="image" />
          <div>
            <div className="containerX">
              <ProfileData className="profileData">
                <div className="name">Frajola</div>
                <p> Com a donamaid desde 2020</p>
              </ProfileData>
              <Description>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent nec bibendum est, laoreet volutpat orci. Curabitur
                  non ultricies justo, vel congue nibh. Aliquam erat volutpat.
                  Aliquam vitae neque
                </p>
              </Description>
            </div>
            <div className="buttonContainer">
              <button className="button">Quero contratar Frajola</button>
            </div>
          </div>
        </Profile>
      </div>
    </Container>
  );
}
