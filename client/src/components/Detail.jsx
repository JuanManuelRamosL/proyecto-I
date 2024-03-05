import React from 'react';
import './Detail.css'

const Detail = ({ driver,goBack  }) => {
  if (!driver) {
    return <div>Loading...</div>; // Manejar el caso cuando no hay información del corredor
  }
  function getDriverName(driver) {
    if (driver.name && typeof driver.name === 'object') {
      return `${driver.name.forename} ${driver.name.surname}`;
    } else if (driver.nombre ,driver.apellido) {
      return `${driver.nombre} ${driver.apellido}`;
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
  function getImage(driver) {
    if (driver.image && typeof driver.image === 'object') {
      return `${driver.image.url}`;
    } else if (driver.image) {
      return `${driver.image}`;
    } else {
      return '';
    }
  }

  //Desestructuramos los datos de Driver para usarlos
  const { id,  nationality,  description, dob, teams } = driver;

  return (
  <>
      <h2 className='title-details'>Driver Detail</h2>

    <div className='container-details-driver'>
      <div className='container-details-left'>
      <img src={getImage(driver)} alt="Driver" className='img-driver-details' />
          <p className='txt-left-details'>Date of Birth: {dob}</p>
          <p className='txt-left-details'>Teams:  {getTeam(driver)}.</p>
      </div>
      <div className="container-details-right">
          <p className='txt-right-details'>ID: {id}</p>
          <p className='txt-right-details'>Name:  {getDriverName(driver)}</p>
          <p className='txt-right-details'>Nationality: {nationality}</p>
          <p className='description-driver-details'>Description: {description}</p>
      </div>
    </div>
<button onClick={goBack}>Volver</button>
  </>
  );
};

export default Detail;