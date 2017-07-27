import { combineReducers }  from 'redux';

import booking from '../booking/reducer';
import counter from '../counter/reducer';

export default combineReducers({
  booking,
  counter
});
