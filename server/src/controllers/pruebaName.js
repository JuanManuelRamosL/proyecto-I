const { Driver } = require('../db');
const axios = require('axios');
const { Op } = require('sequelize');


const Name = async (req, res) => {
  try {
    const { name } = req.query;
    const nameQuery = name.toLowerCase(); // Convertir el nombre a minúsculas para realizar una búsqueda sin distinción de mayúsculas/minúsculas

    // Realizar solicitud a la API para obtener todos los drivers
    const apiUrl = 'http://localhost:5000/drivers';
    const apiResponse = await axios.get(apiUrl);
    const allDrivers = apiResponse.data;

    // Filtrar los primeros 15 drivers que coincidan con el nombre recibido por query
    const filteredApiDrivers = allDrivers.filter(driver => driver.name.forename.toLowerCase().includes(nameQuery)).slice(0, 15);

    // Realizar búsqueda en la base de datos utilizando el modelo Driver
    const dbDrivers = await Driver.findAll({
      where: {
        nombre: {
          [Op.iLike]: `%${nameQuery}%` // Consulta de búsqueda que ignora mayúsculas/minúsculas
        }
      },
      limit: 15 // Limitar la búsqueda a 15 resultados
    });

    // Combinar los resultados de la API y la base de datos
    const combinedDrivers = [...filteredApiDrivers, ...dbDrivers];

    // Devolver los primeros 15 resultados combinados como respuesta
    res.json(combinedDrivers.slice(0, 15));
  } catch (error) {
    console.error('Error al buscar conductor por nombre:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
};

module.exports = Name;
