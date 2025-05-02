// backend/config/database.js
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host:    process.env.DB_HOST,
    port:    process.env.DB_PORT,
    dialect: 'mysql',
    logging: false
  }
);

export async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conectado ao MySQL!');
  } catch (err) {
    console.error('❌ Falha na conexão:', err);
  }
}
