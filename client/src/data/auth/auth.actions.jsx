import api from '../../utils/api';
import { setAlert } from '../alert/alert.actions';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  ACCOUNT_DELETED,
} from './auth.types';



// Request Demo
export const requestDemo = (formData) => async dispatch => {
  try {
    const res = await api.post('/admin/appointments', formData);

    dispatch(setAlert(res.data.confirmation, 'success'));
  } catch (err) {
    dispatch(setAlert('Sorry, The Application Could Not Go Through', 'danger'));
  }
};





// Load User
export const loadUser = () => async dispatch => {
  try {
    const res = await api.get('/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
    
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};


// Register User
export const register = formData => async dispatch => {
  try {
    const res = await api.post('/users', formData);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User
export const login = (email, password) => async dispatch => {
  const body = { email, password };

  try {
    const res = await api.post('/auth', body);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout
export const logout = () => ({ type: LOGOUT });




// Send Reset Password Email
export const sendResetPasswordEmail = formData => async dispatch => {
  try {
    const res = await api.post('/auth/reset', formData);

    dispatch(setAlert(res.data.confirmation, 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};


// Send Reset Password Email
export const resetPassword = (formData, token) => async dispatch => {
  try {
    const res = await api.post(`/auth/reset/${token}`, formData);

    dispatch(setAlert(res.data.confirmation, 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};


// Update Billing
export const updateBilling = (formData) => async dispatch => {
  try {
    const res = await api.post('/users/billing', formData);

    dispatch(setAlert(res.data.confirmation, 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

// Upgrade Plan
export const upgradePlan = () => async dispatch => {
  try {
    const res = await api.post('/auth/upgrade');

    dispatch(setAlert(res.data.confirmation, 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};



// Downgrade Plan
export const downgradePlan = () => async dispatch => {
  try {
    const res = await api.post('/auth/downgrade');

    dispatch(setAlert(res.data.confirmation, 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};



// Delete account & cancel membersip
export const deleteAccount = () => async dispatch => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      await api.delete('/auth');

      dispatch({ type: ACCOUNT_DELETED });

      dispatch(setAlert('Your account has been deleted', 'success'));
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};