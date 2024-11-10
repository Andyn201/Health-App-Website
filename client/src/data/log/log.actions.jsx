import api from '../../utils/api';
import { setAlert } from '../alert/alert.actions';
import {
    GET_LOGS,
    DELETE_LOG,
    ADD_LOG,
    GET_LOG,
    EDIT_LOG
} from './log.types';



// Add log
export const addLog = formData => async dispatch => {
    try {
      const res = await api.post('/log', formData);
  
      dispatch({
        type: ADD_LOG,
        payload: res.data
      });
  
      dispatch(setAlert('Log Entry Created', 'success'));

    } catch (err) {

      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
      }
    }
  };
  
  



// Get logs
export const getLogs = () => async dispatch => {
  try {
    const res = await api.get('/log');

    dispatch({
      type: GET_LOGS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};




// Get log
export const getLog = id => async dispatch => {
    try {
      const res = await api.get(`/log/${id}`);
  
      dispatch({
        type: GET_LOG,
        payload: res.data
      });
    } catch (err) {
      
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
      }
    }

  };
  
  
  

  
  
  // Edit log
  export const editLog = (formData, id) => async dispatch => {
      try {
        const res = await api.put(`/log/${id}`, formData);
    
        dispatch({
          type: EDIT_LOG,
          payload: res.data
        });
    
        dispatch(setAlert('Log Entry Edited', 'success'));
      } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
          errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
      }
    };
    
    




// Delete log
export const deleteLog = id => async dispatch => {
  try {
    await api.delete(`/log/${id}`);

    dispatch({
      type: DELETE_LOG,
      payload: id
    });


    dispatch(setAlert('Log Entry Removed', 'success'));
  } catch (err) {
    
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  
  }
};





