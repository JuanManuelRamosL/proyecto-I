const { Team } = require('../db');
const axios = require('axios');

const getTeams = async (req, res) => {
  try {
    // Verificar si hay equipos en la base de datos
    let teams = await Team.findAll();

    // Si no hay equipos en la base de datos, obtenerlos de la API y guardarlos en la base de datos
    if (teams.length === 0) {
      const response = await axios.get('http://localhost:5000/drivers');
      const drivers = response.data;

      if (Array.isArray(drivers) && drivers.length > 0) {
        // Extraer los equipos de cada conductor y crear un arreglo de equipos único
        let teamsData = [];
        drivers.forEach(driver => {
          if (driver.teams) {
            teamsData = teamsData.concat(driver.teams.split(',').map(team => team.trim()));
          }
        });
        teamsData = [...new Set(teamsData)].sort();

        // Guardar equipos en la base de datos
        const processedTeams = teamsData.map(team => ({
          nombre: team
        }));
        await Team.bulkCreate(processedTeams);

        // Obtener los equipos de la base de datos después de guardarlos
        teams = await Team.findAll();
      }
    }

    res.status(200).json({ teams });
  } catch (error) {
    console.error('Error getting teams:', error);
    res.status(500).json({ error: 'Failed to get teams' });
  }
};

module.exports = getTeams;
