import store from '../store/index';

export const INCREMENT = 'Counter/INCREMENT';
export const DECREMENT = 'Counter/DECREMENT';


export const createIncrementAction = () => {
  store.dispatch({ type: INCREMENT});
};

export const createDecrementAction = () => {
  store.dispatch({ type: DECREMENT});
};
