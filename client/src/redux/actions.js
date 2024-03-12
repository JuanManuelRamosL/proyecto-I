// actions.js
import axios from 'axios';
import { SET_DRIVERS,SET_DRIVER, SET_TEAM, SET_DRIVER_N,SET_DELETE, SET_DELETE_N,SET_AUX } from './reducer';

export const fetchDrivers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/drivers');
      dispatch({ type: SET_DRIVERS, payload: response.data });
      
    } catch (error) {
      console.error('Error fetching drivers:', error);
    }
  };
};



export const fetchDriver = (name) => {
  return async (dispatch) => {
    try {
      const response2 = await axios.get(`http://localhost:3001/driverss/name?name=${name}`);
      console.log(response2)
      dispatch({ type: SET_DRIVER, payload: response2.data});// el
      
    } catch (error) {
      console.error('Error fetching drivers:', error);
    }
  };
};

//nueva rura driver
export const fetchDriverN = (name) => {
  return async (dispatch) => {
    try {
      const response3 = await axios.get(`http://localhost:3001/prueba/name?name=${name}`);
      console.log(response3.data)
      dispatch({ type: SET_DRIVER_N, payload: response3.data});// el
      
    } catch (error) {
      console.error('Error fetching drivers:', error);
    }
  };
};



export const fetchTeam = () => {
  return async (dispatch) => {
    try {
      const responseT = await axios.get(`http://localhost:3001/teams`);
      console.log(responseT)
      dispatch({ type: SET_TEAM, payload: responseT.data });
      
    } catch (error) {
      console.error('Error fetching drivers:', error);
    }
  };
};

export const postDriver = (formData) => {
  return async (dispatch) => {
    try {
      console.log(formData)
      const response3 = await axios.post(`http://localhost:3001/driver`,formData);
      dispatch({ type: SET_DRIVER, payload: response3.data });
      
    } catch (error) {
      console.error('Error fetching drivers:', error);
    }
  };
};

//delete 
export const deleteDriver = (formData) => {
  return async (dispatch) => {
    try {
      console.log(formData)
      const responseD = await axios.delete(`http://localhost:3001/delete`, {
        data: { id: formData } // Envía el ID del conductor en el cuerpo de la solicitud
      });
      dispatch({ type: SET_DELETE, payload: responseD.data });
      
    } catch (error) {
      console.error('Error fetching drivers:', error);
    }
  };
};

export const deleteDriverN = (formData) => {
  return async (dispatch) => {
    try {
      console.log(formData)
      const responseD = await axios.delete(`http://localhost:3001/delete-name`, {
        data: { nombre: formData } // Envía el nombre del conductor en el cuerpo de la solicitud
      });
      dispatch({ type: SET_DELETE_N, payload: responseD.data });
      
    } catch (error) {
      console.error('Error fetching drivers:', error);
    }
  };
};


//prueba estado auxiliar para ordenamiento 
export const aux = (data) => {
  return async (dispatch) => {
    try {
    
      dispatch({ type: SET_AUX, payload: data });
      
    } catch (error) {
      console.error('Error fetching drivers:', error);
    }
  };
};