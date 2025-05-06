// src/components/Modal.jsx
import React from 'react';
import './Modal.css';

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-window">
        <header className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </header>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
}
