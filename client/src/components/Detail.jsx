import React from 'react';
import './Detail.css'

const Detail = ({ driver }) => {
  if (!driver) {
    return <div>Loading...</div>; // Manejar el caso cuando no hay información del corredor
  }

  const { id, name, nationality, image, description, dob, teams } = driver;

  return (
  <>
      <h2 className='title-details'>Driver Detail</h2>

    <div className='container-details-driver'>
      <div className='container-details-left'>
      <img src={image.url} alt="Driver" className='img-driver-details' />
          <p className='txt-left-details'>Date of Birth: {dob}</p>
          <p className='txt-left-details'>Teams: {teams}.</p>
      </div>
      <div className="container-details-right">
          <p className='txt-right-details'>ID: {id}</p>
          <p className='txt-right-details'>Name: {name.forename} {name.surname}</p>
          <p className='txt-right-details'>Nationality: {nationality}</p>
          <p className='description-driver-details'>Description: {description}</p>
      </div>
    </div>

  </>
  );
};

export default Detail;