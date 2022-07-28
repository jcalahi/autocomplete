import { applyMiddleware, legacy_createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = composeWithDevTools(applyMiddleware(thunk));
const store = legacy_createStore(rootReducer, middleware);

export default store;
