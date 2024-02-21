// actions.js
import axios from 'axios';
import { SET_DRIVERS,SET_DRIVER } from './reducer';

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
      // Despachar una nueva acción con los datos obtenidos de la segunda petición
      dispatch({ type: SET_DRIVER, payload: response2.data });
      
    } catch (error) {
      console.error('Error fetching drivers:', error);
    }
  };
};

