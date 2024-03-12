import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteDriver, deleteDriverN } from '../redux/actions';
import { useNavigate } from "react-router-dom";

import './Delete.css';


function Delete() {
    const dispatch = useDispatch();
    const [formData,setFormData] = useState("")
    const [formDataN,setFormDataN] = useState("")
    const navigate = useNavigate();
    const driverD = useSelector(state => state.driverD);
    const driverDN = useSelector(state => state.driverDN);
    const [llave,setLlave] = useState("")
const handleChange = (event) => {
    setFormData(event.target.value);
  };

const handleSubmit = (event) => {
    event.preventDefault(); 
    dispatch(deleteDriver(formData));
   setLlave(driverD.message)
  };

const goBack = () => {
  navigate("/form")
}

useEffect(()=>{
  setLlave("")
},[])
 


//nombre
const handleChangeN = (event) => {
  setFormDataN(event.target.value);
};

const handleSubmitN = (event) => {
  event.preventDefault(); 
  dispatch(deleteDriverN(formDataN));
 setLlave(driverDN.message)
};
  return (
    <div className="container-delete">
      <button onClick={goBack} className='button-volver-delete'><i class="fa-solid fa-circle-arrow-left icon-volver-delete"></i></button>
    <h1 className="titulo-delete">Ingresar ID del corredor para eliminarlo</h1>
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} className="input-delete" />
      <button type="submit" className="button-delete">Eliminar</button>
    </form>
    <h1 className="titulo-delete">Ingresar Nombre de corredor a eliminar</h1>
    <form className="form" onSubmit={handleSubmitN}>
      <input type="text" onChange={handleChangeN} className="input-delete" />
      <button type="submit" className="button-delete">Eliminar</button>
    </form> {
  llave == "Corredor eliminado exitosamente" ? (
  <div className='button-eliminar-driver'>
    <p className="txt-delete">Corredor eliminado correctamente</p>
  </div>
  ): <></>
}
    </div>
  )
}

export default Delete
