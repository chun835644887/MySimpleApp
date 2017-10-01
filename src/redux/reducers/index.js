import { combineReducers } from 'redux';
import homeReducer from './HomeReducer';
import navReducer from './NavReducer';
import reduxReducer from './ReduxReducer';

export default combineReducers({
    navReducer:navReducer,
    homeReducer:homeReducer,
    reduxReducer:reduxReducer
})