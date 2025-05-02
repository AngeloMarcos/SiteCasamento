// Model pura: apenas manipula SQL
const pool = require('../config/db');

async function findAllConvidados() {
  const [rows] = await pool.query('SELECT * FROM convidados ORDER BY nome');
  return rows;
}

async function findConvidadoById(id) {
  const [rows] = await pool.query('SELECT * FROM convidados WHERE id = ?', [id]);
  return rows[0];
}

async function createConvidado(data) {
  const { nome, rsvp, acompanhantes, observacoes } = data;
  const [result] = await pool.query(
    `INSERT INTO convidados (nome,rsvp,acompanhantes,observacoes)
     VALUES (?,?,?,?)`,
    [nome, rsvp, acompanhantes, observacoes]
  );
  return result.insertId;
}

// exporte o que precisar
module.exports = { findAllConvidados, findConvidadoById, createConvidado };
