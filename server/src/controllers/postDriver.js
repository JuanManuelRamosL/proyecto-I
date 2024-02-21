// postDriver.js

const { Driver, Team } = require('../db');

const postDriver = async (req, res) => {
  try {
    const { nombre, apellido, descripcion, image, nationalidad, nacimiento, teams } = req.body;

    // Crear el conductor en la base de datos
    const newDriver = await Driver.create({
      nombre,
      apellido,
      descripcion,
      image,
      nationalidad,
      nacimiento
    });

    // Asociar el conductor con los equipos solicitados
    if (teams && teams.length > 0) {
      const teamsToAdd = await Team.findAll({ where: { id: teams } });
      await newDriver.addTeams(teamsToAdd);
      console.log("bien")
    }

    res.status(201).json({ message: 'Driver created successfully', driver: newDriver });
  } catch (error) {
    console.error('Error creating driver:', error);
    res.status(500).json({ error: 'Failed to create driver' });
  }
};

module.exports = postDriver;
