// import React from 'react';
// import { useSelector } from 'react-redux';
// const Name = () => {

//   //trae el driver desde el estado global
//   const driver = useSelector(state => state.driver);

//    // Manejar el caso cuando no hay información del corredor
//   if (!driver) {
//     return <div>Loading...</div>;
//   }
 
//   const {
//     //code,
//     name: { forename, surname },
//     image: { url },
//     dob,
//     nationality,
//     teams,
//     description,
//     url: driverUrl
// } = driver[0];//hasta aca llega la info pero en 2 partes

//   if (driver) {
//     console.log(driver)    
//       }
//   return (
//     <>
//     <div className="card">
//             <img src={url} alt={forename + ' ' + surname} />
//             <div className="card-body">
//                 <h2>{forename + ' ' + surname}</h2>
//                  {/* <p>Código: {code}</p>  */}
//                 <p>Nacionalidad: {nationality}</p>
//                 <p>Fecha de nacimiento: {dob}</p>
//                 <p>Equipos: {teams}</p>
//                 <p>Descripción: {description}</p>
//                 <a href={driverUrl} target="_blank" rel="noopener noreferrer">Más información</a>
//             </div>
//         </div>
       
//         </>
//   );
// };

// export default Name;








import React from 'react';
import { useSelector } from 'react-redux';

const Name = ({ goBack }) => {
  // Trae el driver desde el estado global
  const driver = useSelector(state => state.driver);

  // Manejar el caso cuando no hay información del corredor
  if (!driver) {
    return <div>Loading...</div>;
  }

  // Verifica si hay información en driver[0] y driver[1]
  const hasDriverInfo0 = driver[0] && driver[0].nombre;
  const hasDriverInfo1 = driver[1] && Object.keys(driver[1]).length !== 0;

  return (
    <>
      {/* Operador ternario para determinar qué parte del código ejecutar */}
      {hasDriverInfo0 ? (
        <RenderDB driver={driver[0]} goBack={goBack} />
      ) : hasDriverInfo1 ? (
        <RenderDriverInfo driver={driver[1]} goBack={goBack} />
      ) : (
        <div>No se encontró información del corredor.</div>
      )}
    </>
  );
};




const RenderDriverInfo = ({ driver, goBack }) => {
  const {
    name: { forename, surname },
    image: { url },
    dob,
    nationality,
    teams,
    description,
    url: driverUrl
  } = driver;

  return (
    <div className="card">
      <img src={url} alt={forename + ' ' + surname} />
      <div className="card-body">
        <h2>{forename + ' ' + surname}</h2>
        {/* <p>Código: {code}</p> */}
        <p>Nacionalidad: {nationality}</p>
        <p>Fecha de nacimiento: {dob}</p>
        <p>Equipos: {teams}</p>
        <p>Descripción: {description}</p>
        <a href={driverUrl} target="_blank" rel="noopener noreferrer">
          Más información
        </a>
      </div>
      <button onClick={goBack}>Volver</button>
    </div>
  );
};







const RenderDB = ({ driver, goBack }) => {

console.log(driver)
  return (
    <div className="card">
    <img src={driver.image}  />
    <div className="card-body">
        <h2>{driver.nombre + ' ' + driver.apellido}</h2>
        {/* <p>Código: {code}</p> */}
        <p>Nacionalidad: {driver.nationalidad}</p>
        <p>Fecha de nacimiento: {driver.dob}</p>
        <p>Equipos: {driver.teams}</p>
        <p>Descripción: {driver.description}</p>
        <button onClick={goBack}>Volver</button>
      </div>
    </div>
  );
};

export default Name;
