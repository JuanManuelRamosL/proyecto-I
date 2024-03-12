import './nav.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDriver, fetchDriverN } from '../redux/actions';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { fetchTeam } from '../redux/actions';



function Nav({ setName,setTeamFilter,setApiFilter,setOrden}) {
    const [searchValue, setSearchValue] = useState(''); // Estado local para almacenar el valor del input
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const teams = useSelector(state => state.team);

    useEffect(() => {
        dispatch(fetchTeam());
      }, [dispatch]);
    
    const handleSearch = () => {
      // Llama a la acción fetchDrivers y pasa el valor del input como parámetro
      //dispatch(fetchDriver(searchValue));
      dispatch(fetchDriverN(searchValue));
      console.log("dispatch realizado")
      setTimeout(() => {
        setName(true);
      }, 800);
    };
    
    const handleKeyPress = (e) => {
        // Verifica si la tecla presionada es "Enter" (código 13)
        if (e.key === 'Enter') {
            handleSearch();
        }
    };


    // Actualizar el estado local con el valor seleccionado del filtro por equipo
    const handleTeamFilterChange = (e) => {
        const selectedTeam = e.target.value;
        setTeamFilter(selectedTeam); 
    };


    // Actualiza el estado local para ver el origen del driver(api,db)
    const handleOrigin = (e) => {
        const Origin = e.target.value;
        setApiFilter(Origin)
        setTeamFilter("")
        console.log(Origin)
    }


     // Actualiza el estado local para ordenar los drivers (nombre ,nacimiento)
    const handleOrden =(e)=>{
        const data = e.target.value;
        setOrden(data)
        console.log("orden",data)
        setTeamFilter("")
        setApiFilter("")
    }

    const handleForm = ()=>{
        navigate("/form");
    }

    const handleClear = ()=>{
        setName(null)
        setTeamFilter("")
        setApiFilter("")
         setOrden("")
    }

    return (
        <nav>
            <div className="container-logo">
                <img src="./public/logo-f1-transparente.png" alt="" className='logo-f1' />
                <div>
                <button className='form' onClick={handleForm}>Form</button>
                </div>
                
            </div>
            <div className="container-buscador-filtro">


                <input  type="text"
          placeholder='Buscar por Nombre'
          className='buscador'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyPress} />


                <button className='button-buscar'onClick={handleSearch}>Buscar</button>
                <p className='texto-filtro'>Filtros:</p>
                <select name="" id="filtro-1" onChange={handleTeamFilterChange}>
                {teams && teams.teams && teams.teams.map(team => (
                     <option key={team.id} value={team.nombre}>{team.nombre}</option>
  ))}
                </select>
                <select name="" id="filtro-2" onChange={handleOrigin}>
                    <option value="API">API</option>
                    <option value="Base de datos">Base De Datos</option>
                </select>
                <select name="" id="filtro-3" onChange={handleOrden}>
        <option value="">Ordenar por defecto</option>
        <option value="nombre_ASC">Nombre Ascendente</option>
        <option value="nombre_DESC">Nombre Descendente</option>
        <option value="nacimiento_ASC">Fecha de Nacimiento Ascendente</option>
        <option value="nacimiento_DESC">Fecha de Nacimiento Descendente</option>
      </select>
            </div>
            <button className='clear' onClick={handleClear}><i class="fa-solid fa-arrows-rotate icon-clean"></i></button>
        </nav>
    )
}

export default Nav