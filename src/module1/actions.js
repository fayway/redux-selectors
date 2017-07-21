import store from '../store/index';

export const ADD = 'Module1/ADD';
export const RESET = 'Module1/RESET';


export const createAddAction = (user) => {
  store.dispatch({
    type: ADD,
    payload: {
      user
    }
  });
};

export const createResetAction = () => {
  store.dispatch({ type: RESET});
};
