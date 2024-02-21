const {Driver} = require('../db'); // Importa el modelo Driver

const Name = async (req, res) => {
  const { nombre } = req.body;

  try {
    // Busca un conductor por su nombre en la base de datos
    const driver = await Driver.findOne({ where: { nombre } });

    if (!driver) {
      return res.status(404).json({ message: 'Conductor no encontrado.' });
    }

    res.json(driver);
  } catch (error) {
    console.error('Error al buscar conductor por nombre:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
};

module.exports = Name ;