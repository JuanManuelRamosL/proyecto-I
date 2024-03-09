// reducers.js
export const SET_DRIVERS = 'SET_DRIVERS';
export const SET_DRIVER = "SET_DRIVER";
export const SET_TEAM = "SET_TEAM";
export const SET_DRIVER_N= "SET_DRIVER_N"

const initialState = {
  drivers: [],
  driver:[],
  team:[],
  driverN:[]
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
      }; case SET_TEAM:
      return {
        ...state,
        team: action.payload, // Puedes ajustar el nombre según sea necesario
      };case SET_DRIVER_N:
      return {
        ...state,
        driverN: action.payload, // Puedes ajustar el nombre según sea necesario
      };
    default:
      return state;
  }
  
};

export default rootReducer;
