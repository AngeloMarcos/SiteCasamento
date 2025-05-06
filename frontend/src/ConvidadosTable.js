import React from 'react';
import './Table.css';  // estilos gerais de tabelas

export default function ConvidadosTable({ convidados }) {
  if (!convidados || !convidados.length) {
    return <p>Não há convidados cadastrados.</p>;
  }
  return (
    <table>
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
