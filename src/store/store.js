import { createStore,combineReducers } from "redux";
import { usersReducer } from "./reducers/usersReducer";

const rootReducers = combineReducers({
 usersData : usersReducer
})

export const store = createStore(rootReducers)