// src/components/GuestList.js
import React, { useEffect, useState } from 'react';
import './GuestList.css';
import { API_URL } from '../index';

export default function GuestList() {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/convidados`)
      .then(res => {
        if (!res.ok) throw new Error('Erro ao buscar convidados');
        return res.json();
      })
      .then(data => setGuests(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="convidados">
      <h2>Lista de Convidados</h2>
      <table className="guest-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>RSVP</th>
            <th>Acompanhantes</th>
            <th>Observações</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((g, i) => (
            <tr key={g.id || i}>
              <td>{g.nome}</td>
              <td>{g.rsvp}</td>
              <td>{g.acompanhantes}</td>
              <td>{g.observacoes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
