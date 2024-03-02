const axios = require('axios');

// Controlador para manejar la solicitud HTTP
const getDriversName = async (req, res) => {
  try {
    // Obtenemos el nombre de la consulta
    const { name } = req.query;
    let namee = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    // Verificamos si el nombre está presente
    if (!namee) {
      return res.status(400).json({ error: 'Se requiere un nombre en la consulta' });
    }

    // Realizamos la solicitud a la API
    const apiUrl = `http://localhost:5000/drivers?name.forename=${namee}`;
    const response = await axios.get(apiUrl);

    // Mostramos el resultado por consola
    console.log(response.data);

    // Devolvemos la respuesta de la API al cliente
    return res.json(response.data);
  } catch (error) {
    console.error('Error al obtener el conductor:', error.message);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports =  getDriversName ;


