const respuesta =async()=>{
    const response = await axios.get('http://localhost:5000/drivers');

}

function obtenerEquiposUnicos(drivers) {
    const equipos = new Set();
  
    drivers.forEach(driver => {
      const equiposArray = driver.teams.split(',').map(team => team.trim());
      equiposArray.forEach(equipo => equipos.add(equipo));
    });
  
    return [...equipos];
  }