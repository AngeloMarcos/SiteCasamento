import React, { useState } from 'react';
import './RSVPForm.css';

export default function RSVPForm({ isOpen, onClose, onSubmit }) {
  const [form, setForm] = useState({ name: '', email: '', guests: 1 });

  if (!isOpen) return null;

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);
  }

  return (
    <div className="rsvp-backdrop">
      <div className="rsvp-container">
        <button className="rsvp-close" onClick={onClose}>×</button>
        <h2>Confirme seus Dados</h2>
        <form onSubmit={handleSubmit} className="rsvp-form">
          <label>
            Nome completo
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            E-mail
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Número de convidados
            <input
              type="number"
              name="guests"
              value={form.guests}
              min="1"
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="rsvp-submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
