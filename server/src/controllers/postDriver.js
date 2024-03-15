
const { Driver, Team } = require('../db');

const postDriver = async (req, res) => {
  try {
    const { nombre, apellido, description, image, nationalidad, dob, teams } = req.body;

    // Crear el conductor en la base de datos
    const newDriver = await Driver.create({
      nombre,
      apellido,
      description,
      image,
      nationalidad,
      dob,
      teams:  teams.join(',') 
    });

    // Asociar el conductor con los equipos solicitados
    if (teams && teams.length > 0) {
      for (const teamName of teams) {
        // Buscar el equipo en la base de datos por su nombre
        const teamInstance = await Team.findOne({ where: { nombre: teamName } });
        if (teamInstance) {
          // Si se encuentra el equipo, asociarlo con el conductor
          await newDriver.addTeam(teamInstance);
        }
      }
    }

    res.status(201).json({ message: 'Driver created successfully', driver: newDriver });
  } catch (error) {
    console.error('Error creating driver:', error);
    res.status(500).json({ error: 'Failed to create driver' });
  }
};

module.exports = postDriver;
