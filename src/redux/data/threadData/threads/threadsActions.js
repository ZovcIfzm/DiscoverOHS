import firestore from '@react-native-firebase/firestore';
import * as types from './forumsTypes';

const createRequest = () => {
  return {
    type: types.DATA_THREAD_THREADS_CREATE_REQUEST,
  };
};

const createSuccess = (userId, threadId, postData) => {
  return {
    type: types.DATA_THREAD_THREADS_CREATE_SUCCESS,
    payload: postData,
  };
};

const createFailure = (error) => {
  return {
    type: types.DATA_THREAD_THREADS_CREATE_FAILURE,
    payload: error,
  };
};

export const createThreads = (postData) => (dispatch) => {
  const post = {...postData, createdAt: new Date()};

  firestore().collection('threads').doc().set(post);
};
