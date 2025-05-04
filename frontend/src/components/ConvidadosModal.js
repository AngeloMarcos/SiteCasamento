// src/components/ConvidadosModal.js
import React from 'react';
import './ConvidadosModal.css';

export default function ConvidadosModal({ isOpen, onClose, convidados }) {
  if (!isOpen) return null;
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>Lista de Convidados</h2>
        <table className="modal-table">
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
    </div>
  );
}
