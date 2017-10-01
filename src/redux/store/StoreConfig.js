import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import _middleware from "../middleware"
import rootReducer from '../reducers/index';

const _thunk = [thunk.withExtraArgument()];
const store = createStore(rootReducer,applyMiddleware(..._middleware.concat(_thunk)));
console.log(store);
export default store;