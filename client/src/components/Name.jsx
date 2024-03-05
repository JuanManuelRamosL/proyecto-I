import React from 'react';
import { useSelector } from 'react-redux';
const Name = ({goBack}) => {

  //trae el driver desde el estado global
  const driver = useSelector(state => state.driver);

   // Manejar el caso cuando no hay información del corredor
  if (!driver) {
    return <div>Loading...</div>;
  }
  
  const {
    //code,
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
    <>
    <div className="card">
            <img src={url} alt={forename + ' ' + surname} />
            <div className="card-body">
                <h2>{forename + ' ' + surname}</h2>
                 {/* <p>Código: {code}</p>  */}
                <p>Nacionalidad: {nationality}</p>
                <p>Fecha de nacimiento: {dob}</p>
                <p>Equipos: {teams}</p>
                <p>Descripción: {description}</p>
                <a href={driverUrl} target="_blank" rel="noopener noreferrer">Más información</a>
            </div>
        </div>
        <button onClick={goBack}>Volver</button>
        </>
  );
};

export default Name;