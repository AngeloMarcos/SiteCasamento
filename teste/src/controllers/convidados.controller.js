const service = require('../services/convidados.service');

async function getAll(req, res, next) {
  try {
    const lista = await service.listConvidados();
    res.json(lista);
  } catch (err) {
    next(err);
  }
}

async function getById(req, res, next) {
  try {
    const convidado = await service.getConvidado(req.params.id);
    res.json(convidado);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  try {
    const novo = await service.addConvidado(req.body);
    res.status(201).json(novo);
  } catch (err) {
    next(err);
  }
}

module.exports = { getAll, getById, create };
