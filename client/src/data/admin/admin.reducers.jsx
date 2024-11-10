import {
    GET_PLATINUM_USERS, 
    GET_APPOINTMENTS, 
    GET_APPOINTMENTS_FAILED
  } from './admin.types';
  
  const initialState = {
    platinum_users: [],
    loading: true,
    error: {}
  };
  
  export default function adminReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_PLATINUM_USERS:
        return {
          ...state,
          platinum_users: payload,
          loading: false
        }
      case GET_APPOINTMENTS:
        return {
          ...state,
          appointments: payload,
          loading: false
        };
      case GET_APPOINTMENTS_FAILED:
        return {
          ...state,
          appointments: [],
          loading: false
        };
      default:
        return state;
    }
  }
  