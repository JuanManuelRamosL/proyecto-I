const axios = require('axios');
const { Driver, Team } = require('../db');

const getDriverById = async (req, res) => {
  const { idDriver } = req.params;

  try {
    let driverData;

    // Si el ID del conductor es un número, asumimos que es un conductor de la API
    if (!isNaN(idDriver)) {
      // Realizar una solicitud GET a la URL de la API para obtener los datos del conductor
      const response = await axios.get(`http://localhost:5000/drivers/${idDriver}`);
      driverData = response.data;
    } else {
      const driverFromDB = await Driver.findByPk(idDriver); // Busca el conductor por su clave primaria
      if (!driverFromDB) {
        return res.status(404).json({ message: 'Conductor no encontrado en la base de datos.' });
      }
      driverData = driverFromDB.toJSON(); // Convertir el objeto de conductor a JSON
    }

    res.json(driverData);
  } catch (error) {
    console.error('Error al obtener el detalle del conductor:', error);
    res.status(500).send('Error interno del servidor');
  }
};

module.exports = getDriverById;
