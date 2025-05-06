// src/ConvidadosTable.js
import React from 'react';
import './Table.css'; // css compartilhado com PresentesTable

export default function ConvidadosTable({ convidados, loading, error }) {
  if (loading) {
    return <p className="table-status">Carregando convidados...</p>;
  }
  if (error) {
    return <p className="table-status error">Erro ao carregar: {error}</p>;
  }
  if (!convidados || convidados.length === 0) {
    return <p className="table-status">Nenhum convidado cadastrado.</p>;
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
