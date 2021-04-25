import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {cartReducers} from './reducers/cartReducers';

const reducers = combineReducers({
  cart: cartReducers
});
const middleware = [thunk];
let initialState = {};

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;