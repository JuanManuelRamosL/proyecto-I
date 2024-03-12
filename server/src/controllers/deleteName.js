const { Driver} = require('../db');


const deleteDriverN = async (req, res) => {
  try {
    const { nombre } = req.body;
    const driverDelete = await Driver.destroy({ where: { nombre: nombre } });


    if (driverDelete) {
        res.json({ message: 'Corredor eliminado exitosamente' });
    } else {
        res.status(404).json({ error: 'Corredor no encontrado' });
    }
  } catch (error) {
    console.error('Error getting teams:', error);
    res.status(500).json({ error: 'Failed to get teams' });
  }
};

module.exports = deleteDriverN;