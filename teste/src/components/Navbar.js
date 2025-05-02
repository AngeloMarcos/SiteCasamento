import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">A & T</div>
      <ul className="nav-links">
        <li><a href="#convidados">Convidados</a></li>
        <li><a href="#presentes">Presentes</a></li>
        <li><a href="#buffet">Buffet</a></li>
      </ul>
    </nav>
  );
}