import { createStore, combineReducers, applyMiddleware } from "redux";
import { usersReducer } from "./reducers/usersReducer";
import authReduccer from "./reducers/authReducer";
import { profileReducer } from "./reducers/profileReducer";

import { thunk } from "redux-thunk";

const rootReducers = combineReducers({
  usersData: usersReducer,
  authData: authReduccer,
  profileData: profileReducer,
});

export const store = createStore(rootReducers, applyMiddleware(thunk));

window.store = store;
