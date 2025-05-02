// backend/routes/guests.js
import express from 'express';
import { Guest } from '../models/Guest.js';

const router = express.Router();

// Listar
router.get('/', async (req, res) => {
  const list = await Guest.findAll();
  res.json(list);
});

// Criar
router.post('/', async (req, res) => {
  try {
    const guest = await Guest.create(req.body);
    res.status(201).json(guest);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// Atualizar confirmação
router.patch('/:id', async (req, res) => {
  await Guest.update(
    { confirmado: req.body.confirmado },
    { where: { id: req.params.id } }
  );
  res.sendStatus(204);
});

// Deletar
router.delete('/:id', async (req, res) => {
  await Guest.destroy({ where: { id: req.params.id } });
  res.sendStatus(204);
});

export default router;
