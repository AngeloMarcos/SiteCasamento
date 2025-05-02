// backend/models/Present.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Present = sequelize.define('Present', {
  id: {
    type:           DataTypes.INTEGER,
    autoIncrement:  true,
    primaryKey:     true,
  },
  nome: {
    type:      DataTypes.STRING(255),
    allowNull: false,
  },
  descricao: {
    type:      DataTypes.TEXT,
    allowNull:  true,
  },
  link: {
    type:      DataTypes.STRING(2048),
    allowNull:  true,
  },
  valor: {
    type:      DataTypes.DECIMAL(10,2),
    defaultValue: 0.00,
  },
  reservado: {
    type:         DataTypes.BOOLEAN,
    allowNull:    false,
    defaultValue: false,
  }
}, {
  tableName:  'presentes',
  timestamps: true
});
