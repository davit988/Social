import { createStore,combineReducers,applyMiddleware } from "redux";
import { usersReducer } from "./reducers/usersReducer";
import  {thunk}  from "redux-thunk";

const rootReducers = combineReducers({
 usersData : usersReducer
})

export const store = createStore(rootReducers,applyMiddleware(thunk))

window.store = store
