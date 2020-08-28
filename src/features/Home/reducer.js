const INITIAL_STATE = {
  counter: 0,
  likes: 0,
  username: '',
  password: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return {counter: state.counter + 1};
    case 'INC_LIKES':
      return {likes: state.likes + 1};
    case 'DEC_LIKES':
      return {likes: state.likes - 1};
    case 'SUBMIT_CRED_USER':
      return {username: action.payload};
    case 'SUBMIT_CRED_PASS':
      return {password: action.payload};
  }
  return state;
};
