import React, { useMemo, useState, useEffect } from 'react';
import './App.css';

import faixaImg from './assets/faixa.png';
import img1 from './assets/img3.png';
import img2 from './assets/img4.png';
import img3 from './assets/img3.png';
import img6 from './assets/img6.png';
import img7 from './assets/img7.png';
import img8 from './assets/img8.png';
import img9 from './assets/img9.png';
import img10 from './assets/img10.png';

import Invitation from './components/Invitation';
import Modal from './components/Modal';
import ConvidadosTable from './ConvidadosTable';
import PresentesTable from './PresentesTable';

const rawFotos = [
  { src: img1,  legenda: 'Nosso primeiro brinde 🍻' },
  { src: img2,  legenda: 'Deitados sob o céu 💕' },
  { src: img3,  legenda: 'Noite de sorrisos ✨' },
  { src: img6,  legenda: 'Momentos de verão 🌞' },
  { src: img7,  legenda: 'Nosso amor florescendo 🌸' },
  { src: img8,  legenda: 'Dias de sol e amor ☀️' },
  { src: img9,  legenda: 'Sorrisos que encantam 💖' },
  { src: img10, legenda: 'Nossa jornada juntos 🚀' },
  // duplicações
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

  // Estados para os modais
  const [isGuestModalOpen, setGuestModalOpen] = useState(false);
  const [isGiftModalOpen,  setGiftModalOpen]  = useState(false);
  const [isInvitationModalOpen, setInvitationModalOpen] = useState(false);

  // Dados dos convidados
  const [convidados, setConvidados] = useState([]);
  useEffect(() => {
    fetch('/api/convidados')
      .then(res => res.json())
      .then(setConvidados)
      .catch(console.error);
  }, []);

  // Ao confirmar presença, fecha o convite e abre os convidados
  const handleRSVP = () => {
    setInvitationModalOpen(false);
    setGuestModalOpen(true);
  };

  return (
    <div className="container">
      {/* HEADER */}
      <header className="header">
        <div className="banner">
          <img src={faixaImg} alt="Faixa" className="faixa" />
          <h1 className="titulo">Angelo & Talita</h1>
        </div>
        <nav className="navbar">
          <button className="nav-button" onClick={() => setGuestModalOpen(true)}>
            Convidados
          </button>
          <button className="nav-button" onClick={() => setGiftModalOpen(true)}>
            Presentes
          </button>
          <button className="nav-button" onClick={() => setInvitationModalOpen(true)}>
            Convite
          </button>
        </nav>
      </header>

      {/* GALERIA */}
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

      {/* MODAL DE CONVIDADOS */}
      <Modal
        isOpen={isGuestModalOpen}
        onClose={() => setGuestModalOpen(false)}
        title="Lista de Convidados"
      >
        <ConvidadosTable convidados={convidados} />
      </Modal>

      {/* MODAL DE PRESENTES */}
      <Modal
        isOpen={isGiftModalOpen}
        onClose={() => setGiftModalOpen(false)}
        title="Lista de Presentes"
      >
        <PresentesTable />
      </Modal>

      {/* MODAL DE CONVITE */}
      <Modal
        isOpen={isInvitationModalOpen}
        onClose={() => setInvitationModalOpen(false)}
        title="Convite"
      >
        <Invitation onRSVP={handleRSVP} onClose={() => setInvitationModalOpen(false)} />
      </Modal>
    </div>
  );
}
