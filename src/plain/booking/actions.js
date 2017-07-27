import store from '../store/index';

export const ADD = 'Booking/ADD';
export const RESET = 'Booking/RESET';


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
