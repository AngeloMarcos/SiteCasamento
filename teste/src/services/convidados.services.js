const model = require('../models/convidados.model');

async function listConvidados() {
  return await model.findAllConvidados();
}

async function getConvidado(id) {
  const convidado = await model.findConvidadoById(id);
  if (!convidado) throw { status: 404, message: 'Convidado não encontrado' };
  return convidado;
}

async function addConvidado(data) {
  // aqui você poderia validar campos extras
  const id = await model.createConvidado(data);
  return { id, ...data };
}

module.exports = { listConvidados, getConvidado, addConvidado };
