import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducers';

const initialState = {
    city: 'Telde,es',
    cities: []
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Le decimos al store que vamos a incorporrar el middleware thunk
export const store = createStore( reducers, initialState, composeEnhancers(applyMiddleware(thunk)) );