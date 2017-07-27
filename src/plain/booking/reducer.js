import { ADD, RESET } from './actions';

const INITIAL_STATE = {
  users: [],
  lastUser: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        users: [...state.users, action.payload.user],
        lastUser: action.payload.user
      };
    case RESET:
      return {};
    default:
      return state;
  }
};
