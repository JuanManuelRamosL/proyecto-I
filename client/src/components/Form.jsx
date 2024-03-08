import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postDriver } from '../redux/actions';
import "./form.css"
function Forms() {
  const dispatch = useDispatch();
  const [creado, setCreado] = useState(false);
  const [formData, setFormData] = useState({
    "nombre": "",
    "apellido": "",
    "description": "",
    "image": "",
    "nationalidad": "",
    "dob": "",
    "teams": "",
    
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Llama a la acción de Redux para enviar los datos del formulario
      console.log(formData)
      dispatch(postDriver(formData)); // Envía el objeto formData a la acción de Redux
      setCreado(true)
    } catch (error) {
      console.error('Error creando el driver:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

    return (
      <div className='container-crear-driver'>
       <div className="form-container">
  <form onSubmit={handleSubmit} className='form-original'>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido" value={formData.apellido} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="nacionalidad">Nacionalidad:</label>
        <input type="text" id="nacionalidad" name="nationalidad" value={formData.nationalidad} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="imagen">Imagen (URL):</label>
        <input type="url" id="imagen" name="image" value={formData.image} onChange={handleChange} required />
      </div> 
      <div>
        <label htmlFor="fecha-nacimiento">Fecha de Nacimiento:</label>
        <input type="text" id="fecha-nacimiento" name="dob" value={formData.dob} onChange={handleChange} required />
      </div> 
      <div>
        <label htmlFor="descripcion">Descripción:</label>
        <textarea id="descripcion" name="description" value={formData.description} onChange={handleChange} required></textarea>
      </div>
      <div>
         <div>
        <label htmlFor="team">Equipos:</label>
        <input type="text" id="teams" name="teams" value={formData.team} onChange={handleChange} required />
      </div> 
      </div>
      <div className='container-button-crear'>
        <button type="submit" className='button-crear-driver'>Crear Driver</button>
      </div>
    </form>

    {creado ? (
      <p className='texto-creado'>¡Corredor creado exitosamente!</p>
    ): <div></div>}
    </div>
      </div>
    )
  }
  
  export default Forms