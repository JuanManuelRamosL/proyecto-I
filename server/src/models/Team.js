const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Team', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
  },
  nombre: {
      type: DataTypes.STRING,
      allowNull: false
  }
}, {
  // Opciones adicionales del modelo
  timestamps: false
});
};