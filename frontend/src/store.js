import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
// thunk is redux middleware for async state inside 'action' updates in the store;
import thunk from 'redux-thunk';
import productListReducer from './reducer/productReducers';

const initialState = {};

// reducers are the schema for the actions that will happen in the store. (how the data will be stored;)
const reducer = combineReducers({
  productList: productListReducer,
});

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  // thunk is a middleware that allows async inside the store for requests from the DB;
  compose(applyMiddleware(thunk))
);

export default store;
