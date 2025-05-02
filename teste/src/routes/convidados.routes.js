const express = require('express');
const router = express.Router();
const { getAll, getById, create } = require('../controllers/convidados.controller');
const { body, validationResult } = require('express-validator');

router.get('/', getAll);
router.get('/:id', getById);
router.post(
  '/',
  [
    body('nome').isString().notEmpty(),
    body('rsvp').isIn(['Sim','Não','Talvez']),
    body('acompanhantes').isInt({ min: 0 }),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
  create
);

module.exports = router;
