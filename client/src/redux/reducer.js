// reducers.js
export const SET_DRIVERS = 'SET_DRIVERS';
export const SET_DRIVER = "SET_DRIVER";
export const SET_TEAM = "SET_TEAM";
export const SET_DRIVER_N= "SET_DRIVER_N";
export const SET_DELETE = "SET_DELETE";
export const SET_DELETE_N = "SET_DELETE_N";
export const SET_AUX = "SET_AUX"


const initialState = {
  drivers: [],
  driver:[],
  team:[],
  driverN:[],
  driverD:[],
  driverDN:[],
  aux:[]
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
        driver: action.payload, 
      }; case SET_TEAM:
      return {
        ...state,
        team: action.payload, 
      };case SET_DRIVER_N:
      return {
        ...state,
        driverN: action.payload, 
      };case SET_DELETE:
      return {
        ...state,
        driverD: action.payload, 
      };case SET_DELETE_N:
      return {
        ...state,
        driverDN: action.payload, 
      };case SET_AUX:
      return {
        ...state,
        aux: action.payload, 
      };
    default:
      return state;
  }
  
};

export default rootReducer;
