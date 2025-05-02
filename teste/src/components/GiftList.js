import React from 'react';
import './GiftList.css';

const gifts = [
  // Exemplo: { item: 'Conjunto de pratos', sugeridoPor: 'Talita', status: 'Pendente' },
];

export default function GiftList() {
  return (
    <section id="presentes">
      <h2>Lista de Presentes</h2>
      <table className="gift-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Sugerido Por</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {gifts.map((g, i) => (
            <tr key={i}>
              <td>{g.item}</td>
              <td>{g.sugeridoPor}</td>
              <td>{g.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}