import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postDriver } from '../redux/actions';
import "./form.css"
import { useNavigate } from "react-router-dom";
import { fetchTeam } from '../redux/actions';
function Forms() {
  const dispatch = useDispatch();
  const teams = useSelector(state => state.team);
  const [creado, setCreado] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    "nombre": "",
    "apellido": "",
    "description": "",
    "image": "",
    "nationalidad": "",
    "dob": "",
    "teams": [],
    
  });

  const validateForm = (formData) => {
    const errors = {};
  
    if (!formData.nombre) {
      errors.nombre = 'El nombre es obligatorio';
    } else if (/\d/.test(formData.nombre)) {
      errors.nombre = 'El nombre no puede contener números';
    }
  
    if (!formData.apellido) {
      errors.apellido = 'El apellido es obligatorio';
    } else if (/\d/.test(formData.apellido)) {
      errors.apellido = 'El apellido no puede contener números';
    }
  
    if (!formData.nationalidad) {
      errors.nationalidad = 'La nacionalidad es obligatoria';
    }
  
    if (!formData.dob) {
      errors.dob = 'La fecha de nacimiento es obligatoria';
    }else if (!/^\d+$/.test(formData.dob.replace(/-/g, ''))) {
      errors.dob = 'La fecha de nacimiento no debe contener letras';
    }
  
    if (!formData.teams) {
      errors.teams = 'Los equipos son obligatorios';
    }
  
    if (!formData.image) {
      errors.image = 'La URL de la imagen es obligatoria';
    }
  
    return errors;
  };
/*   const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Llama a la acción de Redux para enviar los datos del formulario
      console.log(formData)
      dispatch(postDriver(formData)); // Envía el objeto formData a la acción de Redux
      setCreado(true)
    } catch (error) {
      console.error('Error creando el driver:', error);
    }
  }; */


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Validar que los campos obligatorios no estén vacíos
    if (!formData.nombre || !formData.apellido || !formData.nationalidad || !formData.dob || !formData.teams|| !formData.image) {
        alert('Hay campos sin completar.');
        return;
      }
  
      // Llama a la acción de Redux para enviar los datos del formulario
      console.log(formData)
      dispatch(postDriver(formData)); // Envía el objeto formData a la acción de Redux 
      setCreado(true);
    } catch (error) {
      console.error('Error creando el driver:', error);
    }
  };
  

  const handleChange = (event) => {
    const { name, value } = event.target; 
    if (name === "teams") {
      // Seleccionar múltiples equipos, agregar o eliminar del array
      const selectedTeam = event.target.value;
      const currentTeams = formData.teams;
      const index = currentTeams.indexOf(selectedTeam);
      if (index === -1) {
        // Si no está presente, agregar al array
        setFormData({ ...formData, [name]: [...currentTeams, selectedTeam] });
        setErrors(validateForm({ ...formData, [name]: value }));
      } else {
        // Si ya está presente, eliminar del array
        const updatedTeams = [...currentTeams.slice(0, index), ...currentTeams.slice(index + 1)];
        setFormData({ ...formData, [name]: updatedTeams });
        setErrors(validateForm({ ...formData, [name]: value }));
      }
    } else {
      setFormData({ ...formData, [name]: value });
      setErrors(validateForm({ ...formData, [name]: value }));
    }
  };
//validar
  const handleNavigate = ()=>{
    navigate("/home");
  }

  const handleNavigate2 = ()=>{
    navigate("/delete")
  }
  useEffect(() => {
  console.log(formData)
  }, [formData]);

  useEffect(() => {
    dispatch(fetchTeam());
  }, [dispatch]);
    return (
      <div className='container-crear-driver'>
        <div className="container-buttons-form">
        <button onClick={handleNavigate} className='buton-volver-form'><i class="fa-solid fa-circle-arrow-left icon-volver-form"></i></button>
         <button onClick={handleNavigate2} className='button-eliminar'>Eliminar</button>
        </div>

       <div className="form-container">
        
  <form onSubmit={handleSubmit} className='form-original'>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange}  />
        {errors.nombre && <p className="error-message">{errors.nombre}</p>}
      </div>
      <div>
        <label htmlFor="apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido" value={formData.apellido} onChange={handleChange}  />
        {errors.apellido && <p className="error-message">{errors.apellido}</p>}
      </div>
      <div>
        <label htmlFor="nacionalidad">Nacionalidad:</label>
        <input type="text" id="nacionalidad" name="nationalidad" value={formData.nationalidad} onChange={handleChange} />
        {errors.nationalidad && <p className="error-message">{errors.nationalidad}</p>}
      </div>
      <div>
        <label htmlFor="imagen">Imagen (URL):</label>
        <input type="url" id="imagen" name="image" value={formData.image} onChange={handleChange} />
        {errors.image && <p className="error-message">{errors.image}</p>}
      </div> 
      <div>
        <label htmlFor="fecha-nacimiento">Fecha de Nacimiento:</label>
        <input type="text" id="fecha-nacimiento" name="dob" value={formData.dob} onChange={handleChange} />
        {errors.dob && <p className="error-message">{errors.dob}</p>}
      </div> 
      <div>
        <label htmlFor="descripcion">Descripción:</label>
        <textarea id="descripcion" name="description" value={formData.description} onChange={handleChange}></textarea>
      </div>
      <div>

      </div>
      <div>
            <label htmlFor="teams">Equipos:</label>
            <select multiple id="teams" name="teams" value={formData.teams} onChange={handleChange}>
              {teams && teams.teams && teams.teams.map(team => (
                <option key={team.id} value={team.nombre}>{team.nombre}</option>
              ))}
            </select>
            {/* Puedes agregar validación de errores para equipos si es necesario */}
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