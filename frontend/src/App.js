// src/App.js
import React, { useMemo, useState, useEffect } from 'react';
import './App.css';

import faixaImg from './assets/faixa.png';
import img1     from './assets/img3.png';
import img2     from './assets/img4.png';
import img3     from './assets/img3.png';
import img6     from './assets/img6.png';
import img7     from './assets/img7.png';
import img8     from './assets/img8.png';
import img9     from './assets/img9.png';
import img10    from './assets/img10.png';

import ConvidadosModal from './components/ConvidadosModal';
import PresentesModal  from './components/PresentesModal';

const rawFotos = [
  { src: img1,  legenda: 'Nosso primeiro brinde 🍻' },
  { src: img2,  legenda: 'Deitados sob o céu 💕' },
  { src: img3,  legenda: 'Noite de sorrisos ✨' },
  { src: img6,  legenda: 'Momentos de verão 🌞' },
  { src: img7,  legenda: 'Nosso amor florescendo 🌸' },
  { src: img8,  legenda: 'Dias de sol e amor ☀️' },
  { src: img9,  legenda: 'Sorrisos que encantam 💖' },
  { src: img10, legenda: 'Nossa jornada juntos 🚀' },
  // extra para layout mais “cheio”
  { src: img6,  legenda: 'Momentos de verão 🌞' },
  { src: img7,  legenda: 'Nosso amor florescendo 🌸' },
  { src: img8,  legenda: 'Dias de sol e amor ☀️' },
  { src: img9,  legenda: 'Sorrisos que encantam 💖' },
  { src: img10, legenda: 'Nossa jornada juntos 🚀' }
];

export default function App() {
  // estados de controle de modal
  const [convidados, setConvidados] = useState([]);
  const [presentes,   setPresentes]   = useState([]);
  const [openGuests,  setOpenGuests]  = useState(false);
  const [openGifts,   setOpenGifts]   = useState(false);

  // busca convidados
  useEffect(() => {
    fetch('/api/convidados')
      .then(res => res.json())
      .then(setConvidados)
      .catch(console.error);
  }, []);

  // busca presentes
  useEffect(() => {
    fetch('/api/presentes')
      .then(res => res.json())
      .then(setPresentes)
      .catch(console.error);
  }, []);

  // gera posicionamento randomizado das fotos
  const fotos = useMemo(
    () =>
      rawFotos.map(f => ({
        ...f,
        rot: (Math.random() * 10 - 5).toFixed(2),
        x:   (Math.random() * 40 - 20).toFixed(2),
        y:   (Math.random() * 40 - 20).toFixed(2)
      })),
    []
  );

  return (
    <div className="container">
      {/* HEADER */}
      <header className="header">
        <div className="banner">
          <img src={faixaImg} alt="Faixa decorativa" className="faixa" />
          <h1 className="titulo">Angelo &amp; Talita</h1>
        </div>
        <nav className="navbar">
          <button className="nav-button" onClick={() => setOpenGuests(true)}>
            Convidados
          </button>
          <button className="nav-button" onClick={() => setOpenGifts(true)}>
            Presentes
          </button>
        </nav>
      </header>

      {/* GALERIA DE POLAROIDS */}
      <div className="gallery">
        {fotos.map((f, i) => (
          <figure
            key={i}
            className="polaroid"
            style={{
              transform: `translate(${f.x}px, ${f.y}px) rotate(${f.rot}deg)`
            }}
          >
            <img src={f.src} alt={f.legenda} />
            <figcaption>{f.legenda}</figcaption>
          </figure>
        ))}
      </div>

      {/* MODAL DE CONVIDADOS */}
      <ConvidadosModal
        isOpen={openGuests}
        onClose={() => setOpenGuests(false)}
        convidados={convidados}
      />

      {/* MODAL DE PRESENTES */}
      <PresentesModal
        isOpen={openGifts}
        onClose={() => setOpenGifts(false)}
        presentes={presentes}
      />
    </div>
  );
}
