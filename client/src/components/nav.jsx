import './nav.css'
import { useDispatch } from 'react-redux';
import { fetchDriver } from '../redux/actions';
import { useState } from 'react';



function Nav({setName,setTeamFilter,setApiFilter,setOrden}) {
    const [searchValue, setSearchValue] = useState(''); // Estado local para almacenar el valor del input
    const dispatch = useDispatch();
    
  
    const handleSearch = () => {
      // Llama a la acción fetchDrivers y pasa el valor del input como parámetro
      dispatch(fetchDriver(searchValue));
      console.log(searchValue)
     setName(true)
    };

    const handleTeamFilterChange = (e) => {
        const selectedTeam = e.target.value;
        setTeamFilter(selectedTeam); // Actualizar el estado local con el valor seleccionado del filtro por equipo
    };

    const handleOrigin = (e) => {
        const Origin = e.target.value;
        setApiFilter(Origin)
        console.log(Origin)
    }

    const handleOrden =(e)=>{
        const data = e.target.value;
        setOrden(data)
    }

    return (
        <nav>
            <div className="container-logo">
                <img src="./public/logo-f1-transparente.png" alt="" className='logo-f1' />
            </div>
            <div className="container-buscador-filtro">


                <input  type="text"
          placeholder='Search by My Name'
          className='buscador'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)} />


                <button className='button-buscar'onClick={handleSearch}>Search</button>
                <p className='texto-filtro'>Filtros:</p>
                <select name="" id="filtro-1" onChange={handleTeamFilterChange}>
                    <option value="Red Bull">Red Bull</option>
                    <option value="Ferrari">Ferrari</option>
                    <option value="Mercedes">Mercedez Benz</option>
                    <option value="BMW">BMW</option>
                    <option value="">Base de Datos</option>
                </select>
                <select name="" id="filtro-2" onChange={handleOrigin}>
                    <option value="API">API</option>
                    <option value="Base de datos">Base De Datos</option>
                </select>
                <select name="" id="filtro-3" onChange={handleOrden}>
        <option value="">Ordenar por:</option>
        <option value="nombre_ASC">Nombre Ascendente</option>
        <option value="nombre_DESC">Nombre Descendente</option>
        <option value="nacimiento_ASC">Fecha de Nacimiento Ascendente</option>
        <option value="nacimiento_DESC">Fecha de Nacimiento Descendente</option>
      </select>
            </div>
        </nav>
    )
}

export default Nav