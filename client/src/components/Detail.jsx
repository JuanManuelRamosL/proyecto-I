import React from 'react';

const Detail = ({ driver }) => {
  if (!driver) {
    return <div>Loading...</div>; // Manejar el caso cuando no hay información del corredor
  }

  const { id, name, nationality, image, description, dob, teams } = driver;

  return (
    <div>
      <h2>Driver Detail</h2>
      <div>
        <p>ID: {id}</p>
        <p>Name: {name.forename} {name.surname}</p>
        <p>Nationality: {nationality}</p>
        <img src={image.url} alt="Driver" style={{ width: '200px' }} />
        <p>Description: {description}</p>
        <p>Date of Birth: {dob}</p>
        <p>Teams: {teams}</p>
      </div>
    </div>
  );
};

export default Detail;