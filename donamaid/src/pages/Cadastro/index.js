import React from "react";

import { Container } from "./homeStyles";
import "./index.css";
import donie from "../../assets/donie.svg";

export default function Registro() {
  return (
    <Container>
      <div className="form">
        <img src={donie} className="donie" />
        <form className="formulario">
          <div>
            <input placeholder="Nome" />
            <input placeholder="Sobrenome" />
          </div>
          <div>
            <input placeholder="Senha" />
            <input placeholder="Confirme sua senha" />
          </div>
          <div>
            <input placeholder="Email" />
            <input placeholder="Celular" />
          </div>
        </form>
        <button className="buttonForm">Cadastrar</button>
      </div>
    </Container>
  );
}
