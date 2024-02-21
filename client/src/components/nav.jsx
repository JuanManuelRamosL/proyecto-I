import './nav.css'
import { useDispatch } from 'react-redux';
import { fetchDriver } from '../redux/actions';
import { useState } from 'react';



function Nav({setName}) {
    const [searchValue, setSearchValue] = useState(''); // Estado local para almacenar el valor del input
    const dispatch = useDispatch();
  
  
    const handleSearch = () => {
      // Llama a la acción fetchDrivers y pasa el valor del input como parámetro
      dispatch(fetchDriver(searchValue));
      console.log(searchValue)
     setName(true)
    };
    return (
        <nav>
            <div className="container-logo">
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fsoymotor.com%2Fnoticias%2Fbratches-pide-un-voto-de-confianza-para-el-nuevo-logo-de-la-formula-1-944771&psig=AOvVaw264CDvNBfPq7Qyirwgw6Wj&ust=1708542504165000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDEnfzOuoQDFQAAAAAdAAAAABAE" alt="" />
            </div>
            <div className="container-buscador-filtro">
                <input  type="text"
          placeholder='Search by My Name'
          className='buscador'
          value={searchValue} // Asigna el valor del input al estado local
          onChange={(e) => setSearchValue(e.target.value)} />
                <button className='button-buscar'onClick={handleSearch}>Search</button>
                <select name="" id="filtro">
                    <option value="Todos">Todos</option>
                    <option value="Red Bull">Red Bull</option>
                    <option value="Ferrari">Ferrari</option>
                    <option value="Mercedez Benz">Mercedez Benz</option>
                    <option value="">Base de Datos</option>
                    <option value="">La otra cosa</option>
                </select>
            </div>
        </nav>
    )
}

export default Nav