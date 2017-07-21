import { combineReducers }  from 'redux';

import module1 from '../module1/reducer';
import module2 from '../module2/reducer';

export default combineReducers({
  module1,
  module2
});
