const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Driver', {
/*     id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
  }, */
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: () => uuidv4(), // Generar un UUID por defecto
  },
  nombre: {
      type: DataTypes.STRING,
      allowNull: false
  },
  apellido: {
      type: DataTypes.STRING,
      allowNull: false
  },
  description: {
      type: DataTypes.TEXT,
      allowNull: false
  },
  image: {
      type: DataTypes.STRING,
      allowNull: false
  },
  nationalidad: {
      type: DataTypes.STRING,
      allowNull: false
  },
  dob: {
      type: DataTypes.STRING,
      allowNull: false
  },
  teams:{
    type:DataTypes.STRING,
  }
}, {
  // Opciones adicionales del modelo
  timestamps: false
});
};