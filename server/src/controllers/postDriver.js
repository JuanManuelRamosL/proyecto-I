// postDriver.js

const { Driver, Team } = require('../db');

const postDriver = async (req, res) => {
  try {
    const { nombre, apellido, description, image, nationalidad, dob, teams } = req.body;

    // Crear el conductor en la base de datos
    const teamInstance = await Team.findOne({ where: { nombre: teams } });
    const teamId = teamInstance ? teamInstance.id : null;

    const newDriver = await Driver.create({
      nombre,
      apellido,
      description,
      image,
      nationalidad,
      dob,
      teams
    });

    if (teamId) {
      await newDriver.addTeam(teamId);
    }
    // Asociar el conductor con los equipos solicitados
    /* if (team && team.length > 0) {
      const teamsToAdd = await Team.findAll({ where: { id: team } });
      await newDriver.addTeams(teamsToAdd);
      console.log("bien")
    } */

    res.status(201).json({ message: 'Driver created successfully', driver: newDriver });
  } catch (error) {
    console.error('Error creating driver:', error);
    res.status(500).json({ error: 'Failed to create driver' });
  }
};

module.exports = postDriver;
