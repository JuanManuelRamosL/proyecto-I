import React from 'react';
import './Card.css'
import { useSelector } from 'react-redux';
const NameCards = ({goBack}) => {
    const driver = useSelector(state => state.driverN);

    console.log(driver)
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
      {driver.map((driver, index) => (
      <div key={index} className="driver-card" onClick={() => onClick(driver)}>
        <img src={getImage(driver)}  className='img-driver' />
        <div className="container-info-driver">
          <h2 className='name-driver'>Nombre: {getDriverName(driver)}</h2>
          <p className='escuderias-driver'>Escuderías: {getTeam(driver)}</p>
        </div>
      </div>
      ))}
       <button onClick={goBack} className='button-volver'><i class="fa-solid fa-circle-arrow-left icon-volver"></i></button>
    </div>

    </>
  );
};

export default NameCards;
