// actions.js
import axios from 'axios';
import { SET_DRIVERS,SET_DRIVER, SET_TEAM } from './reducer';

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
      // Despachar una nueva acción con los datos obtenidos de la segunda petición
      dispatch({ type: SET_DRIVER, payload: response2.data});// el
      
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
      // Despachar una nueva acción con los datos obtenidos de la segunda petición
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
      // Despachar una nueva acción con los datos obtenidos de la segunda petición
      dispatch({ type: SET_DRIVER, payload: response3.data });
      
    } catch (error) {
      console.error('Error fetching drivers:', error);
    }
  };
};
