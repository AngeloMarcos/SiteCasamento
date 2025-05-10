import React from 'react'
import './Invitation.css'
import topLeft from '../assets/top-left.png'
import bottomRight from '../assets/bottom-right.png'
import casalImg from '../assets/casal.jpg'

export default function Invitation({ onRSVP }) {
  return (
    <div className="invitation-container">
      <img src={topLeft} className="corner corner--top-left" alt="" />
      <img src={bottomRight} className="corner corner--bottom-right" alt="" />

      <div className="invitation-card">
        <img src={casalImg} className="invitation-photo" alt="Casal" />
        <h1 className="invitation-names">Angelo & Talita</h1>
        <p className="invitation-date">15 de Junho de <strong>2025</strong></p>
        <p className="invitation-loc">Igreja Matriz, Porto Alegre</p>
        <button className="invitation-button" onClick={onRSVP}>
          Confirmar Presença
        </button>
      </div>
    </div>
  )
}
