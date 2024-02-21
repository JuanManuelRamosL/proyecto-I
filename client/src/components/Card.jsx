import React from 'react';

const Card = ({ drivers,onClick }) => {
  console.log("drivers card", drivers);

  return (
    <>
      {drivers.map((driver, index) => (
        <div key={index} className="driver-card" onClick={() => onClick(driver)}>
          <img src={driver.image.url} alt={driver.name.forename + ' ' + driver.name.surname} />
          <h2>{driver.name.forename + ' ' + driver.name.surname}</h2>
          <p>Escuderías: {driver.teams}</p>
        </div>
      ))}
    </>
  );
};

export default Card;
