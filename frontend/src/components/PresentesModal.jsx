import React from 'react';
import Modal from './Modal';
import '../Table.css';

export default function PresentesModal({ isOpen, onClose, presentes }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Lista de Presentes">
      <div className="table-wrapper">
        <table className="presentes-table">
          <thead>
            <tr>
              <th>Nome</th><th>Descrição</th><th>Link</th><th>Valor</th><th>Reservado</th>
            </tr>
          </thead>
          <tbody>
            {presentes.map(p => (
              <tr key={p.id}>
                <td>{p.nome}</td>
                <td>{p.descricao||'—'}</td>
                <td>{
                  p.link
                    ? <a href={p.link} target="_blank" rel="noopener">Ver</a>
                    : '—'
                }</td>
                <td>{p.valor!=null?parseFloat(p.valor).toFixed(2):'0.00'}</td>
                <td>{p.reservado?'✅':'—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Modal>
  );
}
