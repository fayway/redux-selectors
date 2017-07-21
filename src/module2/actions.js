import store from '../store/index';

export const INCREMENT = 'Module2/INCREMENT';
export const DECREMENT = 'Module2/DECREMENT';


export const createIncrementAction = () => {
  store.dispatch({ type: INCREMENT});
};

export const createDecrementAction = () => {
  store.dispatch({ type: DECREMENT});
};
