import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import Detail from "./Detail"
import { useDispatch, useSelector } from 'react-redux';
import { fetchDrivers } from '../redux/actions';
import Nav from './nav.jsx'
import Name from './Name.jsx';

const Home = () => {
  
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [name,setName] = useState(false);

  const dispatch = useDispatch();
  const drivers = useSelector(state => state.drivers);
  const driver = useSelector(state => state.driver);
  useEffect(() => {
    dispatch(fetchDrivers());
  }, [dispatch]);

  if (driver) {
console.log(driver)    
  }

  const [currentPage, setCurrentPage] = useState(1);

  // Cantidad de conductores por página
  const driversPerPage = 9;

  // Calcular los índices inicial y final de los conductores que se mostrarán en la página actual
  const indexOfLastDriver = currentPage * driversPerPage;
  const indexOfFirstDriver = indexOfLastDriver - driversPerPage;
  const currentDrivers = drivers.slice(indexOfFirstDriver, indexOfLastDriver);

  // Función para cambiar a la página anterior
  const goToPrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    scrollToTop();
  };

  // Función para cambiar a la página siguiente
  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    scrollToTop();
  };

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (1000 / 15); // Cantidad de pixeles a desplazar por paso de animación
    const scrollAnimation = () => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
        requestAnimationFrame(scrollAnimation);
      }
    };
    scrollAnimation();
  };

  const handleDriverClick = (driver) => {
    setSelectedDriver(driver  );
    console.log(driver)
  };
  return (
    <>
      <Nav setName={setName}></Nav>
  
      {/* Mostrar el componente Detail si hay un conductor seleccionado */}
      {selectedDriver ? (
        <Detail driver={selectedDriver} goBack={() => setSelectedDriver(null)} />
      ) : name ? (
        <Name driver={driver}/>
      ) : (
        <>
          <Card drivers={currentDrivers} onClick={handleDriverClick} />
  
          <div>
            <button onClick={goToPrevPage} disabled={currentPage === 1}>
              Previous Page
            </button>
            <button onClick={goToNextPage} disabled={indexOfLastDriver >= drivers.length}>
              Next Page
            </button>
          </div>
        </>
      )}
    </>
  );
      }  
export default Home