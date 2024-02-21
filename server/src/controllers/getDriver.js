const axios = require('axios');

const getDrivers = async (req, res) => {
  try {
    // Realizar una solicitud GET a la URL proporcionada para obtener los datos de conductores
    const response = await axios.get('http://localhost:5000/drivers');
    const driversData = response.data;

    // Aquí podrías manipular los datos si es necesario, como agregar una imagen por defecto
    res.json(driversData);
  } catch (error) {
    console.error('Error al cargar los datos de conductores:', error);
    res.status(500).send('Error interno del servidor');
  }
};

module.exports = getDrivers;
