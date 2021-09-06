import { createStore, combineReducers, applyMiddleware,compose } from "redux";
import { authReducer } from "./auth/reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
    auth:authReducer,
});


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
  );
export const store = createStore(
    rootReducer,
    enhancer
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);