import api from '../../utils/api';
import { setAlert } from '../alert/alert.actions';
import {
  GET_PLATINUM_USERS,
  GET_APPOINTMENTS,
  GET_APPOINTMENTS_FAILED
} from './admin.types';

// Get platinum users
export const getPlatinumUsers = () => async dispatch => {
    try {
      const res = await api.get('/users/platinum');
  
      dispatch({
        type: GET_PLATINUM_USERS,
        payload: res.data
      });
    } catch (err) {
        
        const errors = err.response.data.errors;
  
        if (errors) {
          errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
    }
  };





// Get Appointments
export const getAppontments = () => async dispatch => {
  try {
    const res = await api.get('/admin/appointments');

    dispatch({
      type: GET_APPOINTMENTS,
      payload: res.data
    });
    
  } catch (err) {
    dispatch({
      type: GET_APPOINTMENTS_FAILED
    });
  }
};





// Delete appointment
export const deleteAppointment = id => async dispatch => {
  try {
    const res = await api.delete(`/admin/appointments/${id}`);


    dispatch(setAlert(res.data.msg, 'success'));
  } catch (err) {
    
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  
  }
};


