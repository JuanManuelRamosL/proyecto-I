// reducers.js
export const SET_DRIVERS = 'SET_DRIVERS';
export const SET_DRIVER = "SET_DRIVER";

const initialState = {
  drivers: [],
  driver:[]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DRIVERS:
      return {
        ...state,
        drivers: action.payload,
      };  case SET_DRIVER:
      return {
        ...state,
        driver: action.payload, // Puedes ajustar el nombre según sea necesario
      };
    default:
      return state;
  }
  
};

export default rootReducer;
