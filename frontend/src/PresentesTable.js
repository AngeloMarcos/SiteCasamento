// src/PresentesTable.js
import React, { useEffect, useState } from 'react';
import './App.css';    // só se você quiser usar esses estilos aqui

export default function PresentesTable() {
  const [presentes, setPresentes] = useState([]);

  useEffect(() => {
    async function fetchPresentes() {
      try {
        const res = await fetch('/api/presentes');
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setPresentes(data);
      } catch (err) {
        console.error('Erro ao buscar presentes:', err);
      }
    }
    fetchPresentes();
  }, []);

  if (presentes.length === 0) {
    return <p>Não há presentes cadastrados ainda.</p>;
  }

  return (
    <table className="presentes-table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Link</th>
          <th>Valor (R$)</th>
          <th>Reservado</th>
        </tr>
      </thead>
      <tbody>
        {presentes.map((p) => (
          <tr key={p.id}>
            <td>{p.nome}</td>
            <td>{p.descricao || '—'}</td>
            <td>
              {p.link ? (
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  Ver
                </a>
              ) : (
                '—'
              )}
            </td>
            <td>
              {p.valor != null
                ? parseFloat(p.valor).toFixed(2)
                : '0.00'}
            </td>
            <td>{p.reservado ? '✅' : '—'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
