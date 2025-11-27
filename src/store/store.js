import { createStore, combineReducers, applyMiddleware } from "redux";
import { usersReducer } from "./reducers/usersReducer";
import { thunk } from "redux-thunk";
import authReduccer from "./reducers/authReducer";

const rootReducers = combineReducers({
  usersData: usersReducer,
  authData: authReduccer,
});

export const store = createStore(rootReducers, applyMiddleware(thunk));

window.store = store;
