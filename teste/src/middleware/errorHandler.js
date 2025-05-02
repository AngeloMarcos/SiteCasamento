function errorHandler(err, req, res, next) {
    const status = err.status || 500;
    res.status(status).json({
      error:  err.message || 'Erro interno',
      details: err.errors || null
    });
  }
  
  module.exports = errorHandler;
  