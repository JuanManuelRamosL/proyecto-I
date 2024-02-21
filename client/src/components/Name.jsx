import React from 'react';

const Name = ({ driver }) => {
  if (!driver) {
    return <div>Loading...</div>; // Manejar el caso cuando no hay información del corredor
  }
  const {
    code,
    name: { forename, surname },
    image: { url },
    dob,
    nationality,
    teams,
    description,
    url: driverUrl
} = driver[0];

  if (driver) {
    console.log(driver)    
      }
  return (
    <div className="card">
            <img src={url} alt={forename + ' ' + surname} />
            <div className="card-body">
                <h2>{forename + ' ' + surname}</h2>
                <p>Código: {code}</p>
                <p>Nacionalidad: {nationality}</p>
                <p>Fecha de nacimiento: {dob}</p>
                <p>Equipos: {teams}</p>
                <p>Descripción: {description}</p>
                <a href={driverUrl} target="_blank" rel="noopener noreferrer">Más información</a>
            </div>
        </div>
  );
};

export default Name;