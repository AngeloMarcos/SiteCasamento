
import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Conexão com o banco de dados
const db = mysql.createConnection({
  host:     process.env.DB_HOST,
  user:     process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port:     process.env.DB_PORT
});

db.connect(err => {
  if (err) {
    console.error('❌ Erro ao conectar no banco:', err.message);
  } else {
    console.log('✅ Conectado ao banco de dados!');
  }
});

// Rota da API
app.get('/api/convidados', (req, res) => {
  db.query('SELECT * FROM convidados', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`🚀 Servidor rodando na porta ${port}`);
});
