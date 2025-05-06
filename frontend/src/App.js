import React, { useMemo, useState, useEffect } from 'react';
import './App.css';

import faixaImg        from './assets/faixa.png';
import img1            from './assets/img3.png';
import img2            from './assets/img4.png';
import img3            from './assets/img3.png';
import img6            from './assets/img6.png';
import img7            from './assets/img7.png';
import img8            from './assets/img8.png';
import img9            from './assets/img9.png';
import img10           from './assets/img10.png';

import Modal           from './components/Modal';
import ConvidadosTable from './ConvidadosTable';
import PresentesTable  from './PresentesTable';

const rawFotos = [
  { src: img1,  legenda: 'Nosso primeiro brinde 🍻' },
  { src: img2,  legenda: 'Deitados sob o céu 💕' },
  { src: img3,  legenda: 'Noite de sorrisos ✨' },
  { src: img6,  legenda: 'Momentos de verão 🌞' },
  { src: img7,  legenda: 'Nosso amor florescendo 🌸' },
  { src: img8,  legenda: 'Dias de sol e amor ☀️' },
  { src: img9,  legenda: 'Sorrisos que encantam 💖' },
  { src: img10, legenda: 'Nossa jornada juntos 🚀' },
  // duplicações para preencher visual
  { src: img6,  legenda: 'Momentos de verão 🌞' },
  { src: img7,  legenda: 'Nosso amor florescendo 🌸' },
  { src: img8,  legenda: 'Dias de sol e amor ☀️' },
  { src: img9,  legenda: 'Sorrisos que encantam 💖' },
  { src: img10, legenda: 'Nossa jornada juntos 🚀' },
];

export default function App() {
  const fotos = useMemo(
    () =>
      rawFotos.map(f => ({
        ...f,
        rot: (Math.random() * 10 - 5).toFixed(2),
        x:   (Math.random() * 40 - 20).toFixed(2),
        y:   (Math.random() * 40 - 20).toFixed(2),
      })),
    []
  );

  // estados para abrir/fechar modais
  const [isGuestModalOpen, setGuestModalOpen] = useState(false);
  const [isGiftModalOpen,  setGiftModalOpen]  = useState(false);

  // dados de convidados (fetch apenas aqui)
  const [convidados, setConvidados] = useState([]);
  useEffect(() => {
    fetch('/api/convidados')
      .then(res => res.json())
      .then(setConvidados)
      .catch(console.error);
  }, []);

  return (
    <div className="container">
      {/* HEADER com banner + navbar */}
      <header className="header">
        <div className="banner">
          <img src={faixaImg} alt="Faixa decorativa" className="faixa" />
          <h1 className="titulo">Angelo & Talita</h1>
        </div>
        <nav className="navbar">
          <button className="nav-button" onClick={() => setGuestModalOpen(true)}>
            Convidados
          </button>
          <button className="nav-button" onClick={() => setGiftModalOpen(true)}>
            Presentes
          </button>
        </nav>
      </header>

      {/* Galeria de Polaroids */}
      <div className="gallery">
        {fotos.map((f, i) => (
          <figure
            key={i}
            className="polaroid"
            style={{ transform: `translate(${f.x}px,${f.y}px) rotate(${f.rot}deg)` }}
          >
            <img src={f.src} alt={f.legenda} />
            <figcaption>{f.legenda}</figcaption>
          </figure>
        ))}
      </div>

      {/* Modal de Convidados */}
      <Modal
        isOpen={isGuestModalOpen}
        onClose={() => setGuestModalOpen(false)}
        title="Lista de Convidados"
      >
        <ConvidadosTable convidados={convidados} />
      </Modal>

      {/* Modal de Presentes */}
      <Modal
        isOpen={isGiftModalOpen}
        onClose={() => setGiftModalOpen(false)}
        title="Lista de Presentes"
      >
        <PresentesTable />
      </Modal>
    </div>
  );
}
