const axios = require('axios');
const { Driver} = require('../db');

const getDrivers = async (req, res) => {
  try {
/*     const response = await axios.get('http://localhost:5000/drivers');
    const driversData = response.data;
    const driversFromDB = await Driver.findAll();
    res.json(driversData); */


        // Buscar conductores en la base de datos
        const driversFromDB = await Driver.findAll({ attributes: { exclude: ['createdAt', 'updatedAt'] } });

        // Realizar una solicitud GET a la URL proporcionada para obtener los datos de conductores de la API
        const response = await axios.get('http://localhost:5000/drivers');
        const driversFromAPI = response.data.map(driver => ({ ...driver, source: 'API',
        image: driver.image.url ? driver.image : { // Verificar si hay una URL de imagen
          url: 'https://png.pngtree.com/png-vector/20191030/ourmid/pngtree-racing-helmet-icon-simple-style-png-image_1911229.jpg', // URL de imagen por defecto
          imageby: 'Autor de la imagen por defecto'
        } }));
        const driversFromDBWithSource = driversFromDB.map(driver => ({ ...driver.toJSON(), source: 'Base de datos' }));
    
        const driversData = [...driversFromDBWithSource, ...driversFromAPI];
        res.json(driversData);
  } catch (error) {
    console.error('Error al cargar los datos de conductores:', error);
    res.status(500).send('Error interno del servidor');
  }
};

module.exports = getDrivers;
