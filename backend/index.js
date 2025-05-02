// backend/index.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import presentsRoutes from './routes/presents.js';
import { testConnection, sequelize } from './config/database.js';
import guestRoutes from './routes/guests.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

await testConnection();
await sequelize.sync();

app.use('/api/convidados', guestRoutes);
app.use('/api/presentes', presentsRoutes);
const PORT = process.env.API_PORT || 3001;
app.listen(PORT, () =>
  console.log(`🚀 API rodando na porta ${PORT}`)
);
