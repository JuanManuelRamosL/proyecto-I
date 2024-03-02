import React, { useState, useEffect } from 'react';
import Card from './Card';
import Detail from "./Detail"
import { useDispatch, useSelector } from 'react-redux';
import { fetchDrivers } from '../redux/actions';
import Nav from './nav.jsx'
import Name from './Name.jsx';
import './Home.css'

const Home = () => {
  const [teamFilter, setTeamFilter] = useState('');
  const[apiFilter,setApiFilter] = useState("")
  const [orden,setOrden] = useState("")
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [name,setName] = useState(null);//aca esta el problema
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const drivers = useSelector(state => state.drivers);
  const driver = useSelector(state => state.driver);

  useEffect(() => {
    dispatch(fetchDrivers());
  }, [dispatch]);

  if (driver) {
console.log(driver)    
  }

  // Función para cambiar a la página anterior y siguiente
  const goToPrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    scrollToTop();
  };
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

const handleSort =(orden,normalizedDrivers)=>{
  if ("nombre_ASC" == orden) {
    filteredDrivers = normalizedDrivers.sort((a, b) => a.nombre.localeCompare(b.nombre));
    console.log("nombre asc")
  } else if ("nombre_DESC" == orden){
    filteredDrivers = normalizedDrivers.sort((a, b) => b.nombre.localeCompare(a.nombre));
    console.log("nombre desc")
  } else if ("nacimiento_ASC" == orden){
   filteredDrivers = normalizedDrivers.sort((a, b) => {
      const dateA = new Date(a.nacimiento);
      const dateB = new Date(b.nacimiento);
      return dateA - dateB;
    });
    console.log("ncimiento asc")
  } else if ("nacimiento_DESC" == orden) {
    filteredDrivers = normalizedDrivers.sort((a, b) => {
      const dateA = new Date(a.nacimiento);
      const dateB = new Date(b.nacimiento);
      return dateB - dateA; 
    });
    console.log("nascimiento desc")
  }
}

  let filteredDrivers;
  if (teamFilter) {
    filteredDrivers = drivers.filter(driver => {
      // Verificar si driver.teams está definido y es una cadena antes de dividirla
      if (typeof driver.teams === 'string') {
        const teamsArray = driver.teams.split(',').map(team => team.trim());
        return teamsArray.includes(teamFilter);
      } else {
        return false;
      }
    });
  } else if(apiFilter){
    if (apiFilter == "Base de datos") {
      filteredDrivers = drivers.filter(driver => driver.source === "Base de datos");
    } else {
      filteredDrivers = drivers.filter(driver => driver.source === "API");
    }
    
  }else if (orden){
    const normalizedDrivers = drivers.map(driver => {
      const normalizedDriver = {
        id: driver.id,
        nombre: driver.nombre || `${driver.name.forename} ${driver.name.surname}`,
        apellido: driver.apellido || driver.name.surname,
        descripcion: driver.descripcion || driver.description,
        image: driver.image.url|| driver.image,
        nacionalidad: driver.nacionalidad,
        nacimiento: driver.nacimiento || driver.dob,
        source: driver.source,
       teams:driver.teams||driver.team
      };
    
      return normalizedDriver;
    });
    handleSort(orden,normalizedDrivers)
  } else {
    filteredDrivers = drivers;
  }
//meter aca como un else if la logica de ordenar por nacimiento etc


    // Cantidad de conductores por página
    const driversPerPage = 9;
  // Calcular los índices inicial y final de los conductores que se mostrarán en la página actual
  const indexOfLastDriver = currentPage * driversPerPage;
  const indexOfFirstDriver = indexOfLastDriver - driversPerPage;
  const currentDrivers = filteredDrivers.slice(indexOfFirstDriver, indexOfLastDriver);








  return (
    <>
      <Nav setName={setName} setTeamFilter={setTeamFilter} setApiFilter={setApiFilter} setOrden={setOrden}></Nav>
  
      {/* Mostrar el componente Detail si hay un conductor seleccionado */}
      {selectedDriver ? (
        <Detail driver={selectedDriver} goBack={() => setSelectedDriver(null)} />
      ) : name == true ? (
        <Name  driver={driver} goBack={() => setName(null)}/>
      ) : (
        <>
          <Card drivers={currentDrivers} onClick={handleDriverClick} />
  
          <div className='container-buttons-paginacion'>
            <button onClick={goToPrevPage} disabled={currentPage === 1} className='button-prev'>
              <i className='fa-solid fa-chevron-left icono-prev'></i>
            </button>
            <button onClick={goToNextPage} disabled={indexOfLastDriver >= drivers.length} className='button-next'>
              <i className='fa-solid fa-chevron-right icono-next'></i>
            </button>
          </div>
        </>
      )}
    </>
  );
      }  
export default Home