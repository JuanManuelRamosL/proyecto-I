const axios = require('axios');
const { Driver} = require('../db');
// Controlador para manejar la solicitud HTTP
const getDriversName = async (req, res) => {
  try {
    // Obtenemos el nombre de la consulta
    const { name } = req.query;
    const namee = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    // Verificamos si el nombre está presente
    if (!namee) {
      return res.status(400).json({ error: 'Se requiere un nombre en la consulta' });
    }

    // Realizamos la solicitud a la API
    const apiUrl = `http://localhost:5000/drivers?name.forename=${namee}`;
    const response = await axios.get(apiUrl);

    const dbResponse =await Driver.findOne({
      where: {
        nombre: name
      }
    });

    // Esperamos a que ambas operaciones se completen
    //const [apiResult, dbResult] = await Promise.all([response, dbResponse]);
const rspuesta = [...[dbResponse],...response.data]
    // Devolvemos ambos resultados
    return res.json(/* { apiResult: apiResult.data, dbResult } */  rspuesta );
  } catch (error) {
    console.error('Error al obtener el conductor:', error.message);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports =  getDriversName ;


