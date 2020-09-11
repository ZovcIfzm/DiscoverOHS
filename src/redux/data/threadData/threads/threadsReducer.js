import * as types from './threadsTypes';
const initialState = {
  error: null,
  byId: {},
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case types.DATA_THREAD_THREADS_CREATE_REQUEST: {
      return {
        ...state,
        error: null,
      };
    }

    case types.DATA_THREAD_THREADS_CREATE_SUCCESS: {
      return {
        ...state,
        byId: {
          ...state.byId,
          ...payload,
        },
      };
    }

    case types.DATA_THREAD_THREADS_CREATE_FAILURE: {
      return {
        ...state,
        error: payload,
      };
    }
  }
};
