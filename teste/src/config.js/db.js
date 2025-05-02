const mysql = require('mysql');

// Criando a conexão com o banco de dados
const db = mysql.createConnection({
  host: 'localhost',       // ou o host do seu banco de dados (por exemplo, '127.0.0.1')
  user: 'root',            // Seu nome de usuário do MySQL
  password: 'root',        // Sua senha do MySQL
  database: 'casamento_db', // Nome do banco de dados
  port: 3306               // Porta do MySQL (padrão é 3306)
});

// Conectando ao banco de dados
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar no banco de dados: ' + err.stack);
    return;
  }
  console.log('Conectado ao banco de dados como id ' + db.threadId);
});

module.exports = db;
