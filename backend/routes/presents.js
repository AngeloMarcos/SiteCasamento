// backend/routes/presents.js
import express from 'express';
import { Present } from '../models/Present.js';

const router = express.Router();

// Listar todos os presentes
router.get('/', async (req, res) => {
  const list = await Present.findAll();
  res.json(list);
});

// Criar um presente
router.post('/', async (req, res) => {
  try {
    const p = await Present.create(req.body);
    res.status(201).json(p);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// Atualizar reserva
router.patch('/:id', async (req, res) => {
  await Present.update(
    { reservado: req.body.reservado },
    { where: { id: req.params.id } }
  );
  res.sendStatus(204);
});

// Deletar um presente
router.delete('/:id', async (req, res) => {
  await Present.destroy({ where: { id: req.params.id } });
  res.sendStatus(204);
});

export default router;
