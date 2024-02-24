const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Driver', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
  },
  nombre: {
      type: DataTypes.STRING,
      allowNull: false
  },
  apellido: {
      type: DataTypes.STRING,
      allowNull: false
  },
  descripcion: {
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
  nacimiento: {
      type: DataTypes.STRING,
      allowNull: false
  },
  team:{
    type:DataTypes.STRING,
  }
}, {
  // Opciones adicionales del modelo
  timestamps: false
});
};