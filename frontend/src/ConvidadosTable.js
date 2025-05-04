// src/ConvidadosTable.js
import React, { useEffect, useState } from 'react';
import './App.css';  // caso deseje usar os estilos já no App.css

export default function ConvidadosTable() {
  const [convidados, setConvidados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchConvidados() {
      try {
        const res = await fetch('/api/convidados');
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setConvidados(data);
      } catch (err) {
        console.error('Erro ao buscar convidados:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchConvidados();
  }, []);

  if (loading) {
    return <p>Carregando convidados...</p>;
  }
  if (error) {
    return <p style={{ color: 'red' }}>Erro: {error}</p>;
  }
  if (convidados.length === 0) {
    return <p>Não há convidados cadastrados ainda.</p>;
  }

  return (
    <table className="convidados-table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>RSVP</th>
          <th>Acompanhantes</th>
          <th>Observações</th>
        </tr>
      </thead>
      <tbody>
        {convidados.map(c => (
          <tr key={c.id}>
            <td>{c.nome}</td>
            <td>{c.rsvp}</td>
            <td>{c.acompanhantes}</td>
            <td>{c.observacoes || '—'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
