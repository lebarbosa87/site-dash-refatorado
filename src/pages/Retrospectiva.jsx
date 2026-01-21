import React from "react";
import Layout from "../components/layout/Layout";
import { useState } from "react";

export default function Retrospectiva() {
  const [itens, setItens] = useState([]);
  const [texto, setTexto] = useState("");

  function adicionarItem() {
    if (!texto.trim()) return;
    setItens([...itens, texto]);
    setTexto("");
  }

  return (
    <Layout>
      <h1>Retrospectiva</h1>

      <div style={{ marginBottom: "16px" }}>
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Novo ponto da retrospectiva"
        />
        <button onClick={adicionarItem}>Adicionar</button>
      </div>

      <ul>
        {itens.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Layout>
  );
}
