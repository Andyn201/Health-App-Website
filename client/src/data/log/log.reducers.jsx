import {
    GET_LOGS,
    DELETE_LOG,
    ADD_LOG,
    GET_LOG,
    EDIT_LOG
  } from './log.types';
  
  const initialState = {
    logs: [],
    log: {},
    loading: true,
    error: {}
  };
  
  function logReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_LOGS:
        return {
          ...state,
          logs: payload,
          loading: false
        };
      case GET_LOG:
        return {
          ...state,
          log: payload,
          loading: false
        };
      case ADD_LOG:
        return {
          ...state,
          logs: [payload, ...state.logs],
          loading: false
        };
        case EDIT_LOG:
        return {
          ...state,
          logs: [payload, ...state.logs],
          loading: false
        };
      case DELETE_LOG:
        return {
          ...state,
          logs: state.logs.filter((log) => log._id !== payload),
          loading: false
        };
      default:
        return state;
    }
  }
  
  export default logReducer;
  