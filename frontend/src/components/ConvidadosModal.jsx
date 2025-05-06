import React from 'react';
import Modal from './Modal';
import '../Table.css'; // estilos de tabela

export default function ConvidadosModal({ isOpen, onClose, convidados }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Lista de Convidados">
      <div className="table-wrapper">
        <table className="convidados-table">
          <thead>
            <tr>
              <th>Nome</th><th>RSVP</th><th>Acompanhantes</th><th>Obs.</th>
            </tr>
          </thead>
          <tbody>
            {convidados.map(c => (
              <tr key={c.id}>
                <td>{c.nome}</td>
                <td>{c.rsvp}</td>
                <td>{c.acompanhantes}</td>
                <td>{c.observacoes||'—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Modal>
  );
}
