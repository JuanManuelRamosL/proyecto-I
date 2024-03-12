// Importa el modelo Team
const { DataTypes } = require('sequelize');
const TeamModel = require('./models/Team'); // Asegúrate de tener la ruta correcta

// Mock de la conexión de Sequelize
const sequelizeMock = {
  define: jest.fn().mockImplementation(() => ({
    // Métodos de instancia de Sequelize
  })),
};

// Test para el modelo Team
describe('Team Model', () => {
  it('should define a valid Team model', () => {
    // Llama al modelo Team con la conexión de Sequelize simulada
    TeamModel(sequelizeMock);

    // Verifica que se haya llamado a sequelize.define con los argumentos correctos
    expect(sequelizeMock.define).toHaveBeenCalledWith('Team', {
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
      timestamps: false
    });
  });
});
