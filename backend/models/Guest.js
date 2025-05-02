// backend/models/Guest.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Guest = sequelize.define('Guest', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  rsvp: {
    type: DataTypes.ENUM('Sim', 'Não', 'Talvez'),
    allowNull: false,
    defaultValue: 'Talvez',
  },
  acompanhantes: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  observacoes: {
    type: DataTypes.TEXT,
    allowNull: true,
  }
}, {
  tableName: 'convidados',
  timestamps: false    // desliga createdAt/updatedAt
});
