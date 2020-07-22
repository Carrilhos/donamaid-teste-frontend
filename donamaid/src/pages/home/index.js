import React, { useState, useEffect } from "react";

import { Container } from "./homeStyles";
import "./index.css";
import Profissionais from "../../componets/Profile";

import api from "../../services/api";

export default function Home() {
  const [people, setPeople] = useState([]);

  async function loadPeople() {
    const response = await api.get(`/people/`);
    setPeople(response.data.results);
  }

  useEffect(() => {
    loadPeople();
  });
  return (
    <Container>
      <Profissionais />
      <div className="lista">
        <div className="titulo">Lista de Profissionais</div>
        <br />
        {people.map(people => (
          <div className="listItem">{people.name}</div>
        ))}
      </div>
    </Container>
  );
}
