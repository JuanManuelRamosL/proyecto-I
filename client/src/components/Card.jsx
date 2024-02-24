import React from 'react';
import './Card.css'

const Card = ({ drivers,onClick }) => {
  console.log("drivers card", drivers);

  function getDriverName(driver) {
    if (driver.name && typeof driver.name === 'object') {
      return `${driver.name.forename} ${driver.name.surname}`;
    } else if (driver.nombre ,driver.apellido) {
      return `${driver.nombre} ${driver.apellido}`;
    } else {
      return '';
    }
  }

  function getImage(driver) {
    if (driver.image && typeof driver.image === 'object') {
      return `${driver.image.url}`;
    } else if (driver.image) {
      return `${driver.image}`;
    } else {
      return '';
    }
  }

  function getTeam(driver) {
    if (driver.teams) {
      return `${driver.teams}`;
    } else if (driver.team) {
      return `${driver.team}`;
    } else {
      return '';
    }
  }
  return (
    <>
    <div className="container-cards-drivers">
      {drivers.map((driver, index) => (
      <div key={index} className="driver-card" onClick={() => onClick(driver)}>
        <img src={getImage(driver)}  className='img-driver' />
        <div className="container-info-driver">
          <h2 className='name-driver'>Nombre: {getDriverName(driver)}</h2>
          <p className='escuderias-driver'>Escuderías: {getTeam(driver)}</p>
        </div>
      </div>
      ))}
    </div>

    </>
  );
};

export default Card;
