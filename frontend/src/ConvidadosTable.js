import React from 'react';
import './Table.css';  // estilos gerais de tabelas

export default function ConvidadosTable({ convidados }) {
  if (!convidados) return null;
  if (convidados.length === 0) {
    return <p>Não há convidados cadastrados ainda.</p>;
  }

  return (
    <div className="table-wrapper">
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
    </div>
  );
}
